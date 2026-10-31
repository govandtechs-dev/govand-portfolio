import { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

const PLACEHOLDER_PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    summary:
      "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features real-time inventory, order tracking, and an admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    project_url: "#",
    image_url: "",
    sort_order: 0,
    created_at: "",
  },
  {
    id: "2",
    title: "Mobile Banking App",
    summary:
      "Cross-platform Flutter application with biometric authentication, real-time transaction notifications, and budgeting tools.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    project_url: "#",
    image_url: "",
    sort_order: 1,
    created_at: "",
  },
  {
    id: "3",
    title: "Task Management API",
    summary:
      "RESTful API built with ASP.NET Core and Entity Framework. Supports team workspaces, role-based access control, and WebSocket notifications.",
    technologies: ["C#", ".NET 8", "SQL Server", "Docker", "Swagger"],
    project_url: "#",
    image_url: "",
    sort_order: 2,
    created_at: "",
  },
];

export default function Projects({ projects }: ProjectsProps) {
  const items = projects.length > 0 ? projects : PLACEHOLDER_PROJECTS;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-[#dc143c] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Work
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Selected Projects
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 mx-10 bg-[#2a2a2a]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, i) => (
            <a
              key={project.id}
              href={project.project_url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#161616] border border-[#2a2a2a] rounded-2xl overflow-hidden card-glow block"
            >
              {/* Image / placeholder */}
              <div className="aspect-video bg-[#1e1e1e] relative overflow-hidden">
                {project.image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-playfair text-6xl font-black text-[#2a2a2a] group-hover:text-[#dc143c]/20 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-2 group-hover:text-[#dc143c] transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#0e0e0e] border border-[#2a2a2a] text-zinc-500"
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
