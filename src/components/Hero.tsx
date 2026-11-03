import { SiteProfile } from "@/types";

interface HeroProps {
  profile: SiteProfile;
}

const skills = ["React / Next.js", "Flutter / Dart", "C# / .NET", "SQL / PostgreSQL", "Git / GitHub", "Desktop Apps"];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 border border-[#2a2a2a] bg-[#141416]/80 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#dc143c] animate-ping inline-block" />
              <span className="text-xs text-zinc-300 font-medium tracking-wider uppercase">
                Available for work
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 font-playfair text-5xl md:text-7xl font-black leading-[1.05] mb-5">
              <span className="text-white drop-shadow-sm">{profile.full_name}</span>
              <br />
              <span className="gradient-text">{profile.headline}</span>
            </h1>

            {/* Tagline inspired by graphic */}
            <div className="animate-fade-up delay-200 border-l-2 border-[#dc143c] pl-4 my-6">
              <p className="text-lg md:text-xl text-zinc-200 font-medium leading-relaxed">
                Building modern Web, Mobile & Windows Applications with clean code and scalable architecture.
              </p>
            </div>

            {/* Pillars chips from poster */}
            <div className="animate-fade-up delay-300 grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
              {[
                { title: "Frontend", desc: "React & Next.js" },
                { title: "Backend", desc: "C# .NET & Node" },
                { title: "Database", desc: "SQL & Cloud" },
                { title: "Desktop & Apps", desc: "Flutter & Windows" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#141416]/80 border border-[#242428] rounded-xl p-3 text-center card-glow"
                >
                  <div className="text-white font-semibold text-xs tracking-wide">{item.title}</div>
                  <div className="text-zinc-500 text-[11px] mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Skill tags */}
            <div className="animate-fade-up delay-300 flex flex-wrap gap-2 mb-8">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium border border-[#2a2a2a] bg-[#141416]/60 backdrop-blur-sm text-zinc-300 hover:text-white hover:border-[#dc143c] transition-all duration-300 px-3 py-1.5 rounded-full"
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

          {/* Right Column: Featured Banner Poster */}
          <div className="lg:col-span-5 animate-fade-up delay-200">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#242428] to-[#141416] border border-[#2a2a2e] shadow-2xl card-glow overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-banner.png"
                  alt="Full Stack Developer Graphic"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-xs uppercase tracking-widest text-[#dc143c] font-bold">Speciality</div>
                  <div className="text-white text-sm font-semibold mt-0.5">Full Stack Web & Windows Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row with smooth cards */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#242428] pt-10">
          {[
            { value: "3+", label: "Years experience" },
            { value: "20+", label: "Projects shipped" },
            { value: "6+", label: "Core technologies" },
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
