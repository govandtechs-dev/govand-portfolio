import { createServerSupabaseClient } from "@/lib/supabase-server";
import { SiteProfile, Project, Experience, Skill } from "@/types";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ExperienceSection from "@/components/ExperienceSection";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

const DEFAULT_PROFILE: SiteProfile = {
  id: 1,
  full_name: "Govand Esmail Othman",
  headline: "Full-Stack Software Developer",
  bio: "Building thoughtful, high-performance digital products with modern web and mobile technologies.",
  email: "govand.techs@gmail.com",
  location: "",
  updated_at: "",
};

export const instant = false;

export default async function Home() {
  const supabase = await createServerSupabaseClient();

  const [profileRes, projectsRes, experienceRes, skillsRes] = await Promise.all(
    [
      supabase.from("site_profile").select("*").eq("id", 1).single(),
      supabase
        .from("projects")
        .select("*")
        .order("sort_order", { ascending: true }),
      supabase
        .from("experience")
        .select("*")
        .order("sort_order", { ascending: true }),
      supabase
        .from("skills")
        .select("*")
        .order("sort_order", { ascending: true }),
    ]
  );

  const profile: SiteProfile = profileRes.data ?? DEFAULT_PROFILE;
  const projects: Project[] = projectsRes.data ?? [];
  const experience: Experience[] = experienceRes.data ?? [];
  const skills: Skill[] = skillsRes.data ?? [];

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} />
        <Projects projects={projects} />
        <ExperienceSection experience={experience} />
        <Skills skills={skills} />
        <About profile={profile} />
      </main>
      <Footer />
    </>
  );
}
