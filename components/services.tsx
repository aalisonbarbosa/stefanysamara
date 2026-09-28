import Image from "next/image";

const SERVICES = [
  {
    title: "Design Personalizado",
    description:
      "Um design criado de acordo com o formato do seu rosto, respeitando a naturalidade e valorizando seus traços.",
    src: "/design-personalizado.jpeg",
  },
  {
    title: "Brow Lamination",
    description:
      "Alinhamento e definição dos fios para um olhar mais marcante, organizado e sofisticado.",
    src: "/brow-lamination.jpeg",
  },
  {
    title: "Design com Henna",
    description:
      "Preenchimento e definição com henna para destacar o formato das sobrancelhas e intensificar o olhar.",
    src: "/henna.jpeg",
  },
];

const COMPLEMENTARY = [
  {
    title: "Depilação de Buço",
    description:
      "Remoção delicada dos pelos, deixando a pele mais lisa e bem cuidada.",
    src: "/depilacao-buco.jpg",
  },
  {
    title: "Depilação de Axilas",
    description: "Cuidado e conforto para deixar a pele mais lisa e suave.",
    src: "/depilacao-axilas.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="w-full py-space-2xl bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-body text-label-md uppercase tracking-widest text-secondary mb-space-xs font-semibold">
            ESPECIALIDADES
          </span>
          <h2 className="font-display text-headline-lg text-on-surface mb-space-sm">
            Procedimentos pensados para você.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            Técnicas personalizadas para valorizar suas sobrancelhas,
            respeitando seus traços, seu estilo e o resultado que você deseja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* Cuidados complementares */}
        <div className="mt-space-2xl pt-space-lg flex flex-col items-center">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <span className="font-body text-label-sm uppercase tracking-widest text-secondary font-semibold">
              CUIDADOS COMPLEMENTARES
            </span>
            <p className="font-body text-body-sm text-on-surface-variant mt-space-xs">
              Para completar seu momento de cuidado.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg max-w-4xl mx-auto w-full">
            {COMPLEMENTARY.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  src: string;
}

function ServiceCard({ title, description, src }: ServiceCardProps) {
  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-md flex flex-col group hover:-translate-y-1 transition-all duration-300 border border-outline-variant/30">
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={src}
          alt={title}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-space-lg flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-display text-headline-sm text-on-surface mb-space-xs">
            {title}
          </h3>
          <p className="font-body text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
