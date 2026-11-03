import { SiteProfile } from "@/types";

interface AboutProps {
  profile: SiteProfile;
}

export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 bg-[#0c0c0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Bio & Highlights */}
        <div>
          <span className="text-[#e6194b] text-xs font-bold tracking-widest uppercase mb-3 block px-3 py-1 rounded-full bg-[#e6194b]/10 border border-[#e6194b]/20 w-max">
            About Me
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-6">
            Architecting Digital Experiences from the Ground Up
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-4 text-sm md:text-base">
            {profile.bio ||
              "I'm Govand Esmail Othman, a passionate Full-Stack Software Developer who crafts high-performance digital solutions. I specialize in building end-to-end applications — from clean, responsive frontends to scalable cloud architectures."}
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
            Studying Information Technology at Sulaimani Polytechnic University, I combine strong academic computer science fundamentals with modern hands-on industry engineering across Next.js, Flutter, and .NET.
          </p>

          <div className="flex flex-col gap-3.5 border-t border-white/10 pt-6">
            {profile.email && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-zinc-500 w-20">Email:</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-white hover:text-[#e6194b] transition-colors font-medium"
                >
                  {profile.email}
                </a>
              </div>
            )}
            {profile.phone && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-zinc-500 w-20">Phone:</span>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-[#e6194b] transition-colors font-medium"
                >
                  {profile.phone}
                </a>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-zinc-500 w-20">Location:</span>
                <span className="text-white font-medium">{profile.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Modern Interactive Developer Badge & Avatar */}
        <div className="relative">
          <div className="glass-panel rounded-3xl p-8 card-glow border border-white/10">
            {/* Elegant Geometric Avatar with Studio Headshot */}
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-8 p-1.5 bg-gradient-to-tr from-[#e6194b] via-purple-500 to-amber-400 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#101014]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/govand.png"
                  alt={profile.full_name}
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold text-white mb-1">
                {profile.full_name}
              </h3>
              <p className="text-[#e6194b] text-sm font-semibold tracking-wide mb-6">
                {profile.headline}
              </p>
            </div>

            <div className="h-px bg-white/10 mb-6" />

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-[#121216]/60 rounded-xl p-3 border border-white/5">
                <div className="text-zinc-500 mb-1">Degree Program</div>
                <div className="text-zinc-200 font-semibold">BSc IT (2023 - 2027)</div>
              </div>
              <div className="bg-[#121216]/60 rounded-xl p-3 border border-white/5">
                <div className="text-zinc-500 mb-1">Institution</div>
                <div className="text-zinc-200 font-semibold">Sulaimani Polytechnic</div>
              </div>
              <div className="bg-[#121216]/60 rounded-xl p-3 border border-white/5">
                <div className="text-zinc-500 mb-1">Core Domain</div>
                <div className="text-zinc-200 font-semibold">Full-Stack & Mobile</div>
              </div>
              <div className="bg-[#121216]/60 rounded-xl p-3 border border-white/5">
                <div className="text-zinc-500 mb-1">Status</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span className="text-emerald-400 font-semibold">Available for Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
