'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { SiteProfile, Project, Experience, Skill } from '@/types'

type Tab = 'profile' | 'projects' | 'experience' | 'skills'

interface Props {
  initialProfile: SiteProfile | null
  initialProjects: Project[]
  initialExperience: Experience[]
  initialSkills: Skill[]
  userEmail: string
}

export default function DashboardClient({
  initialProfile,
  initialProjects,
  initialExperience,
  initialSkills,
  userEmail,
}: Props) {
  const router = useRouter()
  const supabase = createClient()

  const [tab, setTab] = useState<Tab>('profile')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  // --- Profile state ---
  const [profile, setProfile] = useState<SiteProfile>(
    initialProfile ?? {
      id: 1, full_name: 'Govand Esmail Othman', headline: 'Full-Stack Software Developer',
      bio: '', email: '', location: '', updated_at: '',
    }
  )

  // --- Projects state ---
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  // --- Experience state ---
  const [experience, setExperience] = useState<Experience[]>(initialExperience)
  const [editingExp, setEditingExp] = useState<Experience | null>(null)

  // --- Skills state ---
  const [skills, setSkills] = useState<Skill[]>(initialSkills)
  const [newSkill, setNewSkill] = useState({ name: '', category: '' })

  function showMsg(text: string) {
    setMessage(text)
    setTimeout(() => setMessage(''), 3000)
  }

  async function signOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  // ===== Profile =====
  async function saveProfile() {
    setSaving(true)
    const { error } = await supabase
      .from('site_profile')
      .upsert({ ...profile, updated_at: new Date().toISOString() })
    setSaving(false)
    showMsg(error ? `Error: ${error.message}` : '✓ Profile saved!')
    router.refresh()
  }

  // ===== Projects =====
  async function saveProject() {
    if (!editingProject) return
    setSaving(true)
    const isNew = !editingProject.id || editingProject.id === 'new'
    const payload = {
      ...editingProject,
      technologies: typeof editingProject.technologies === 'string'
        ? (editingProject.technologies as string).split(',').map((t) => t.trim())
        : editingProject.technologies,
    }
    if (isNew) {
      const { id: _id, created_at: _ca, ...rest } = payload
      void _id; void _ca
      const { data } = await supabase.from('projects').insert(rest).select().single()
      if (data) setProjects((p) => [...p, data])
    } else {
      await supabase.from('projects').update(payload).eq('id', payload.id)
      setProjects((p) => p.map((pr) => (pr.id === payload.id ? payload : pr)))
    }
    setSaving(false)
    setEditingProject(null)
    showMsg('✓ Project saved!')
    router.refresh()
  }

  async function deleteProject(id: string) {
    if (!confirm('Delete this project?')) return
    await supabase.from('projects').delete().eq('id', id)
    setProjects((p) => p.filter((pr) => pr.id !== id))
    showMsg('✓ Project deleted.')
    router.refresh()
  }

  // ===== Experience =====
  async function saveExp() {
    if (!editingExp) return
    setSaving(true)
    const isNew = !editingExp.id || editingExp.id === 'new'
    if (isNew) {
      const { id: _id, ...rest } = editingExp
      void _id
      const { data } = await supabase.from('experience').insert(rest).select().single()
      if (data) setExperience((e) => [...e, data])
    } else {
      await supabase.from('experience').update(editingExp).eq('id', editingExp.id)
      setExperience((e) => e.map((ex) => (ex.id === editingExp.id ? editingExp : ex)))
    }
    setSaving(false)
    setEditingExp(null)
    showMsg('✓ Experience saved!')
    router.refresh()
  }

  async function deleteExp(id: string) {
    if (!confirm('Delete this entry?')) return
    await supabase.from('experience').delete().eq('id', id)
    setExperience((e) => e.filter((ex) => ex.id !== id))
    showMsg('✓ Deleted.')
    router.refresh()
  }

  // ===== Skills =====
  async function addSkill() {
    if (!newSkill.name.trim()) return
    setSaving(true)
    const { data } = await supabase
      .from('skills')
      .insert({ name: newSkill.name.trim(), category: newSkill.category.trim(), sort_order: skills.length })
      .select()
      .single()
    if (data) setSkills((s) => [...s, data])
    setSaving(false)
    setNewSkill({ name: '', category: '' })
    showMsg('✓ Skill added!')
    router.refresh()
  }

  async function deleteSkill(id: string) {
    await supabase.from('skills').delete().eq('id', id)
    setSkills((s) => s.filter((sk) => sk.id !== id))
    router.refresh()
  }

  const inputCls = 'w-full bg-[#0e0e0e] border border-[#2a2a2a] focus:border-[#dc143c] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors'
  const labelCls = 'text-xs text-zinc-500 uppercase tracking-wider font-medium mb-1.5 block'
  const btnPrimary = 'bg-[#dc143c] hover:bg-[#a50e2d] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors disabled:opacity-50'
  const btnGhost = 'border border-[#2a2a2a] hover:border-[#dc143c] text-zinc-400 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors'

  const TABS: { id: Tab; label: string }[] = [
    { id: 'profile', label: 'Profile' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
  ]

  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      {/* Top bar */}
      <header className="bg-[#161616] border-b border-[#2a2a2a] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-playfair text-xl font-bold">
            <span className="text-white">Govand</span>
            <span className="text-[#dc143c]">.</span>
          </span>
          <span className="text-zinc-600 text-sm hidden md:block">Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-zinc-500 text-xs hidden md:block">{userEmail}</span>
          <a href="/" target="_blank" className={btnGhost}>View Site</a>
          <button onClick={signOut} className="text-zinc-500 hover:text-[#dc143c] text-sm transition-colors">
            Sign out
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Toast */}
        {message && (
          <div className="mb-6 bg-[#161616] border border-[#dc143c]/30 text-white text-sm rounded-xl px-5 py-3">
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                tab === t.id
                  ? 'bg-[#dc143c] text-white'
                  : 'bg-[#161616] border border-[#2a2a2a] text-zinc-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ===== PROFILE TAB ===== */}
        {tab === 'profile' && (
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8">
            <h2 className="text-lg font-bold text-white mb-6">Edit Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Full Name</label>
                <input className={inputCls} value={profile.full_name}
                  onChange={(e) => setProfile({ ...profile, full_name: e.target.value })} />
              </div>
              <div>
                <label className={labelCls}>Headline</label>
                <input className={inputCls} value={profile.headline}
                  onChange={(e) => setProfile({ ...profile, headline: e.target.value })} />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input className={inputCls} type="email" value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
              </div>
              <div>
                <label className={labelCls}>Location</label>
                <input className={inputCls} value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })} />
              </div>
              <div className="md:col-span-2">
                <label className={labelCls}>Bio</label>
                <textarea className={inputCls} rows={4} value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className={btnPrimary} onClick={saveProfile} disabled={saving}>
                {saving ? 'Saving…' : 'Save Profile'}
              </button>
            </div>
          </div>
        )}

        {/* ===== PROJECTS TAB ===== */}
        {tab === 'projects' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">Projects</h2>
              <button className={btnPrimary} onClick={() =>
                setEditingProject({ id: 'new', title: '', summary: '', technologies: [], project_url: '', image_url: '', sort_order: projects.length, created_at: '' })
              }>+ Add Project</button>
            </div>

            {editingProject && (
              <div className="bg-[#161616] border border-[#dc143c]/30 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-white">{editingProject.id === 'new' ? 'New Project' : 'Edit Project'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Title</label>
                    <input className={inputCls} value={editingProject.title}
                      onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>Project URL</label>
                    <input className={inputCls} value={editingProject.project_url}
                      onChange={(e) => setEditingProject({ ...editingProject, project_url: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>Image URL</label>
                    <input className={inputCls} value={editingProject.image_url}
                      onChange={(e) => setEditingProject({ ...editingProject, image_url: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>Sort Order</label>
                    <input className={inputCls} type="number" value={editingProject.sort_order}
                      onChange={(e) => setEditingProject({ ...editingProject, sort_order: Number(e.target.value) })} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Technologies (comma-separated)</label>
                    <input className={inputCls}
                      value={Array.isArray(editingProject.technologies) ? editingProject.technologies.join(', ') : editingProject.technologies}
                      onChange={(e) => setEditingProject({ ...editingProject, technologies: e.target.value as unknown as string[] })} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Summary</label>
                    <textarea className={inputCls} rows={3} value={editingProject.summary}
                      onChange={(e) => setEditingProject({ ...editingProject, summary: e.target.value })} />
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <button className={btnGhost} onClick={() => setEditingProject(null)}>Cancel</button>
                  <button className={btnPrimary} onClick={saveProject} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
                </div>
              </div>
            )}

            {projects.map((p) => (
              <div key={p.id} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl px-6 py-4 flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">{p.title}</div>
                  <div className="text-zinc-500 text-sm mt-0.5">{p.technologies.join(', ')}</div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className={btnGhost} onClick={() => setEditingProject(p)}>Edit</button>
                  <button onClick={() => deleteProject(p.id)} className="text-[#dc143c] text-sm hover:text-red-400 transition-colors px-3">Delete</button>
                </div>
              </div>
            ))}
            {projects.length === 0 && !editingProject && (
              <div className="text-zinc-600 text-sm text-center py-12">No projects yet. Click &quot;+ Add Project&quot; to start.</div>
            )}
          </div>
        )}

        {/* ===== EXPERIENCE TAB ===== */}
        {tab === 'experience' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">Experience</h2>
              <button className={btnPrimary} onClick={() =>
                setEditingExp({ id: 'new', role: '', company: '', description: '', start_date: '', end_date: '', sort_order: experience.length })
              }>+ Add Experience</button>
            </div>

            {editingExp && (
              <div className="bg-[#161616] border border-[#dc143c]/30 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-white">{editingExp.id === 'new' ? 'New Experience' : 'Edit Experience'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Role / Title</label>
                    <input className={inputCls} value={editingExp.role}
                      onChange={(e) => setEditingExp({ ...editingExp, role: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>Company</label>
                    <input className={inputCls} value={editingExp.company}
                      onChange={(e) => setEditingExp({ ...editingExp, company: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>Start Date</label>
                    <input className={inputCls} placeholder="e.g. Jan 2023" value={editingExp.start_date}
                      onChange={(e) => setEditingExp({ ...editingExp, start_date: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>End Date</label>
                    <input className={inputCls} placeholder="e.g. Present" value={editingExp.end_date}
                      onChange={(e) => setEditingExp({ ...editingExp, end_date: e.target.value })} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelCls}>Description</label>
                    <textarea className={inputCls} rows={3} value={editingExp.description}
                      onChange={(e) => setEditingExp({ ...editingExp, description: e.target.value })} />
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <button className={btnGhost} onClick={() => setEditingExp(null)}>Cancel</button>
                  <button className={btnPrimary} onClick={saveExp} disabled={saving}>{saving ? 'Saving…' : 'Save'}</button>
                </div>
              </div>
            )}

            {experience.map((exp) => (
              <div key={exp.id} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl px-6 py-4 flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">{exp.role} <span className="text-[#dc143c]">@ {exp.company}</span></div>
                  <div className="text-zinc-500 text-sm mt-0.5">{exp.start_date} — {exp.end_date}</div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className={btnGhost} onClick={() => setEditingExp(exp)}>Edit</button>
                  <button onClick={() => deleteExp(exp.id)} className="text-[#dc143c] text-sm hover:text-red-400 transition-colors px-3">Delete</button>
                </div>
              </div>
            ))}
            {experience.length === 0 && !editingExp && (
              <div className="text-zinc-600 text-sm text-center py-12">No experience entries yet.</div>
            )}
          </div>
        )}

        {/* ===== SKILLS TAB ===== */}
        {tab === 'skills' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white">Skills</h2>

            {/* Add skill */}
            <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-zinc-300 mb-4">Add New Skill</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={labelCls}>Skill Name</label>
                  <input className={inputCls} placeholder="e.g. React" value={newSkill.name}
                    onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })} />
                </div>
                <div>
                  <label className={labelCls}>Category</label>
                  <input className={inputCls} placeholder="e.g. Frontend" value={newSkill.category}
                    onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })} />
                </div>
                <div className="flex items-end">
                  <button className={`${btnPrimary} w-full`} onClick={addSkill} disabled={saving}>
                    {saving ? 'Adding…' : '+ Add Skill'}
                  </button>
                </div>
              </div>
            </div>

            {/* Skill list */}
            <div className="flex flex-wrap gap-3">
              {skills.map((sk) => (
                <div key={sk.id} className="flex items-center gap-2 bg-[#161616] border border-[#2a2a2a] rounded-full px-4 py-2">
                  <span className="text-sm text-zinc-300">{sk.name}</span>
                  {sk.category && <span className="text-xs text-zinc-600">· {sk.category}</span>}
                  <button onClick={() => deleteSkill(sk.id)} className="text-zinc-600 hover:text-[#dc143c] transition-colors ml-1 text-xs">✕</button>
                </div>
              ))}
              {skills.length === 0 && (
                <div className="text-zinc-600 text-sm py-6">No skills added yet.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
