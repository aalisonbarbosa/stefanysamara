import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://stefanysamara.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Stefany Samara | Designer de Sobrancelhas em Ibiranga",
    template: "%s | Stefany Samara",
  },

  description:
    "Stefany Samara é designer de sobrancelhas em Ibiranga, Itambé/PE. Conheça os procedimentos, resultados e agende seu atendimento.",

  keywords: [
    "designer de sobrancelhas",
    "designer de sobrancelhas em Ibiranga",
    "designer de sobrancelhas em Itambé",
    "sobrancelhas Ibiranga",
    "sobrancelhas Itambé",
    "brow lamination",
    "design de sobrancelhas",
    "design com henna",
    "depilação de buço",
    "depilação de axilas",
  ],

  authors: [{ name: "Stefany Samara" }],

  creator: "Stefany Samara",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Stefany Samara",
    title: "Stefany Samara | Designer de Sobrancelhas",
    description:
      "Elegância em cada traço. Conheça os procedimentos e resultados da Stefany Samara em Ibiranga — Itambé/PE.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stefany Samara — Designer de Sobrancelhas",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",

  name: "Stefany Samara",
  description: "Designer de sobrancelhas em Ibiranga, Itambé/PE.",

  url: "https://stefanysamara.vercel.app",

  image: "https://stefanysamara.vercel.app/og-image.jpg",

  areaServed: [
    {
      "@type": "Place",
      name: "Ibiranga",
    },
    {
      "@type": "City",
      name: "Itambé",
    },
  ],

  address: {
    "@type": "PostalAddress",
    addressLocality: "Itambé",
    addressRegion: "PE",
    addressCountry: "BR",
  },

  sameAs: ["https://www.instagram.com/stefanysamara.unique/"],

  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Design Personalizado",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Brow Lamination",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Design com Henna",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Depilação de Buço",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Depilação de Axilas",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
