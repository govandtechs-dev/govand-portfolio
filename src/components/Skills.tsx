import { Skill } from "@/types";

interface SkillsProps {
  skills: Skill[];
}

const PLACEHOLDER: Skill[] = [
  { id: "1", name: "React / Next.js", category: "Frontend", sort_order: 0 },
  { id: "2", name: "TypeScript", category: "Frontend", sort_order: 1 },
  { id: "3", name: "Tailwind CSS", category: "Frontend", sort_order: 2 },
  { id: "4", name: "Flutter / Dart", category: "Mobile", sort_order: 3 },
  { id: "5", name: "C# / .NET", category: "Backend", sort_order: 4 },
  { id: "6", name: "Node.js", category: "Backend", sort_order: 5 },
  { id: "7", name: "SQL / PostgreSQL", category: "Database", sort_order: 6 },
  { id: "8", name: "Git / GitHub", category: "DevOps", sort_order: 7 },
  { id: "9", name: "Docker", category: "DevOps", sort_order: 8 },
  { id: "10", name: "REST APIs", category: "Backend", sort_order: 9 },
];

export default function Skills({ skills }: SkillsProps) {
  const items = skills.length > 0 ? skills : PLACEHOLDER;

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(grouped).map(([category, catSkills]) => (
            <div
              key={category}
              className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6"
            >
              <h3 className="text-[#dc143c] text-xs font-semibold tracking-widest uppercase mb-5">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-sm font-medium text-zinc-300 border border-[#2a2a2a] hover:border-[#dc143c] hover:text-white px-4 py-2 rounded-full transition-colors cursor-default"
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
