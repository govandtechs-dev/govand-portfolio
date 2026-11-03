import { Skill } from "@/types";

interface SkillsProps {
  skills: Skill[];
}

const DEFAULT_SKILLS: Skill[] = [
  // Frontend
  { id: "1", name: "React / Next.js", category: "Frontend", sort_order: 0 },
  { id: "2", name: "TypeScript / JavaScript", category: "Frontend", sort_order: 1 },
  { id: "3", name: "Tailwind CSS", category: "Frontend", sort_order: 2 },
  { id: "4", name: "HTML5 & CSS3 / SCSS", category: "Frontend", sort_order: 3 },
  { id: "5", name: "Redux / Zustand", category: "Frontend", sort_order: 4 },

  // Mobile
  { id: "6", name: "Flutter", category: "Mobile Development", sort_order: 5 },
  { id: "7", name: "Dart", category: "Mobile Development", sort_order: 6 },
  { id: "8", name: "Cross-Platform UI (iOS & Android)", category: "Mobile Development", sort_order: 7 },
  { id: "9", name: "State Management (Bloc / Provider)", category: "Mobile Development", sort_order: 8 },

  // Backend
  { id: "10", name: "C# / .NET Core / ASP.NET", category: "Backend & Cloud", sort_order: 9 },
  { id: "11", name: "Node.js / Express", category: "Backend & Cloud", sort_order: 10 },
  { id: "12", name: "RESTful & GraphQL APIs", category: "Backend & Cloud", sort_order: 11 },
  { id: "13", name: "Entity Framework / Microservices", category: "Backend & Cloud", sort_order: 12 },

  // Database
  { id: "14", name: "PostgreSQL", category: "Databases & Storage", sort_order: 13 },
  { id: "15", name: "Microsoft SQL Server", category: "Databases & Storage", sort_order: 14 },
  { id: "16", name: "Supabase & Firebase", category: "Databases & Storage", sort_order: 15 },
  { id: "17", name: "Redis / Caching", category: "Databases & Storage", sort_order: 16 },

  // DevOps & Tools
  { id: "18", name: "Git & GitHub / CI/CD", category: "DevOps & Tools", sort_order: 17 },
  { id: "19", name: "Docker & Containerization", category: "DevOps & Tools", sort_order: 18 },
  { id: "20", name: "Vercel / Cloud Deployment", category: "DevOps & Tools", sort_order: 19 },
  { id: "21", name: "Postman & Swagger API Docs", category: "DevOps & Tools", sort_order: 20 },
];

export default function Skills({ skills }: SkillsProps) {
  const items = skills && skills.length > 0 ? skills : DEFAULT_SKILLS;

  // Group by category
  const grouped = items.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#dc143c] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Expertise
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(grouped).map(([category, catSkills]) => (
            <div
              key={category}
              className="bg-[#141416] border border-[#242428] rounded-2xl p-6 card-glow transition-all duration-300"
            >
              <h3 className="text-[#dc143c] text-xs font-semibold tracking-widest uppercase mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-xs font-medium text-zinc-300 border border-[#2a2a2a] bg-[#1a1a1e] hover:border-[#dc143c] hover:text-white px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
