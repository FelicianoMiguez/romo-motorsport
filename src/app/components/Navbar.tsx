"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicaciones", href: "#ubicaciones" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-[146px] lg:h-[168px]">
        {/* Logo */}
        <a href="#" className="relative z-50 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Romo Motorsport"
            width={400}
            height={112}
            className="h-16 sm:h-[134px] lg:h-[156px] w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#B0B0B0] hover:text-white font-body text-sm uppercase tracking-[0.08em] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/5491135755147?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20hacer%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white font-body font-semibold uppercase tracking-[0.1em] text-xs px-5 py-2.5 rounded transition-all duration-200"
        >
          Consultá ahora
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-heading text-2xl uppercase tracking-[0.1em] text-white hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5491135755147?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20hacer%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-primary hover:bg-red-700 text-white font-body font-semibold uppercase tracking-[0.1em] text-sm px-8 py-3 rounded transition-colors"
        >
          Consultá ahora
        </a>
      </div>
    </nav>
  );
}
