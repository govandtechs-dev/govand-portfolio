"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Overview" },
  { href: "#projects", label: "Featured Work" },
  { href: "#experience", label: "Career" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#about", label: "About" },
  { href: "/cv", label: "Live CV" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4">
      <div
        className={`max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "glass-nav shadow-2xl border border-white/10" : "bg-transparent"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#e6194b] to-[#ff4d6d] flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            G
          </span>
          <span className="font-playfair text-lg font-bold text-white tracking-wide">
            Govand<span className="text-[#e6194b]">.</span>dev
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs uppercase font-medium tracking-wider text-zinc-400 hover:text-white transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e6194b] after:transition-all"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:govand.techs@gmail.com"
            className="btn-primary text-white text-xs font-semibold px-5 py-2.5 rounded-full"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto glass-panel rounded-2xl p-6 flex flex-col gap-4 border border-white/10 shadow-2xl">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-zinc-300 hover:text-white text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:govand.techs@gmail.com"
            className="btn-primary text-white text-xs font-semibold px-5 py-3 rounded-xl text-center mt-2"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
