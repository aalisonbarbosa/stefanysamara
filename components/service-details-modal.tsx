"use client";

import Image from "next/image";
import { FiCheck, FiClock, FiHeart, FiShield, FiX } from "react-icons/fi";

import type { Service } from "@/lib/services";
import { formatDuration, formatPrice } from "@/lib/services";

interface ServiceDetailsModalProps {
  service: Service | null;
  onClose: () => void;
  onBooking: (service: Service) => void;
}

export default function ServiceDetailsModal({
  service,
  onClose,
  onBooking,
}: ServiceDetailsModalProps) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-details-title"
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl"
      >
        {/* Fechar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-on-surface shadow-md backdrop-blur transition hover:bg-white"
        >
          <FiX className="h-5 w-5" />
        </button>

        {/* Imagem */}
        <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden">
          <Image
            src={service.src}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="overflow-y-auto">
          <div className="p-6 sm:p-7">
            {/* Título / preço */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="service-details-title"
                  className="font-display text-[28px] leading-tight text-on-surface sm:text-[32px]"
                >
                  {service.title}
                </h2>

                <div className="mt-2 flex items-center gap-1.5 text-sm text-secondary">
                  <FiClock className="h-4 w-4" />
                  <span>
                    Duração estimada: {formatDuration(service.duration)}
                  </span>
                </div>
              </div>

              <span className="shrink-0 pt-1 font-body text-lg font-bold text-secondary">
                {formatPrice(service.price)}
              </span>
            </div>

            {/* Descrição */}
            <p className="mt-5 font-body text-sm leading-6 text-on-surface-variant">
              {service.description}
            </p>

            {/* Benefícios */}
            <div className="mt-7">
              <div className="mb-3 flex items-center gap-2">
                <FiHeart className="h-4 w-4 text-tertiary" />
                <h3 className="font-body text-xs font-bold uppercase tracking-wide text-on-surface">
                  Benefícios & diferenciais
                </h3>
              </div>

              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 font-body text-xs text-on-surface-variant"
                  >
                    <FiCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cuidados */}
            <div className="mt-6 rounded-xl border border-outline-variant/40 bg-surface-container-high px-4 py-4">
              <div className="mb-2 flex items-center gap-2">
                <FiShield className="h-4 w-4 text-secondary" />

                <h3 className="font-body text-xs font-bold uppercase tracking-wide text-on-surface">
                  Cuidados recomendados
                </h3>
              </div>

              <ul className="space-y-1.5">
                {service.care.map((item) => (
                  <li
                    key={item}
                    className="font-body text-xs leading-5 text-on-surface-variant"
                  >
                    · {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={() => onBooking(service)}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-body text-sm font-bold text-white shadow-md transition hover:bg-neutral-800 active:scale-[0.99] cursor-pointer"
            >
              <FiHeart className="h-4 w-4 text-tertiary" />
              Agendar este procedimento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
