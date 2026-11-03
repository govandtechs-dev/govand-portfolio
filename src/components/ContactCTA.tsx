export default function ContactCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background radial crimson glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e6194b] opacity-15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-10 md:p-16 border border-white/10 text-center relative z-10 card-glow">
        <span className="text-[#e6194b] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#e6194b]/10 border border-[#e6194b]/20 inline-block mb-6">
          Ready to Collaborate?
        </span>

        <h2 className="font-playfair text-3xl md:text-5xl font-black text-white mb-6 max-w-2xl mx-auto leading-tight">
          Have an idea or need an engineered solution? <br />
          <span className="gradient-text">Let’s build something extraordinary.</span>
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you need a full-stack Next.js web application, a cross-platform Flutter mobile app, or high-performance .NET APIs, I’m available for freelance projects and high-impact software roles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:govand.techs@gmail.com"
            className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>

          <a
            href="https://wa.me/9647718785818"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-white font-semibold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 hover:border-[#25D366] hover:text-[#25D366]"
          >
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.96.523 1.838.78 2.791.78 3.182 0 5.768-2.587 5.768-5.766.001-3.181-2.585-5.766-5.767-5.766zm9.969 5.766c0 5.485-4.484 9.969-9.969 9.969-1.745 0-3.376-.453-4.808-1.246l-5.223 1.369 1.393-5.093c-.886-1.488-1.393-3.218-1.393-5.002 0-5.485 4.484-9.969 9.969-9.969 5.485 0 9.969 4.484 9.969 9.972z" />
            </svg>
            Chat on WhatsApp
          </a>

          <a
            href="/cv"
            className="btn-secondary text-zinc-300 hover:text-white font-semibold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2"
          >
            Download Curriculum Vitae
          </a>
        </div>
      </div>
    </section>
  );
}
