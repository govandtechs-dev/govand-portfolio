import { createServerSupabaseClient } from '@/lib/supabase-server'
import { SiteProfile, Project, Experience, Skill } from '@/types'
import PrintButton from '@/components/PrintButton'

const DEFAULT_PROFILE: SiteProfile = {
  id: 1,
  full_name: 'Govand Esmail Othman',
  headline: 'Full-Stack Software Developer',
  bio: 'Driven Software Engineer with a strong foundation in Information Technology, specializing in full-stack web and mobile development. Experienced in building responsive web applications with Next.js/React and high-performance cross-platform mobile apps with Flutter. Passionate about software architecture, clean code principles, and scalable cloud solutions.',
  email: 'govand.techs@gmail.com',
  location: 'Sulaymaniyah, Iraq',
  phone: '+964 771 878 5818',
  github_url: 'https://github.com/govandtechs-dev',
  linkedin_url: 'https://www.linkedin.com/in/govand-esmail-othman-bb39ba410?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  updated_at: '',
}

const DEFAULT_EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Full-Stack Software Engineer",
    company: "Freelance & Client Projects",
    description:
      "Engineered full-stack solutions and cross-platform applications for diverse clients. Developed high-performance frontends using Next.js, React, and TypeScript, while building robust RESTful API microservices with C# .NET Core and Node.js. Integrated PostgreSQL databases and automated deployment pipelines.",
    start_date: "2023",
    end_date: "Present",
    sort_order: 0,
  },
  {
    id: "2",
    role: "Mobile Application Developer",
    company: "Tech Solutions Studio",
    description:
      "Designed and developed native-feeling mobile applications with Flutter and Dart. Implemented clean architecture using Bloc and Provider state management, integrated Firebase cloud messaging, real-time WebSockets, and secure biometric authentication.",
    start_date: "2022",
    end_date: "2023",
    sort_order: 1,
  },
  {
    id: "3",
    role: "Junior Web Developer & IT Specialist",
    company: "Academic & Commercial Systems",
    description:
      "Collaborated on designing responsive websites, internal administrative dashboards, and database schemas in Microsoft SQL Server. Improved page load performance and implemented relational data queries with index optimization.",
    start_date: "2021",
    end_date: "2022",
    sort_order: 2,
  },
]

const DEFAULT_PROJECTS: Project[] = [
  {
    id: "1",
    title: "ApexPay — Mobile Banking & Fintech App",
    summary:
      "Engineered a cross-platform financial application with Flutter and Dart. Built biometric security authentication, instant peer-to-peer money transfers, interactive transaction analytics, and virtual payment card management.",
    technologies: ["Flutter", "Dart", "Firebase", "Bloc State Management", "REST API"],
    project_url: "https://github.com/govandtechs-dev",
    image_url: "",
    sort_order: 0,
    created_at: "",
  },
  {
    id: "2",
    title: "OmniStore — Cloud E-Commerce Engine",
    summary:
      "Architected an enterprise e-commerce platform using Next.js 15 and TypeScript. Includes server-side rendering, multi-currency Stripe checkout, real-time inventory synchronization, and a custom administrative dashboard backed by PostgreSQL.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
    project_url: "https://github.com/govandtechs-dev",
    image_url: "",
    sort_order: 1,
    created_at: "",
  },
  {
    id: "3",
    title: "Hotel Booking & Reservation System",
    summary:
      "Developed a mobile reservation platform in Flutter allowing users to browse hotels, explore room catalogs, secure booking tickets with QR verification, and process payments seamlessly.",
    technologies: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "REST API"],
    project_url: "https://github.com/govandtechs-dev",
    image_url: "",
    sort_order: 2,
    created_at: "",
  },
  {
    id: "4",
    title: "NexusCore — Microservices Backend API",
    summary:
      "High-throughput backend distributed architecture built with ASP.NET Core and C#. Implements CQRS pattern, event-driven messaging with RabbitMQ, JWT role-based security, Redis caching, and automated Docker orchestration.",
    technologies: ["C#", ".NET 8", "Entity Framework", "Docker", "Redis", "SQL Server"],
    project_url: "https://github.com/govandtechs-dev",
    image_url: "",
    sort_order: 3,
    created_at: "",
  },
]

const DEFAULT_SKILLS: Skill[] = [
  { id: "1", name: "React / Next.js", category: "Frontend", sort_order: 0 },
  { id: "2", name: "TypeScript / JavaScript", category: "Frontend", sort_order: 1 },
  { id: "3", name: "Tailwind CSS", category: "Frontend", sort_order: 2 },
  { id: "4", name: "HTML5 & CSS3 / SCSS", category: "Frontend", sort_order: 3 },
  { id: "5", name: "Flutter & Dart", category: "Mobile Development", sort_order: 4 },
  { id: "6", name: "Cross-Platform UI (iOS/Android)", category: "Mobile Development", sort_order: 5 },
  { id: "7", name: "Bloc / Provider State Management", category: "Mobile Development", sort_order: 6 },
  { id: "8", name: "C# / .NET Core / ASP.NET", category: "Backend & Systems", sort_order: 7 },
  { id: "9", name: "Node.js & RESTful APIs", category: "Backend & Systems", sort_order: 8 },
  { id: "10", name: "Entity Framework & Microservices", category: "Backend & Systems", sort_order: 9 },
  { id: "11", name: "PostgreSQL & SQL Server", category: "Databases & Storage", sort_order: 10 },
  { id: "12", name: "Supabase & Firebase", category: "Databases & Storage", sort_order: 11 },
  { id: "13", name: "Git, GitHub & CI/CD", category: "DevOps & Tools", sort_order: 12 },
  { id: "14", name: "Docker Containerization", category: "DevOps & Tools", sort_order: 13 },
  { id: "15", name: "Postman & Swagger Documentation", category: "DevOps & Tools", sort_order: 14 },
]

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
  const projects: Project[] = projectsRes.data && projectsRes.data.length >= 2 ? projectsRes.data : DEFAULT_PROJECTS
  const experience: Experience[] = experienceRes.data && experienceRes.data.length > 0 ? experienceRes.data : DEFAULT_EXPERIENCE
  const skills: Skill[] = skillsRes.data && skillsRes.data.length > 0 ? skillsRes.data : DEFAULT_SKILLS

  // Group skills by category
  const skillGroups = skills.reduce<Record<string, string[]>>((acc, sk) => {
    const cat = sk.category || 'Other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(sk.name)
    return acc
  }, {})

  return (
    <>
      {/* Print button bar */}
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
        <div className="max-w-4xl mx-auto px-8 py-14">
          {/* Header */}
          <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-200">
            <div>
              <h1 className="text-4xl font-black text-[#111] tracking-tight leading-tight">
                {profile.full_name}
              </h1>
              <p className="text-[#dc143c] font-bold text-lg mt-1 tracking-wide">{profile.headline}</p>
              <p className="text-gray-600 text-sm mt-3 max-w-xl leading-relaxed">
                {profile.bio || DEFAULT_PROFILE.bio}
              </p>
            </div>
            <div className="text-right text-xs text-gray-500 shrink-0 ml-8 mt-1 space-y-1.5 font-medium">
              <div>{profile.email}</div>
              <div>{profile.phone}</div>
              <div>{profile.location}</div>
              <div className="text-[#dc143c] font-semibold">govandtech.vercel.app</div>
              <div>github.com/govandtechs-dev</div>
            </div>
          </div>

          {/* Education */}
          <section className="mb-7">
            <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-3 pb-1 border-b border-gray-100">
              Education
            </h2>
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-bold text-[#111]">Bachelor of Science in Information Technology (BSc IT)</div>
                  <div className="text-gray-600 text-sm">Sulaimani Polytechnic University</div>
                </div>
                <div className="text-xs font-semibold text-gray-400 shrink-0 ml-4 mt-0.5">
                  2023 — Expected June 2027
                </div>
              </div>
              <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">
                Specialized in Software Engineering Principles, Relational Database Management, Data Structures, Cross-Platform Mobile Application Development, and Cloud Computing.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-7">
            <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-4 pb-1 border-b border-gray-100">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-bold text-[#111] text-sm">{exp.role}</div>
                      <div className="text-[#dc143c] text-xs font-semibold">{exp.company}</div>
                    </div>
                    <div className="text-xs font-medium text-gray-400 shrink-0 ml-4">
                      {exp.start_date} — {exp.end_date}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-7">
            <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-4 pb-1 border-b border-gray-100">
              Key Engineering Projects
            </h2>
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.id}>
                  <div className="flex items-start justify-between">
                    <div className="font-bold text-[#111] text-sm">{p.title}</div>
                    {p.project_url && p.project_url !== '#' && (
                      <span className="text-xs font-mono text-gray-400 ml-4 shrink-0">{p.project_url.replace('https://', '')}</span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-[#dc143c] mt-0.5">{p.technologies.join(' · ')}</div>
                  {p.summary && (
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">{p.summary}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Grid */}
          <section className="mb-7">
            <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-3 pb-1 border-b border-gray-100">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-xs">
              {Object.entries(skillGroups).map(([cat, names]) => (
                <div key={cat} className="flex gap-2">
                  <span className="text-gray-500 font-semibold w-36 shrink-0">{cat}:</span>
                  <span className="text-gray-800">{names.join(', ')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-6">
            <h2 className="text-xs font-bold text-[#dc143c] uppercase tracking-widest mb-3 pb-1 border-b border-gray-100">
              Languages
            </h2>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="font-bold text-[#111] block">Kurdish</span>
                <span className="text-gray-500">Native</span>
              </div>
              <div>
                <span className="font-bold text-[#111] block">English</span>
                <span className="text-gray-500">Professional Working Proficiency</span>
              </div>
              <div>
                <span className="font-bold text-[#111] block">Arabic</span>
                <span className="text-gray-500">Conversational Proficiency</span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-6 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-400">
            <span>Govand Esmail Othman — Full-Stack Developer Curriculum Vitae</span>
            <span>Generated live from portfolio database</span>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 1cm; size: A4; }
          body { background: white !important; color: #111 !important; }
        }
      `}</style>
    </>
  )
}
