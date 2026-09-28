"use client";

import { FaWhatsapp } from "react-icons/fa";

interface LocationProps {
  onBooking: () => void;
}

export default function Location({ onBooking }: LocationProps) {
  return (
    <section id="contato" className="w-full py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="font-body text-label-md uppercase tracking-widest text-secondary mb-space-xs font-semibold">
            ONDE ME ENCONTRAR
          </span>
          <h2 className="font-display text-headline-lg text-on-surface mb-space-md text-center">
            Seu momento de cuidado começa aqui.
          </h2>
          <p className="font-display text-headline-sm font-semibold text-on-surface mb-space-xs text-center">
            Ibiranga — Itambé/PE
          </p>
          <p className="font-body text-body-md text-on-surface-variant mb-space-lg leading-relaxed text-center max-w-xl">
            Atendimento com hora marcada, em um ambiente reservado e preparado
            para receber você.
          </p>
          <div className="flex justify-center mt-space-sm">
            <button
              onClick={onBooking}
              className="inline-flex items-center justify-center gap-space-sm bg-primary text-surface font-body text-label-lg px-space-xl py-space-md rounded-full shadow-md hover:bg-neutral-800 transition-all text-center font-semibold tracking-wide cursor-pointer"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Agendar atendimento</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
