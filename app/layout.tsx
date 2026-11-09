import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import { PublicNavbar, PublicFooter } from "@/components/PublicChrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://ocdlive.com"),
  title: {
    default: "OCD Live — L'expérience du live, pensée autrement",
    template: "%s | OCD Live",
  },
  description:
    "Production audiovisuelle, captation multicaméra en direct, streaming professionnel, couverture de conférences et création de contenus d'exception.",
  keywords: [
    "OCD Live",
    "captation live",
    "streaming professionnel",
    "production audiovisuelle",
    "événementiel",
    "Afrique",
    "multicaméra",
    "retransmission en direct",
  ],
  authors: [{ name: "OCD Live" }],
  creator: "OCD Live",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ocdlive.com",
    title: "OCD Live — L'expérience du live, pensée autrement",
    description:
      "Production audiovisuelle, captation en direct, création de contenus et événements d'exception.",
    siteName: "OCD Live",
    images: [
      {
        url: "/images/studio-hero.png",
        width: 1200,
        height: 630,
        alt: "Studio OCD Live",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OCD Live — L'expérience du live, pensée autrement",
    description:
      "Production audiovisuelle, captation multicaméra en direct et streaming événementiel de pointe.",
    images: ["/images/studio-hero.png"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col antialiased selection:bg-[#ff6600] selection:text-white">
        <PublicNavbar />
        <main className="flex-1">{children}</main>
        <PublicFooter />
      </body>
    </html>
  );
}
