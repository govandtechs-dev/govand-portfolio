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
      {/* Dynamic Animated Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft grid background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Floating Glowing Orb 1 */}
        <div className="animate-blob-1 absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#dc143c] opacity-20 blur-[130px]" />

        {/* Floating Glowing Orb 2 */}
        <div className="animate-blob-2 absolute top-1/3 -right-28 w-[600px] h-[600px] rounded-full bg-[#800f2f] opacity-25 blur-[140px]" />

        {/* Ambient Center Pulse */}
        <div className="animate-blob-pulse absolute bottom-10 left-1/3 w-[450px] h-[450px] rounded-full bg-[#ff4d6d] opacity-10 blur-[150px]" />

        {/* Subtle radial vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,12,0.8)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 border border-[#2a2a2a] bg-[#141416]/80 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#dc143c] animate-ping inline-block" />
            <span className="text-xs text-zinc-300 font-medium tracking-wider uppercase">
              Available for work
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 font-playfair text-5xl md:text-7xl font-black leading-[1.05] mb-6">
            <span className="text-white drop-shadow-sm">{profile.full_name}</span>
            <br />
            <span className="gradient-text">{profile.headline}</span>
          </h1>

          {/* Sub */}
          <p className="animate-fade-up delay-200 text-lg text-zinc-300 leading-relaxed mb-10 max-w-xl">
            {profile.bio ||
              "Building thoughtful, high-performance digital products with modern web and mobile technologies."}
          </p>

          {/* Skill tags */}
          <div className="animate-fade-up delay-300 flex flex-wrap gap-2.5 mb-10">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs font-medium border border-[#2a2a2a] bg-[#141416]/60 backdrop-blur-sm text-zinc-300 hover:text-white hover:border-[#dc143c] transition-all duration-300 px-3.5 py-1.5 rounded-full hover:scale-105"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-400 flex items-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-[#dc143c] hover:bg-[#a50e2d] hover:shadow-[0_0_25px_rgba(220,20,60,0.5)] hover:-translate-y-0.5 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/cv"
              className="border border-[#2a2a2a] bg-[#141416]/50 hover:bg-[#141416] hover:border-[#dc143c] hover:-translate-y-0.5 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Stats row with smooth cards */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#242428] pt-10">
          {[
            { value: "3+", label: "Years experience" },
            { value: "20+", label: "Projects shipped" },
            { value: "5", label: "Core technologies" },
            { value: "100%", label: "Client satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-xl border border-transparent hover:border-[#2a2a2a] hover:bg-[#141416]/40 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-white font-playfair">
                {s.value}
              </div>
              <div className="text-sm text-zinc-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
