import { SiteProfile } from "@/types";

interface AboutProps {
  profile: SiteProfile;
}

export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <span className="text-[#dc143c] text-sm font-semibold tracking-widest uppercase mb-3 block">
            About
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Who I Am
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            {profile.bio ||
              "I'm Govand Esmail Othman, a passionate Full-Stack Software Developer who loves crafting elegant solutions to complex problems. I specialise in building end-to-end digital experiences — from polished UIs to robust backend services."}
          </p>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Whether it's a React web app, a Flutter mobile application, or a
            scalable .NET API, I bring the same attention to detail and drive
            for quality to every project.
          </p>

          <div className="flex flex-col gap-3">
            {profile.email && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-zinc-600">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-white hover:text-[#dc143c] transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            )}
            {profile.phone && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-zinc-600">Phone</span>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-[#dc143c] transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-zinc-600">Location</span>
                <span className="text-white">{profile.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: decorative card */}
        <div className="relative">
          <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8">
            <div className="font-playfair text-8xl font-black text-[#dc143c]/10 select-none leading-none mb-6">
              GEO
            </div>
            <div className="text-2xl font-playfair font-bold text-white mb-1">
              {profile.full_name}
            </div>
            <div className="text-[#dc143c] text-sm font-semibold mb-6">
              {profile.headline}
            </div>
            <div className="h-px bg-[#2a2a2a] mb-6" />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-zinc-600 mb-1">Education</div>
                <div className="text-zinc-300">BSc in IT (2023 - 2027)</div>
              </div>
              <div>
                <div className="text-zinc-600 mb-1">University</div>
                <div className="text-zinc-300">Sulaimani Polytechnic</div>
              </div>
              <div>
                <div className="text-zinc-600 mb-1">Speciality</div>
                <div className="text-zinc-300">Full-Stack & Mobile</div>
              </div>
              <div>
                <div className="text-zinc-600 mb-1">Status</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                  <span className="text-zinc-300">Available</span>
                </div>
              </div>
            </div>
          </div>
          {/* Accent corner */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#dc143c] rounded-br-2xl" />
        </div>
      </div>
    </section>
  );
}
