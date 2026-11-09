import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import { PublicNavbar, PublicFooter } from "@/components/PublicChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://ocdlive.com"),
  title: {
    default: "OCD Live — L'expérience du live, pensée autrement | Lomé (Togo)",
    template: "%s | OCD Live Lomé",
  },
  description:
    "Production audiovisuelle de pointe, captation multicaméra 4K en direct, régie mobile et streaming événementiel fondés par le PDG Bovan à Lomé (Togo). #LesOpportunitesCestDehors",
  keywords: [
    "OCD Live",
    "Bovan",
    "Bovann",
    "#LesOpportunitesCestDehors",
    "captation live Lomé",
    "streaming professionnel Togo",
    "production audiovisuelle Afrique",
    "régie multicaméra 4K",
    "retransmission en direct",
    "liaison satellite Starlink",
    "House of Challenge",
    "talk-show Lomé",
    "événements Togo UEMOA",
  ],
  authors: [{ name: "Bovan — OCD Live", url: "https://www.youtube.com/@BovannYT" }],
  creator: "OCD Live Productions",
  alternates: {
    canonical: "https://ocdlive.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ocdlive.com",
    title: "OCD Live — L'expérience du live, pensée autrement | Bovan",
    description:
      "Captation multicaméra 4K, régie mobile, liaison satellite et couverture d'événements majeurs à Lomé et en Afrique. Fondé par Bovan.",
    siteName: "OCD Live",
    images: [
      {
        url: "/images/studio-hero.png",
        width: 1200,
        height: 630,
        alt: "Studio de production et régie broadcast OCD Live Lomé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCD Live — Captation Multicaméra & Streaming 4K Lomé (Togo)",
    description:
      "Production audiovisuelle, régie mobile et diffusion en direct sur YouTube, Facebook et TikTok. Le mouvement #LesOpportunitesCestDehors.",
    images: ["/images/studio-hero.png"],
    creator: "@BovannYT",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico?v=3", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
};

const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ocdlive.com/#organization",
      name: "OCD Live",
      alternateName: "Les Opportunités C'est Dehors",
      url: "https://ocdlive.com",
      logo: "https://ocdlive.com/icon-512.png",
      image: "https://ocdlive.com/images/studio-hero.png",
      description:
        "Production audiovisuelle d'exception, régie multicaméra 4K et streaming événementiel haute performance fondé par le PDG Bovan à Lomé, Togo.",
      founder: {
        "@type": "Person",
        name: "Bovan",
        jobTitle: "PDG & Créateur de Contenu",
        image: "https://ocdlive.com/images/bovann-pdg.jpg",
        sameAs: [
          "https://www.youtube.com/@BovannYT",
          "https://www.facebook.com/share/r/1cPEQC9cbn/",
        ],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Boulevard du 13 Janvier / Agoè-Nyivé",
        addressLocality: "Lomé",
        addressRegion: "Maritime",
        addressCountry: "TG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.1375,
        longitude: 1.2123,
      },
      telephone: "+228 90 00 00 00",
      priceRange: "15 000 FCFA - 180 000 FCFA",
      currenciesAccepted: "XOF",
      paymentAccepted: "Cash, T-Money, Flooz",
      areaServed: [
        { "@type": "Country", name: "Togo" },
        { "@type": "Country", name: "Bénin" },
        { "@type": "Country", name: "Ghana" },
        { "@type": "Country", name: "Côte d'Ivoire" },
      ],
      sameAs: [
        "https://www.youtube.com/@BovannYT",
        "https://tiktok.com/@bovan_officiel",
        "https://www.facebook.com/share/r/1cPEQC9cbn/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_DATA) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col antialiased selection:bg-[#ff6600] selection:text-white">
        <PublicNavbar />
        <main className="flex-1">{children}</main>
        <PublicFooter />
      </body>
    </html>
  );
}
