export interface SiteProfile {
  id: number
  full_name: string
  headline: string
  bio: string
  email: string
  location: string
  github_url?: string
  linkedin_url?: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  summary: string
  technologies: string[]
  project_url: string
  image_url: string
  sort_order: number
  created_at: string
}

export interface Experience {
  id: string
  role: string
  company: string
  description: string
  start_date: string
  end_date: string
  sort_order: number
}

export interface Skill {
  id: string
  name: string
  category: string
  sort_order: number
}
