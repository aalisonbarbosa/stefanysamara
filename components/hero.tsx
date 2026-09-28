"use client";

import { FaWhatsapp } from "react-icons/fa";

interface HeroProps {
  onBooking: () => void;
}

export default function Hero({ onBooking }: HeroProps) {
  return (
    <section
      id="inicio"
      className="w-full bg-gradient-to-b from-[#FAF8F5] via-[#F8F5F0] to-surface-container-low pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden border-b border-surface-container-high"
    >
      {/* Linhas arquiteturais finas */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full px-margin lg:px-margin-desktop flex justify-between">
          <div className="w-px h-full bg-outline-variant/30" />
          <div className="w-px h-full bg-outline-variant/20 hidden md:block" />
          <div className="w-px h-full bg-outline-variant/30" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-margin lg:px-margin-desktop relative z-10 text-center flex flex-col items-center">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-display text-on-surface uppercase tracking-tight leading-[1.05] mb-space-sm">
          <span className="block">Stefany</span>
          <span className="block">Samara</span>
        </h1>
        <p className="font-body text-[12px] sm:text-[13px] tracking-[0.25em] text-secondary uppercase font-bold mb-space-md">
          Designer de Sobrancelhas
        </p>
        <p className="font-display text-title-lg sm:text-headline-sm italic text-on-surface-variant font-medium tracking-wide mb-space-xl">
          “Elegância em cada traço”
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto justify-center">
          <button
            onClick={onBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm bg-primary text-surface font-body text-label-lg px-space-xl py-space-md rounded-full shadow-md hover:bg-neutral-800 transition-all text-center font-semibold tracking-wide cursor-pointer"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Agendar atendimento</span>
          </button>
          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-surface/90 border border-secondary/30 text-on-surface font-body text-label-lg px-space-lg py-space-md rounded-full hover:bg-surface-container transition-all text-center shadow-xs font-semibold"
          >
            <span>Conhecer procedimentos</span>
            <svg
              className="w-[18px] h-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
