import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import DashboardClient from './DashboardClient'

export const instant = false;

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  // Fetch all data for the dashboard
  const [profileRes, projectsRes, experienceRes, skillsRes] = await Promise.all([
    supabase.from('site_profile').select('*').eq('id', 1).single(),
    supabase.from('projects').select('*').order('sort_order'),
    supabase.from('experience').select('*').order('sort_order'),
    supabase.from('skills').select('*').order('sort_order'),
  ])

  return (
    <DashboardClient
      initialProfile={profileRes.data}
      initialProjects={projectsRes.data ?? []}
      initialExperience={experienceRes.data ?? []}
      initialSkills={skillsRes.data ?? []}
      userEmail={user.email ?? ''}
    />
  )
}
