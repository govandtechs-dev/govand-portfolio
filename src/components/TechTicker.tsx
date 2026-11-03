export default function TechTicker() {
  const technologies = [
    "Next.js 15",
    "Flutter & Dart",
    "ASP.NET Core",
    "PostgreSQL",
    "TypeScript",
    "Tailwind CSS",
    "Docker & Cloud",
    "Supabase & Firebase",
    "C# & .NET 8",
    "Microservices Architecture",
    "RESTful & WebSockets",
    "Cross-Platform Mobile",
  ];

  return (
    <div className="py-10 border-y border-white/5 bg-[#0a0a0d] overflow-hidden select-none">
      <div className="flex gap-10 whitespace-nowrap animate-marquee">
        {[...technologies, ...technologies, ...technologies].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 text-zinc-400 font-mono text-xs tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e6194b]" />
            <span className="hover:text-white transition-colors">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
