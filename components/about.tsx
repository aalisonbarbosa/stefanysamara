import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="w-full py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden shadow-lg bg-surface-container aspect-[3/4] relative border border-outline-variant/30">
              <Image
                src="/stefanysamara.jpeg"
                alt="Retrato da Stefany"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center gap-space-xs text-secondary font-body text-label-md uppercase tracking-widest mb-space-xs font-semibold">
              <span>SOBRE STEFANY</span>
            </div>
            <h2 className="font-display text-headline-lg text-on-surface mb-space-md">
              Um olhar mais atento sobre você.
            </h2>
            <div className="flex flex-col gap-space-md font-body text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              <p>
                Acredito que beleza não precisa transformar quem você é — apenas
                valorizar o que já existe.
              </p>
              <p>
                Meu trabalho começa entendendo seus traços, seu estilo e o
                resultado que você deseja. Cada sobrancelha tem suas
                características, por isso cada atendimento é pensado de forma
                individual, com cuidado em cada detalhe.
              </p>
              <p>
                Mais do que realizar um procedimento, quero proporcionar um
                momento de cuidado, leveza e confiança, para que você se sinta
                bem com o resultado e consigo mesma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
