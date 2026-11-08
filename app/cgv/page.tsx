import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) | OCD Live",
  description:
    "Conditions générales de vente et de prestation de services audiovisuels d'OCD Live : commande, quota 4 lives/jour, acomptes et engagements.",
};

export default function CGVPage() {
  return (
    <main className="container" style={{ padding: "120px 0 80px", maxWidth: "900px" }}>
      <div style={{ marginBottom: "28px" }}>
        <Link href="/" style={{ color: "var(--orange)", fontSize: "12px", textDecoration: "none" }}>
          ← Retour à l'accueil
        </Link>
      </div>

      <div className="eyebrow" style={{ marginBottom: "12px" }}>
        <i /> CADRE CONTRACTUEL & PRESTATIONS
      </div>

      <h1 style={{ font: "800 clamp(32px, 5vw, 48px) Manrope, sans-serif", letterSpacing: "-1.5px", margin: "10px 0 24px" }}>
        Conditions Générales de Vente
      </h1>

      <div style={{ color: "#d0ceca", lineHeight: "1.8", fontSize: "15px", display: "flex", flexDirection: "column", gap: "28px" }}>
        <section>
          <h2 style={{ color: "#fff", fontSize: "20px", marginBottom: "10px" }}>1. Objet des prestations</h2>
          <p>
            OCD Live (Opportunités C&apos;est Dehors) assure la réalisation, la captation multicaméra, le streaming en direct et la production audiovisuelle. Chaque intervention est encadrée par un devis détaillé soumis à l&apos;approbation du client.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#fff", fontSize: "20px", marginBottom: "10px" }}>2. Quota technique & Disponibilité</h2>
          <p>
            Afin de garantir un standard broadcast irréprochable, OCD Live applique une limite stricte de <strong>4 lives maximum par jour</strong>. Les créneaux sont réservés dans l&apos;ordre de validation des acomptes contractuels.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#fff", fontSize: "20px", marginBottom: "10px" }}>3. Tarifs et modalités de règlement</h2>
          <p>
            Les tarifs sont exprimés en Francs CFA (FCFA). Sauf disposition contractuelle particulière, toute réservation devient ferme à réception d&apos;un acompte de 50 %, le solde étant exigible à la livraison des flux finaux ou livrables master.
          </p>
        </section>

        <section>
          <h2 style={{ color: "#fff", fontSize: "20px", marginBottom: "10px" }}>4. Annulation et report</h2>
          <p>
            En cas de report notifié au moins 72 heures avant le direct, le créneau peut être réattribué sans pénalité selon les disponibilités de nos régies mobiles.
          </p>
        </section>
      </div>
    </main>
  );
}
