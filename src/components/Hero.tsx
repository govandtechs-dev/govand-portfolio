import { SiteProfile } from "@/types";

interface HeroProps {
  profile: SiteProfile;
}

const skills = ["React / Next.js", "Flutter / Dart", "C# / .NET", "SQL / PostgreSQL", "Git / GitHub"];

export default function Hero({ profile }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#dc143c] opacity-[0.07] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#2a2a2a] rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#dc143c] animate-pulse" />
            <span className="text-xs text-zinc-400 font-medium tracking-wider uppercase">
              Available for work
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-5xl md:text-7xl font-black leading-[1.05] mb-6">
            <span className="text-white">{profile.full_name}</span>
            <br />
            <span className="gradient-text">{profile.headline}</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl">
            {profile.bio ||
              "Building thoughtful, high-performance digital products with modern web and mobile technologies."}
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs font-medium border border-[#2a2a2a] text-zinc-400 px-3 py-1.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-[#dc143c] hover:bg-[#a50e2d] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              View Projects
            </a>
            <a
              href="/cv"
              className="border border-[#2a2a2a] hover:border-[#dc143c] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#2a2a2a] pt-10">
          {[
            { value: "3+", label: "Years experience" },
            { value: "20+", label: "Projects shipped" },
            { value: "5", label: "Core technologies" },
            { value: "100%", label: "Client satisfaction" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-white font-playfair">
                {s.value}
              </div>
              <div className="text-sm text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
