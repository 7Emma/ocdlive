import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions Légales — OCD Live",
  description: "Mentions légales et informations réglementaires du site OCD Live.",
};

export default function MentionsLegalesPage() {
  return (
    <main style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      <div className="container" style={{ maxWidth: "820px" }}>
        <div className="eyebrow" style={{ marginBottom: "12px" }}>
          <i /> Informations Réglementaires
        </div>
        <h1 style={{ fontSize: "clamp(30px, 4vw, 44px)", margin: "0 0 24px 0", letterSpacing: "-2px" }}>
          Mentions Légales
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", color: "var(--muted)", fontSize: "14px", lineHeight: 1.8 }}>
          <section>
            <h2 style={{ color: "#fff", fontSize: "18px", margin: "0 0 10px 0" }}>1. Éditeur du site</h2>
            <p style={{ margin: "0 0 12px 0" }}>
              Le site officiel <strong>OCD Live</strong> (« Opportunités C'est Dehors ») est édité par l'entreprise OCD Live.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px", color: "#ccc" }}>
              <li><strong>Dénomination :</strong> OCD Live</li>
              <li><strong>Direction Générale :</strong> Bovan</li>
              <li><strong>Adresse du studio :</strong> {COMPANY_INFO.address}</li>
              <li><strong>Courriel :</strong> {COMPANY_INFO.email}</li>
              <li><strong>Téléphone :</strong> {COMPANY_INFO.phoneLabel}</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "#fff", fontSize: "18px", margin: "0 0 10px 0" }}>2. Hébergement</h2>
            <p style={{ margin: 0 }}>
              Le site est hébergé sur une infrastructure cloud moderne et hautement sécurisée,
              garantissant un protocole HTTPS chiffré et une disponibilité continue.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#fff", fontSize: "18px", margin: "0 0 10px 0" }}>3. Propriété intellectuelle</h2>
            <p style={{ margin: 0 }}>
              L'ensemble des contenus (logo officiel monogramme OCD, photographies de plateau,
              vidéos de direct, textes, charte graphique) sont protégés par le droit d'auteur.
              Toute reproduction ou diffusion sans accord écrit préalable de la direction est strictement interdite.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
