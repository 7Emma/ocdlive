import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import "./home.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col antialiased selection:bg-[#ff6600] selection:text-white">
        <Suspense fallback={<div className="h-20" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
