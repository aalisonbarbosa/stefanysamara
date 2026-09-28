"use client";

import Image from "next/image";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const INSTAGRAM_URL = "https://instagram.com/stefanysamara.unique";

const RESULTS = [
  {
    alt: "Resultado de design de sobrancelhas",
    before: "/designer-personalizado-antes.jpeg",
    after: "/designer-personalizado.jpeg",
  },
  {
    alt: "Resultado de design de sobrancelhas",
    before: "/sobrancelha-antes.jpg",
    after: "/sobrancelha-depois.jpg",
  },
  {
    alt: "Resultado de design de sobrancelhas",
    before: "/henna-antes.jpeg",
    after: "/henna.jpeg",
  },
];

export default function Results() {
  return (
    <section id="resultados" className="w-full py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-body text-label-md uppercase tracking-widest text-secondary mb-space-xs font-semibold">
            TRANSFORMAÇÕES REAIS
          </span>
          <h2 className="font-display text-headline-lg text-on-surface mb-space-sm">
            Resultados que valorizam você.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            Cada sobrancelha é única. Veja alguns resultados de trabalhos
            realizados pela Stefany.
          </p>
          <p className="font-body text-label-sm uppercase tracking-wider text-on-surface-variant mt-space-sm flex items-center justify-center">
            <span>Toque em Antes ou Depois para comparar cada resultado</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
          {RESULTS.map((r, i) => (
            <ResultCard key={i} {...r} />
          ))}
        </div>

        {/* Callout Instagram */}
        <div className="bg-surface rounded-xl border border-outline-variant/30 p-space-lg max-w-3xl mx-auto shadow-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md text-left">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shadow-xs shrink-0 border border-outline-variant/30">
              <FaInstagram className="w-5 h-5 text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="font-body text-title-md text-on-surface font-semibold">
                Mais resultados no Instagram.
              </span>
              <span className="font-body text-body-sm text-on-surface-variant">
                Veja outros trabalhos e acompanhe o dia a dia da Stefany.
              </span>
            </div>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-xs bg-primary text-surface font-body text-label-md px-space-lg py-2.5 hover:bg-neutral-800 transition-all shrink-0 font-semibold shadow-sm rounded-full"
          >
            <FaInstagram className="w-4 h-4" />
            <span>Ver Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}

interface ResultCardProps {
  alt: string;
  before: string;
  after: string;
}

function ResultCard({ alt, before, after }: ResultCardProps) {
  const [state, setState] = useState("after");

  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-md border border-outline-variant/30 flex flex-col group hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[4/3] w-full overflow-hidden bg-surface-container relative">
        <Image
          src={state === "before" ? before : after}
          alt={alt}
          fill
          className="w-full h-full"
        />
      </div>
      <div className="grid grid-cols-2 w-full border-t border-outline-variant/30 bg-surface-container">
        <button
          type="button"
          onClick={() => setState("before")}
          className={`px-4 py-4 font-body text-label-sm uppercase tracking-widest transition-all font-semibold ${
            state === "before"
              ? "bg-surface text-on-surface shadow-xs font-bold border border-outline-variant/30"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Antes
        </button>
        <button
          type="button"
          onClick={() => setState("after")}
          className={`px-4 py-4 font-body text-label-sm uppercase tracking-widest transition-all font-semibold border-l border-outline-variant/30 ${
            state === "after"
              ? "bg-surface text-on-surface shadow-xs font-bold border border-outline-variant/30"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Depois
        </button>
      </div>
    </div>
  );
}
