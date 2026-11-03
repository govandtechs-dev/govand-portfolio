import { createServerSupabaseClient } from '@/lib/supabase-server'
import { SiteProfile, Project, Experience, Skill } from '@/types'
import PrintButton from '@/components/PrintButton'

const DEFAULT_PROFILE: SiteProfile = {
  id: 1, full_name: 'Govand Esmail Othman', headline: 'Full-Stack Software Developer',
  bio: 'Passionate Full-Stack Developer specializing in building scalable web and cross-platform mobile applications. Dedicated to crafting seamless user experiences with modern frontends, high-performance APIs, and robust architectures.',
  email: 'govand.techs@gmail.com', location: 'Sulaymaniyah, Iraq',
  phone: '+964 771 878 5818',
  github_url: 'https://github.com/govandtechs-dev',
  linkedin_url: 'https://www.linkedin.com/in/govand-esmail-othman-bb39ba410?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  updated_at: '',
}

export const instant = false;

export default async function CVPage() {
  const supabase = await createServerSupabaseClient()
  const [profileRes, projectsRes, experienceRes, skillsRes] = await Promise.all([
    supabase.from('site_profile').select('*').eq('id', 1).single(),
    supabase.from('projects').select('*').order('sort_order'),
    supabase.from('experience').select('*').order('sort_order'),
    supabase.from('skills').select('*').order('sort_order'),
  ])

  const profile: SiteProfile = profileRes.data ?? DEFAULT_PROFILE
  const projects: Project[] = projectsRes.data ?? []
  const experience: Experience[] = experienceRes.data ?? []
  const skills: Skill[] = skillsRes.data ?? []

  // Group skills by category
  const skillGroups = skills.reduce<Record<string, string[]>>((acc, sk) => {
    const cat = sk.category || 'Other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(sk.name)
    return acc
  }, {})

  return (
    <>
      {/* Print button — hidden when printing */}
      <div className="fixed top-4 right-4 z-50 print:hidden flex gap-3">
        <a
          href="/"
          className="bg-[#161616] border border-[#2a2a2a] text-white text-sm px-4 py-2 rounded-xl hover:border-[#dc143c] transition-colors"
        >
          ← Back
        </a>
        <PrintButton />
      </div>

      <div className="min-h-screen bg-white text-[#111] font-sans px-0 print:px-0">
        <div className="max-w-3xl mx-auto px-8 py-16">
          {/* Header */}
          <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-200">
            <div>
              <h1 className="text-4xl font-black text-[#111] tracking-tight leading-tight">
                {profile.full_name}
              </h1>
              <p className="text-[#dc143c] font-semibold text-lg mt-1">{profile.headline}</p>
              {profile.bio && (
                <p className="text-gray-500 text-sm mt-3 max-w-xl leading-relaxed">{profile.bio}</p>
              )}
            </div>
            <div className="text-right text-sm text-gray-500 shrink-0 ml-8 mt-1 space-y-1">
              {profile.email && <div>{profile.email}</div>}
              {profile.location && <div>{profile.location}</div>}
              <div className="text-[#dc143c] font-medium">govand-portfolio.vercel.app</div>
            </div>
          </div>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-4">Education</h2>
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-bold text-[#111]">Bachelor’s Degree in Information Technology (BSc IT)</div>
                  <div className="text-gray-500 text-sm">Sulaimani Polytechnic University</div>
                </div>
                <div className="text-xs text-gray-400 shrink-0 ml-4 mt-0.5">
                  2023 — Expected June 2027
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
                Focus on Software Engineering, Database Systems, Network Architecture, and Advanced Web & Mobile Development.
              </p>
            </div>
          </section>

          {/* Experience */}
          {experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-4">Experience</h2>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-bold text-[#111]">{exp.role}</div>
                        <div className="text-gray-500 text-sm">{exp.company}</div>
                      </div>
                      <div className="text-xs text-gray-400 shrink-0 ml-4 mt-0.5">
                        {exp.start_date} — {exp.end_date}
                      </div>
                    </div>
                    {exp.description && (
                      <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-4">Projects</h2>
              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.id}>
                    <div className="flex items-start justify-between">
                      <div className="font-bold text-[#111]">{p.title}</div>
                      {p.project_url && p.project_url !== '#' && (
                        <span className="text-xs text-gray-400 ml-4 shrink-0">{p.project_url}</span>
                      )}
                    </div>
                    <div className="text-xs text-[#dc143c] mt-0.5">{p.technologies.join(' · ')}</div>
                    {p.summary && (
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">{p.summary}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {Object.keys(skillGroups).length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-4">Skills</h2>
              <div className="space-y-2">
                {Object.entries(skillGroups).map(([cat, names]) => (
                  <div key={cat} className="flex gap-3 text-sm">
                    <span className="text-gray-400 font-medium w-24 shrink-0">{cat}</span>
                    <span className="text-gray-700">{names.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          <section className="mb-8">
            <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-4">Languages</h2>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-bold text-[#111] block">Kurdish</span>
                <span className="text-gray-500 text-xs">Native</span>
              </div>
              <div>
                <span className="font-bold text-[#111] block">English</span>
                <span className="text-gray-500 text-xs">Fluent / Professional</span>
              </div>
              <div>
                <span className="font-bold text-[#111] block">Arabic</span>
                <span className="text-gray-500 text-xs">Conversational</span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-gray-200 flex items-center justify-between text-xs text-gray-400">
            <span>CV generated from live portfolio data</span>
            <span>{new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}</span>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 1.5cm; }
          body { background: white !important; color: #111 !important; }
        }
      `}</style>
    </>
  )
}
