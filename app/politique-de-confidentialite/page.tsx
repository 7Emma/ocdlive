import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — OCD Live",
  description: "Politique de protection des données et respect de la vie privée d'OCD Live.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      <div className="container" style={{ maxWidth: "820px" }}>
        <div className="eyebrow" style={{ marginBottom: "12px" }}>
          <i /> Protection des Données
        </div>
        <h1 style={{ fontSize: "clamp(30px, 4vw, 44px)", margin: "0 0 24px 0", letterSpacing: "-2px" }}>
          Politique de Confidentialité
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px", color: "var(--muted)", fontSize: "14px", lineHeight: 1.8 }}>
          <section>
            <h2 style={{ color: "#fff", fontSize: "18px", margin: "0 0 10px 0" }}>1. Données collectées</h2>
            <p style={{ margin: 0 }}>
              Dans le cadre des demandes de devis et des réservations de créneaux live,
              OCD Live collecte uniquement les informations nécessaires au traitement
              de votre projet : nom, organisation, email, numéro de téléphone, date souhaitée
              et description de votre prestation.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#fff", fontSize: "18px", margin: "0 0 10px 0" }}>2. Utilisation des informations</h2>
            <p style={{ margin: 0 }}>
              Vos informations sont directement transmises à l'administrateur d'OCD Live
              pour valider la faisabilité technique de votre direct parmi les 4 créneaux quotidiens
              disponibles. Elles ne sont jamais cédées, vendues ou partagées avec des tiers commerciaux.
            </p>
          </section>

          <section>
            <h2 style={{ color: "#fff", fontSize: "18px", margin: "0 0 10px 0" }}>3. Vos droits</h2>
            <p style={{ margin: 0 }}>
              Vous disposez d'un droit permanent d'accès, de rectification et de suppression
              de vos données personnelles en nous écrivant directement à l'adresse officielle
              contact@ocdlive.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
