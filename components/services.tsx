"use client";

import Image from "next/image";
import { FiCalendar, FiChevronRight, FiClock } from "react-icons/fi";

import {
  SERVICES,
  formatDuration,
  formatPrice,
  type Service,
} from "@/lib/services";

import ServiceDetailsModal from "./service-details-modal";
import { useState } from "react";

interface ServicesProps {
  onBooking: (service?: Service) => void;
}

export default function Services({ onBooking }: ServicesProps) {
  const [detailsService, setDetailsService] = useState<Service | null>(null);

  function openDetails(service: Service) {
    setDetailsService(service);
  }

  function openBooking(service: Service) {
    setDetailsService(null);
    onBooking(service);
  }

  return (
    <>
      <section
        id="servicos"
        className="w-full bg-surface-container-low py-space-2xl"
      >
        <div className="mx-auto max-w-7xl px-margin lg:px-margin-desktop">
          {/* Cabeçalho */}
          <div className="mx-auto mb-space-xl flex max-w-2xl flex-col items-center text-center">
            <span className="mb-space-xs font-body text-label-md font-semibold uppercase tracking-widest text-secondary">
              ESPECIALIDADES
            </span>

            <h2 className="mb-space-sm font-display text-headline-lg text-on-surface">
              Procedimentos pensados para você.
            </h2>

            <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
              Técnicas personalizadas para valorizar suas sobrancelhas,
              respeitando seus traços, seu estilo e o resultado que você deseja.
            </p>
          </div>

          {/* Especialidades */}
          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-3">
            {SERVICES.filter(
              (service) => service.category === "especialidade",
            ).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onDetails={openDetails}
                onBooking={openBooking}
              />
            ))}
          </div>

          {/* Complementares */}
          <div className="mt-space-2xl flex flex-col items-center border-t border-outline-variant/30 pt-space-lg">
            <div className="mx-auto mb-space-lg max-w-xl text-center">
              <span className="font-body text-label-sm font-semibold uppercase tracking-widest text-secondary">
                CUIDADOS COMPLEMENTARES
              </span>

              <p className="mt-space-xs font-body text-body-sm text-on-surface-variant">
                Para completar seu momento de cuidado.
              </p>
            </div>

            <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-space-lg md:grid-cols-2">
              {SERVICES.filter(
                (service) => service.category === "complementar",
              ).map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onDetails={openDetails}
                  onBooking={openBooking}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailsModal
        service={detailsService}
        onClose={() => setDetailsService(null)}
        onBooking={openBooking}
      />
    </>
  );
}

interface ServiceCardProps {
  service: Service;
  onDetails: (service: Service) => void;
  onBooking: (service: Service) => void;
}

function ServiceCard({ service, onDetails, onBooking }: ServiceCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.src}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Duração */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1.5 font-body text-[10px] font-semibold text-on-surface shadow-sm backdrop-blur">
          <FiClock className="h-3.5 w-3.5 text-secondary" />
          {formatDuration(service.duration)}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-space-lg">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-headline-sm leading-tight text-on-surface">
              {service.title}
            </h3>

            <span className="shrink-0 font-body text-sm font-semibold text-secondary">
              {formatPrice(service.price)}
            </span>
          </div>

          <p className="mt-space-sm line-clamp-3 font-body text-body-sm leading-5 text-on-surface-variant">
            {service.description}
          </p>
        </div>

        {/* Ações */}
        <div className="mt-space-lg flex items-center justify-between border-t border-outline-variant/30 pt-space-md">
          <button
            type="button"
            onClick={() => onDetails(service)}
            className="inline-flex cursor-pointer items-center gap-1.5 font-body text-xs font-medium text-secondary transition hover:text-on-surface"
          >
            Ver detalhes
            <FiChevronRight className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={() => onBooking(service)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-body text-xs font-semibold text-white transition hover:bg-neutral-800"
          >
            <FiCalendar className="h-3.5 w-3.5" />
            Agendar
          </button>
        </div>
      </div>
    </article>
  );
}
