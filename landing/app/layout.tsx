import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vidavem.com"),
  title: "VidaVem — Assuma o Controle do Seu Peso Definitivamente",
  description:
    "O Método VidaVem reprograma sua mente e seus hábitos diários através de uma abordagem cognitivo-comportamental. Acesso integral e gratuito durante nossa fase de testes. Vagas limitadas.",
  keywords: [
    "controle de peso",
    "método cognitivo comportamental",
    "emagrecer",
    "hábitos saudáveis",
    "VidaVem",
    "beta gratuito",
  ],
  openGraph: {
    title: "VidaVem — Assuma o Controle do Seu Peso",
    description:
      "Reprograme sua mente e seus hábitos. Acesso gratuito ao Beta do Método VidaVem.",
    type: "website",
    images: ["/assets/welcome-bg.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${bricolageGrotesque.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icons/favicon.png" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
