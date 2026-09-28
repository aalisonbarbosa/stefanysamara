import { FaWhatsapp } from "react-icons/fa";

const INSTAGRAM_URL = "https://instagram.com/stefanysamara.unique";

interface FooterProps {
  onBooking: () => void;
}

export default function Footer({ onBooking }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container py-space-2xl border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl text-left">
          <div className="flex flex-col gap-space-xs">
            <span className="font-display text-headline-md text-on-surface font-semibold">
              Stefany Samara
            </span>
            <span className="font-body text-label-md uppercase tracking-widest text-secondary font-bold">
              Designer de Sobrancelhas
            </span>
            <p className="font-body text-body-sm text-on-surface-variant max-w-sm mt-space-xs leading-relaxed">
              Design cuidadoso e personalizado para valorizar a naturalidade do
              seu olhar em Ibiranga, Pernambuco.
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-body text-title-md text-on-surface font-semibold">
              Localização &amp; Contato
            </span>
            <span className="font-body text-body-sm text-on-surface">
              Ibiranga — Itambé/PE
            </span>
            <span className="font-body text-body-sm text-on-surface">
              Atendimento exclusivo com hora marcada
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-body-sm text-secondary hover:underline font-bold mt-1"
            >
              @stefanysamara.unique
            </a>
          </div>
          <div className="flex flex-col gap-space-sm items-start">
            <span className="font-body text-title-md text-on-surface font-semibold">
              Atendimento Reservado
            </span>
            <p className="font-body text-body-sm text-on-surface-variant">
              Garanta seu horário com antecedência e desfrute de um atendimento
              sob medida.
            </p>
            <button
              onClick={onBooking}
              className="inline-flex items-center justify-center gap-2 bg-primary text-surface font-body text-label-md px-space-lg py-2.5 rounded-lg hover:bg-neutral-800 transition-all font-semibold shadow-sm cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Reservar Horário</span>
            </button>
          </div>
        </div>
        <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body text-label-sm border-t border-outline-variant/30 font-medium">
          <span>© 2026 Stefany Samara. Todos os direitos reservados.</span>
          <span>Beleza natural com precisão e afeto.</span>
        </div>
      </div>
    </footer>
  );
}
