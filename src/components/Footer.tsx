export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-playfair text-lg font-bold">
          <span className="text-white">Govand</span>
          <span className="text-[#dc143c]">.</span>
        </div>
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Govand Esmail Othman. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/govandtechs-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/govand-esmail-othman-bb39ba410?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="/cv"
            className="text-zinc-500 hover:text-white transition-colors text-sm"
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
