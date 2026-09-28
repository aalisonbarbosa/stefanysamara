"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL =
  "https://wa.me/558387022712?text=Ol%C3%A1,%20gostaria%20de%20reservar%20um%20hor%C3%A1rio";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/95 backdrop-blur-xl border-b border-surface-container-high shadow-[0_1px_8px_rgba(0,0,0,0.03)]"
          : "bg-surface/80 backdrop-blur-sm"
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-margin lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-display text-headline-sm tracking-tight text-on-surface uppercase font-semibold">
            Stefany Samara
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-space-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-label-lg text-on-surface hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-primary text-surface font-body text-label-lg px-space-lg py-2.5 hover:bg-neutral-800 transition-all shadow-sm font-semibold tracking-wide rounded-full"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Agendar</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/40 text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <IoCloseOutline className="w-5 h-5" />
            ) : (
              <IoMenuOutline className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-surface-container-high shadow-lg">
          <nav className="flex flex-col px-margin py-space-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-title-md text-on-surface hover:text-secondary transition-colors py-space-sm border-b border-surface-container last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-space-md inline-flex items-center justify-center gap-2 bg-primary text-surface font-body text-label-lg px-space-lg py-3 rounded-full font-semibold"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Agendar atendimento</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
