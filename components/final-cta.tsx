import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/558387022712?text=Ol%C3%A1,%20gostaria%20de%20reservar%20um%20hor%C3%A1rio";
const INSTAGRAM_URL = "https://instagram.com/stefanysamara.unique";

export default function FinalCTA() {
  return (
    <section className="w-full bg-primary py-space-2xl mb-space-2xl">
      <div className="max-w-4xl mx-auto px-margin lg:px-margin-desktop text-center flex flex-col items-center">
        <span className="font-body text-label-md uppercase tracking-widest text-tertiary font-bold mb-space-sm">
          SEU MOMENTO DE AUTOCUIDADO
        </span>
        <h2 className="font-display text-headline-lg lg:text-display text-surface mb-space-md leading-tight uppercase">
          Elegância em cada traço.
        </h2>
        <p className="font-body text-body-lg text-[#D8D2C7] max-w-xl mb-space-xl leading-relaxed">
          Agende seu atendimento e descubra um design pensado especialmente para
          você.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-space-md">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-space-sm bg-tertiary text-tertiary-foreground font-body text-title-md px-space-2xl py-space-md rounded-lg shadow-xl hover:bg-[#d6ba7f] transition-all font-bold tracking-wide"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Agendar atendimento</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-xs text-surface hover:text-tertiary border border-surface/50 hover:border-tertiary rounded-lg font-body text-label-lg py-space-md px-space-lg transition-all font-semibold"
          >
            <FaInstagram className="w-5 h-5" />
            <span>Ver Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
