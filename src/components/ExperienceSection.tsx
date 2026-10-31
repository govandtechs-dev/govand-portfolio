import { Experience } from "@/types";

interface ExperienceProps {
  experience: Experience[];
}

const PLACEHOLDER: Experience[] = [
  {
    id: "1",
    role: "Full-Stack Developer",
    company: "Tech Company",
    description:
      "Led development of multiple web and mobile applications. Built REST APIs with .NET, cross-platform apps with Flutter, and modern frontends with React/Next.js.",
    start_date: "Jan 2023",
    end_date: "Present",
    sort_order: 0,
  },
  {
    id: "2",
    role: "Junior Software Developer",
    company: "Startup",
    description:
      "Developed and maintained internal tools using C# and SQL Server. Collaborated in agile sprints and contributed to CI/CD pipeline improvements.",
    start_date: "Jun 2021",
    end_date: "Dec 2022",
    sort_order: 1,
  },
];

export default function ExperienceSection({ experience }: ExperienceProps) {
  const items = experience.length > 0 ? experience : PLACEHOLDER;

  return (
    <section id="experience" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#dc143c] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Journey
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#2a2a2a] -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {items.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative md:w-1/2 ${
                  i % 2 === 0
                    ? "md:pr-16 md:self-start"
                    : "md:pl-16 md:self-end md:ml-auto"
                }`}
              >
                {/* Dot */}
                <div
                  className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-[#dc143c] border-2 border-[#0e0e0e] ${
                    i % 2 === 0 ? "-right-[6.5px]" : "-left-[6.5px]"
                  }`}
                />

                {/* Card */}
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6 card-glow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-[#dc143c] text-sm font-semibold mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-zinc-500 whitespace-nowrap border border-[#2a2a2a] px-3 py-1.5 rounded-full shrink-0">
                      {exp.start_date} — {exp.end_date}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
