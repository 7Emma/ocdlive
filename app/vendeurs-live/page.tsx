import type { Metadata } from "next";
import { getVendorLives } from "@/lib/admin-store";
import VendeursLiveClient from "./VendeursLiveClient";
import "./vendeurs.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Vendeurs en Direct d'Afrique — Hub Panafricain OCD Live",
  description:
    "Découvrez les ventes en direct au Cameroun, Bénin, Togo, Côte d'Ivoire et Sénégal. Retrouvez les commerçants en live sur TikTok, Facebook et commandez sur WhatsApp.",
  keywords: [
    "vendeurs en live",
    "TikTok live afrique",
    "Facebook live vente",
    "commerce direct cameroun",
    "live vente bénin",
    "live vente togo",
    "live vente côte d'ivoire",
    "LesOpportunitésCestDehors",
    "Bovann Group",
    "House of Challenge",
  ],
};

export default async function VendeursLivePage() {
  const initialLives = await getVendorLives();

  return <VendeursLiveClient initialLives={initialLives} />;
}
