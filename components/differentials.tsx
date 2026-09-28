const VALUES = [
  {
    num: "01",
    title: "PERSONALIZAÇÃO",
    description:
      "Cada atendimento é pensado de acordo com seus traços, seu estilo e o resultado que você deseja.",
  },
  {
    num: "02",
    title: "NATURALIDADE",
    description:
      "A proposta é realçar sua beleza sem descaracterizar aquilo que torna seus traços únicos.",
  },
  {
    num: "03",
    title: "CUIDADO",
    description:
      "Um atendimento tranquilo, delicado e atento aos detalhes em cada etapa.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="w-full py-space-2xl bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop">
        <div className="max-w-2xl mx-auto text-center mb-space-xl">
          <span className="font-body text-label-md uppercase tracking-widest text-secondary mb-space-xs font-semibold">
            O CUIDADO ESTÁ NOS DETALHES
          </span>
          <h2 className="font-display text-headline-lg text-on-surface mb-space-xs">
            Feito para valorizar o que é seu.
          </h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-xl mx-auto mt-space-xs leading-relaxed">
            Cada detalhe do atendimento é pensado para proporcionar uma
            experiência cuidadosa e um resultado que respeite sua
            individualidade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg pt-space-xs">
          {VALUES.map((v) => (
            <div
              key={v.num}
              className="bg-surface rounded-xl p-space-lg border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center mb-space-md">
                <span className="font-body text-label-md text-secondary font-bold tracking-widest">
                  {v.num}
                </span>
              </div>
              <h3 className="font-display text-title-lg text-on-surface mb-space-xs uppercase tracking-wide">
                {v.title}
              </h3>
              <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
