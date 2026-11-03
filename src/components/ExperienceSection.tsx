import { Experience } from "@/types";

interface ExperienceProps {
  experience: Experience[];
}

const DEFAULT_EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Full-Stack Software Engineer",
    company: "Freelance & Independent Consultant",
    description:
      "Architecting and delivering enterprise web applications and cross-platform mobile apps for international and local clients. Specializing in Next.js/React frontends, scalable .NET Core & Node.js microservices, and Flutter mobile applications.",
    start_date: "2023",
    end_date: "Present",
    sort_order: 0,
  },
  {
    id: "2",
    role: "Mobile & Backend Developer",
    company: "Software Solutions Group",
    description:
      "Engineered cross-platform mobile products using Flutter with state management (Bloc). Developed secure RESTful APIs with ASP.NET Core and PostgreSQL, integrating real-time WebSocket communication and secure payment gateways.",
    start_date: "2022",
    end_date: "2023",
    sort_order: 1,
  },
  {
    id: "3",
    role: "Junior Web Developer",
    company: "Digital Systems Studio",
    description:
      "Collaborated on designing responsive web portals using React, TypeScript, and Tailwind CSS. Implemented relational database queries and stored procedures in Microsoft SQL Server, optimizing performance by 35%.",
    start_date: "2021",
    end_date: "2022",
    sort_order: 2,
  },
];

export default function ExperienceSection({ experience }: ExperienceProps) {
  const items = experience && experience.length > 0 ? experience : DEFAULT_EXPERIENCE;

  return (
    <section id="experience" className="py-24 px-6 bg-[#0c0c0e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#dc143c] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Journey
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Experience & Career
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical central accent line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#dc143c] via-[#2a2a2a] to-transparent -translate-x-1/2 hidden md:block" />

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
                {/* Neon Dot */}
                <div
                  className={`hidden md:block absolute top-6 w-3.5 h-3.5 rounded-full bg-[#dc143c] shadow-[0_0_12px_#dc143c] border-2 border-[#0e0e0e] ${
                    i % 2 === 0 ? "-right-[7px]" : "-left-[7px]"
                  }`}
                />

                {/* Card */}
                <div className="bg-[#141416] border border-[#242428] rounded-2xl p-7 card-glow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-[#dc143c] text-sm font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-zinc-400 font-medium whitespace-nowrap border border-[#2a2a2a] bg-[#1a1a1e] px-3.5 py-1.5 rounded-full shrink-0">
                      {exp.start_date} — {exp.end_date}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed mt-3">
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
