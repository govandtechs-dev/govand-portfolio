export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Radial Glow Orbs */}
      <div className="absolute top-[15%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#e6194b] opacity-[0.06] blur-[150px]" />
      <div className="absolute top-[50%] right-[3%] w-[500px] h-[500px] rounded-full bg-[#ff4d6d] opacity-[0.05] blur-[160px]" />
      <div className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-[#800f2f] opacity-[0.06] blur-[170px]" />

      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-28 left-12 text-white/20 font-mono text-[10px] hidden md:block">
        + <span className="text-white/10 ml-1">SYS.01 // GOVAND</span>
      </div>
      <div className="absolute top-1/3 right-12 text-white/20 font-mono text-[10px] hidden md:block">
        + <span className="text-white/10 ml-1">COORDINATE 35.56°N 45.43°E</span>
      </div>
      <div className="absolute top-2/3 left-10 text-white/20 font-mono text-[10px] hidden md:block">
        + <span className="text-white/10 ml-1">BUILD STABLE // v2.4</span>
      </div>

      {/* Fine Vertical Accent Accent Lines */}
      <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent hidden lg:block" />
      <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent hidden lg:block" />
    </div>
  );
}
