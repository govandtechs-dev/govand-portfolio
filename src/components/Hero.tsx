import { SiteProfile } from "@/types";

interface HeroProps {
  profile: SiteProfile;
}

const skills = ["React / Next.js", "Flutter / Dart", "C# / .NET", "SQL / PostgreSQL", "Git / GitHub", "Windows Desktop"];

export default function Hero({ profile }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
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

        {/* Floating Glowing Orbs */}
        <div className="animate-float-1 absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#e6194b] opacity-20 blur-[130px]" />
        <div className="animate-float-2 absolute top-1/3 -right-28 w-[600px] h-[600px] rounded-full bg-[#800f2f] opacity-25 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,8,10,0.85)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 border border-white/10 bg-[#121216]/80 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#e6194b] animate-ping inline-block" />
              <span className="text-xs text-zinc-300 font-medium tracking-wider uppercase">
                Available for Projects & Roles
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-5xl md:text-7xl font-black leading-[1.05] mb-5">
              <span className="text-white drop-shadow-sm">{profile.full_name}</span>
              <br />
              <span className="gradient-text">{profile.headline}</span>
            </h1>

            {/* Tagline */}
            <div className="border-l-2 border-[#e6194b] pl-4 my-6">
              <p className="text-lg md:text-xl text-zinc-200 font-medium leading-relaxed">
                Building modern Web, Mobile & Windows Applications with clean code and scalable architecture.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
              {[
                { title: "Frontend", desc: "React & Next.js 15", icon: "🌐" },
                { title: "Backend", desc: "C# .NET & Node", icon: "⚙️" },
                { title: "Databases", desc: "SQL & PostgreSQL", icon: "🗄️" },
                { title: "Mobile & Apps", desc: "Flutter & Windows", icon: "📱" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#121216]/90 border border-[#1e1e24] rounded-xl p-3.5 text-center card-glow"
                >
                  <div className="text-lg mb-1">{item.icon}</div>
                  <div className="text-white font-semibold text-xs tracking-wide">{item.title}</div>
                  <div className="text-zinc-500 text-[11px] mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium border border-white/10 bg-[#121216]/70 backdrop-blur-sm text-zinc-300 hover:text-white hover:border-[#e6194b] transition-all duration-300 px-3.5 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#projects"
                className="btn-primary text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all"
              >
                View Projects
              </a>
              <a
                href="/cv"
                className="btn-secondary text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Code Studio Workspace Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#141418] to-[#0c0c0e] border border-white/10 shadow-2xl card-glow overflow-hidden group">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-zinc-500 ml-2">govand-engineer.tsx</span>
                </div>
                <div className="text-[11px] font-mono text-[#e6194b] bg-[#e6194b]/10 border border-[#e6194b]/20 px-2.5 py-0.5 rounded-full font-bold">
                  LIVE
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="font-mono text-xs leading-relaxed space-y-2.5 py-2">
                <div className="text-zinc-500">// Lead Full-Stack & Mobile Developer</div>
                <div>
                  <span className="text-[#ff4d6d]">const</span> <span className="text-white">engineer</span> = &#123;
                </div>
                <div className="pl-4 text-zinc-300">
                  name: <span className="text-emerald-400">&apos;Govand Esmail Othman&apos;</span>,
                </div>
                <div className="pl-4 text-zinc-300">
                  degree: <span className="text-emerald-400">&apos;BSc Information Technology&apos;</span>,
                </div>
                <div className="pl-4 text-zinc-300">
                  university: <span className="text-emerald-400">&apos;Sulaimani Polytechnic&apos;</span>,
                </div>
                <div className="pl-4 text-zinc-300">
                  specialization: [
                  <span className="text-amber-300">&apos;Next.js&apos;</span>,{" "}
                  <span className="text-amber-300">&apos;Flutter&apos;</span>,{" "}
                  <span className="text-amber-300">&apos;.NET Core&apos;</span>
                  ],
                </div>
                <div className="pl-4 text-zinc-300">
                  architecture: <span className="text-purple-400">&apos;Clean Code & Microservices&apos;</span>,
                </div>
                <div className="pl-4 text-zinc-300">
                  passion: <span className="text-emerald-400">&apos;High-Performance Scalable Software&apos;</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Live Metric Banner inside card */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                <div className="bg-black/40 border border-white/5 rounded-xl p-3 text-center">
                  <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Focus Area</div>
                  <div className="text-[#e6194b] font-bold text-xs mt-1">Full-Stack & Mobile</div>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-xl p-3 text-center">
                  <div className="text-zinc-400 text-[11px] uppercase tracking-wider">Availability</div>
                  <div className="text-emerald-400 font-bold text-xs mt-1">Open to Roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "20+", label: "Projects Shipped" },
            { value: "6+", label: "Core Technologies" },
            { value: "100%", label: "Code Quality & Precision" },
          ].map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-[#121216]/50 transition-all duration-300"
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
