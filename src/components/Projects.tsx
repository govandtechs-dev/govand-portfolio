import { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: "1",
    title: "ApexPay — Mobile Banking & Fintech",
    summary:
      "A cross-platform fintech application built with Flutter and Dart. Features biometric authentication, instant peer-to-peer transfers, virtual card management, and real-time transaction analytics powered by secure WebSocket feeds.",
    technologies: ["Flutter", "Dart", "Firebase", "Bloc State Management", "REST API"],
    project_url: "https://github.com/govandtechs-dev",
    image_url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    sort_order: 0,
    created_at: "",
  },
  {
    id: "2",
    title: "OmniStore — Cloud E-Commerce Engine",
    summary:
      "Enterprise Next.js e-commerce solution featuring server-side rendering, multi-currency Stripe checkout, real-time stock synchronisation, and a comprehensive owner control dashboard backed by PostgreSQL.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
    project_url: "https://github.com/govandtechs-dev",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    sort_order: 1,
    created_at: "",
  },
  {
    id: "3",
    title: "NexusCore — Microservices Architecture",
    summary:
      "High-throughput backend distributed system built with ASP.NET Core and C#. Implements CQRS pattern, event-driven messaging with RabbitMQ, JWT role-based security, Redis caching, and automated Docker container orchestration.",
    technologies: ["C#", ".NET 8", "Entity Framework", "Docker", "Redis", "SQL Server"],
    project_url: "https://github.com/govandtechs-dev",
    image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    sort_order: 2,
    created_at: "",
  },
  {
    id: "4",
    title: "PulseDesk — Real-Time Collaboration Hub",
    summary:
      "Modern agile task orchestration platform with drag-and-drop Kanban boards, team live chat, granular permissions, and automated email notifications built for remote developer teams.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "WebSockets"],
    project_url: "https://github.com/govandtechs-dev",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    sort_order: 3,
    created_at: "",
  },
];

export default function Projects({ projects }: ProjectsProps) {
  // If database has 1 or fewer items, show the full 4 curated featured projects
  const items = projects && projects.length >= 2 ? projects : FEATURED_PROJECTS;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-[#dc143c] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Portfolio
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Featured Case Studies
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 mx-10 bg-[#242428]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((project, i) => (
            <a
              key={project.id}
              href={project.project_url || "https://github.com/govandtechs-dev"}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#141416] border border-[#242428] rounded-2xl overflow-hidden card-glow block flex flex-col justify-between"
            >
              {/* Screenshot & Mockup Header */}
              <div className="h-60 bg-[#16161a] relative overflow-hidden border-b border-[#242428]">
                {project.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-between px-8 bg-gradient-to-br from-[#1a1a20] to-[#121214]">
                    <div className="font-playfair text-7xl font-black text-[#242428] group-hover:text-[#dc143c]/30 transition-colors select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                )}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/20" />

                {/* Project index pill */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-zinc-300">
                  Case 0{i + 1}
                </div>

                {/* Arrow Action Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 group-hover:border-[#dc143c] group-hover:bg-[#dc143c] flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-zinc-300 group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-[#dc143c] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1e1e22]">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#1b1b1f] border border-[#2a2a2e] text-zinc-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
