import { CheckCircle2 } from "lucide-react";

export const dynamic = "force-dynamic";
import { getAdminStore } from "@/lib/admin-store";
import { updateSettingsAction } from "@/app/actions/admin";

export default async function AdminParametresPage() {
  const store = await getAdminStore();
  const settings = store.settings;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}>
          Paramètres & Configuration de la Régie
        </h1>
        <p style={{ fontSize: "14px", color: "var(--adm-text-muted)" }}>
          Coordonnées de l'entreprise, quotas stricts de diffusion et paramètres de sécurité.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px" }}>
        {/* Left Column: General & Contact Settings */}
        <div className="admin-table-card" style={{ padding: "28px" }}>
          <h2 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "20px" }}>
            Informations de Contact & Régie
          </h2>

          <form action={updateSettingsAction}>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="companyName">
                Nom de la structure
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                disabled
                defaultValue={settings.companyName}
                className="admin-input"
                style={{ opacity: 0.8 }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="phone">
                  Téléphone Principal
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  defaultValue={settings.phone}
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="whatsapp">
                  Ligne WhatsApp Direct
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="text"
                  required
                  defaultValue={settings.whatsapp}
                  className="admin-input"
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="email">
                Email de réception des devis
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                defaultValue={settings.email}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="address">
                Adresse du Plateau & Studio
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                defaultValue={settings.address}
                className="admin-input"
              />
            </div>

            <div style={{ borderTop: "1px solid var(--adm-border)", paddingTop: "20px", marginTop: "24px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "16px" }}>
                Règles de Quota & Tarification Régie
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="admin-form-group">
                  <label className="admin-label" htmlFor="maxLivesPerDay">
                    Quota Lives Max par Jour
                  </label>
                  <input
                    id="maxLivesPerDay"
                    name="maxLivesPerDay"
                    type="number"
                    min={1}
                    max={10}
                    defaultValue={settings.maxLivesPerDay}
                    className="admin-input"
                  />
                  <span style={{ fontSize: "11px", color: "var(--adm-text-muted)", marginTop: "4px", display: "block" }}>
                    Actuellement fixé à 4 pour garantir la qualité 4K.
                  </span>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label" htmlFor="baseHourlyRateFcfa">
                    Tarif Horaire de Base (FCFA)
                  </label>
                  <input
                    id="baseHourlyRateFcfa"
                    name="baseHourlyRateFcfa"
                    type="number"
                    step={10000}
                    defaultValue={settings.baseHourlyRateFcfa}
                    className="admin-input"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="admin-btn admin-btn-primary" style={{ marginTop: "12px", padding: "14px 24px" }}>
              <CheckCircle2 size={16} />
              <span>Enregistrer les paramètres</span>
            </button>
          </form>
        </div>

        {/* Right Column: Security & Infrastructure status */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="admin-table-card" style={{ padding: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "12px" }}>
              Sécurité & Accès Régie
            </h3>
            <p style={{ fontSize: "13px", color: "var(--adm-text-muted)", marginBottom: "16px" }}>
              L'accès à l'administration est verrouillé par cookie HTTP-only sécurisé.
            </p>

            <div
              style={{
                background: "var(--adm-surface-elevated)",
                borderRadius: "10px",
                padding: "14px",
                border: "1px solid var(--adm-border)",
                fontSize: "12.5px",
                lineHeight: "1.6",
              }}
            >
              <div><strong>Identifiant :</strong> admin@ocdlive.com</div>
              <div><strong>Rôle :</strong> Super Admin · Régie Master</div>
              <div><strong>Durée de session :</strong> 7 jours actifs</div>
            </div>
          </div>

          <div className="admin-table-card" style={{ padding: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "12px" }}>
              Sauvegarde & Données
            </h3>
            <p style={{ fontSize: "13px", color: "var(--adm-text-muted)", marginBottom: "16px" }}>
              Les réservations, articles, opportunités et configurations de streaming sont persistées dans :
            </p>

            <code
              style={{
                display: "block",
                padding: "10px 12px",
                background: "#05070a",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                fontSize: "12px",
                color: "var(--adm-orange)",
                wordBreak: "break-all",
              }}
            >
              data/admin-store.json
            </code>

            <div style={{ marginTop: "16px", fontSize: "12px", color: "var(--adm-green)" }}>
              ✓ Persistance automatique à chaque action
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
