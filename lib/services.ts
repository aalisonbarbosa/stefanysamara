export interface Service {
  id: string;
  title: string;
  description: string;
  src: string;
  duration: number;
  price: number;
  benefits: string[];
  care: string[];
  category: "especialidade" | "complementar";
}

export const SERVICES: Service[] = [
  {
    id: "design-personalizado",
    title: "Design Personalizado",
    description:
      "Um design criado de acordo com o formato do seu rosto, respeitando a naturalidade e valorizando seus traços.",
    src: "/design-personalizado.jpeg",
    duration: 30,
    price: 25,
    category: "especialidade",
    benefits: [
      "Respeito total à anatomia do seu olhar",
      "Remoção delicada sem agredir a pele",
      "Harmonização de assimetrias naturais",
      "Finalização hidratante e calmante",
    ],
    care: [
      "Evite coçar ou puxar os fios recém-alinhados",
      "Higienize com sabonete neutro suave",
      "Penteie suavemente na direção do crescimento",
    ],
  },
  {
    id: "brow-lamination",
    title: "Brow Lamination",
    description:
      "Alinhamento e definição dos fios para um olhar mais marcante, organizado e sofisticado.",
    src: "/brow-lamination.jpeg",
    duration: 90,
    price: 100,
    category: "especialidade",
    benefits: [
      "Fios alinhados e visualmente mais volumosos",
      "Efeito natural e sofisticado",
      "Valorização do formato das sobrancelhas",
      "Finalização para manter os fios organizados",
    ],
    care: [
      "Evite molhar as sobrancelhas nas primeiras horas",
      "Não esfregue a região",
      "Penteie os fios suavemente todos os dias",
    ],
  },
  {
    id: "design-com-henna",
    title: "Design com Henna",
    description:
      "Preenchimento e definição com henna para destacar o formato das sobrancelhas e intensificar o olhar.",
    src: "/henna.jpeg",
    duration: 50,
    price: 40,
    category: "especialidade",
    benefits: [
      "Preenchimento visual das falhas",
      "Definição mais marcante do desenho",
      "Design personalizado para o seu rosto",
      "Resultado harmonioso e sofisticado",
    ],
    care: [
      "Evite lavar a região nas primeiras horas",
      "Evite produtos oleosos sobre a henna",
      "Não esfregue a região durante a higienização",
    ],
  },
  {
    id: "depilacao-buco",
    title: "Depilação de Buço",
    description:
      "Remoção delicada dos pelos, deixando a pele mais lisa e bem cuidada.",
    src: "/depilacao-buco.jpg",
    duration: 20,
    price: 10,
    category: "complementar",
    benefits: [
      "Remoção rápida e delicada",
      "Pele mais lisa",
      "Acabamento cuidadoso",
    ],
    care: [
      "Evite exposição solar intensa logo após o procedimento",
      "Evite produtos irritantes na região",
      "Mantenha a pele hidratada",
    ],
  },
  {
    id: "depilacao-axilas",
    title: "Depilação de Axilas",
    description: "Cuidado e conforto para deixar a pele mais lisa e suave.",
    src: "/depilacao-axilas.jpg",
    duration: 30,
    price: 20,
    category: "complementar",
    benefits: [
      "Remoção cuidadosa dos pelos",
      "Pele mais lisa",
      "Atendimento rápido e confortável",
    ],
    care: [
      "Evite produtos irritantes imediatamente após o procedimento",
      "Evite atrito excessivo na região",
      "Use produtos suaves para higienização",
    ],
  },
];

export function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatDuration(duration: number) {
  return `${duration} ${duration === 1 ? "minuto" : "minutos"}`;
}

export function formatTotalDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  if (hours === 0) {
    return `${minutes} min`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h${String(minutes).padStart(2, "0")}`;
}
