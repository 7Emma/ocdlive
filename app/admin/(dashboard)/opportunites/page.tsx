import {
  PlusCircle,
  Trash2,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

export const instant = false;
import { getAdminStore, type ApplicantItem } from "@/lib/admin-store";
import {
  createOpportunityAction,
  deleteOpportunityAction,
  updateApplicantStatusAction,
} from "@/app/actions/admin";

export default async function AdminOpportunitesPage() {
  const store = await getAdminStore();
  const opportunities = store.opportunities;
  const applicants = store.applicants;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}>
          Mouvement #LesOpportunitesCestDehors & Recrutement
        </h1>
        <p style={{ fontSize: "14px", color: "var(--adm-text-muted)" }}>
          Gérez les opportunités de terrain pour la jeunesse et suivez les candidatures reçues par OCD Live.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px", marginBottom: "40px" }}>
        {/* Left Column: Active Opportunities */}
        <div className="admin-table-card">
          <div className="admin-table-head">
            <div className="table-title-box">
              <h3>Missions & Postes Ouverts ({opportunities.length})</h3>
              <p>Affichés sur la page publique /opportunites</p>
            </div>
          </div>

          <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                style={{
                  background: "var(--adm-surface-elevated)",
                  border: "1px solid var(--adm-border)",
                  borderRadius: "14px",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "11px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "var(--adm-orange)",
                        marginBottom: "4px",
                      }}
                    >
                      {opp.category} · {opp.contractType}
                    </span>
                    <h4 style={{ fontSize: "16px", fontWeight: "800", color: "#fff" }}>
                      {opp.title}
                    </h4>
                  </div>

                  <form
                    action={async () => {
                      "use server";
                      await deleteOpportunityAction(opp.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="admin-logout-btn"
                      title="Supprimer cette offre"
                    >
                      <Trash2 size={16} />
                    </button>
                  </form>
                </div>

                <p style={{ fontSize: "13px", color: "#c0c7d2", marginBottom: "12px" }}>
                  {opp.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "var(--adm-text-muted)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    paddingTop: "10px",
                  }}
                >
                  <span>📍 {opp.location}</span>
                  <span style={{ fontWeight: 700, color: "#fff" }}>💰 {opp.remuneration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Create New Opportunity Form */}
        <div className="admin-table-card" style={{ padding: "28px" }}>
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "20px" }}>
            Publier une Nouvelle Offre #OCD
          </h3>

          <form action={createOpportunityAction}>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="role">
                Intitulé du poste / Mission
              </label>
              <input
                id="role"
                name="role"
                type="text"
                required
                placeholder="Ex : Pilote Drone & Prises de Vues Aériennes"
                className="admin-input"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="department">
                  Pôle / Département
                </label>
                <select id="department" name="department" className="admin-select">
                  <option value="Régie & Plateau">Régie & Plateau</option>
                  <option value="Prises de Vues & Caméra">Prises de Vues & Caméra</option>
                  <option value="Ingénierie Son">Ingénierie Son</option>
                  <option value="Community & Live Social">Community & Live Social</option>
                  <option value="Post-production Express">Post-production Express</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="type">
                  Type de contrat
                </label>
                <input
                  id="type"
                  name="type"
                  type="text"
                  defaultValue="Freelance / Mission"
                  className="admin-input"
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="location">
                  Lieu d'intervention
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  defaultValue="Lomé (Terrain & Régie)"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="compensation">
                  Rémunération
                </label>
                <input
                  id="compensation"
                  name="compensation"
                  type="text"
                  defaultValue="Rémunération forfaitaire par événement"
                  className="admin-input"
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="description">
                Description de la mission
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                placeholder="Décrivez les responsabilités concrètes lors des tournages..."
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="requirements">
                Critères requis (1 par ligne)
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={3}
                defaultValue="Expérience sur caméra ou drone&#10;Disponibilité les week-ends&#10;Mentalité #OCD : rigueur, réactivité, esprit d'équipe"
                className="admin-textarea"
              />
            </div>

            <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%", padding: "14px" }}>
              <PlusCircle size={16} />
              <span>Publier l'opportunité</span>
            </button>
          </form>
        </div>
      </div>

      {/* Candidatures Section */}
      <div className="admin-table-card">
        <div className="admin-table-head">
          <div className="table-title-box">
            <h3>Candidatures Reçues de la Jeunesse ({applicants.length})</h3>
            <p>Talents ayant répondu à l'appel du mouvement #LesOpportunitesCestDehors</p>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Candidat</th>
                <th>Poste visé</th>
                <th>Motivation / Profil</th>
                <th>Portfolio / Lien</th>
                <th>Statut</th>
                <th>Contact & Décision</th>
              </tr>
            </thead>
            <tbody>
              {applicants.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "30px" }}>
                    Aucune candidature enregistrée pour l'instant.
                  </td>
                </tr>
              ) : (
                applicants.map((app) => {
                  const cleanPhone = app.phone.replace(/[^0-9]/g, "");
                  const waLink = `https://wa.me/${cleanPhone}?text=Bonjour%20${encodeURIComponent(
                    app.fullName
                  )},%20l'équipe%20OCD%20Live%20a%20bien%20reçu%20votre%20candidature%20pour%20le%20poste%20de%20${encodeURIComponent(
                    app.opportunityRole
                  )}.`;

                  return (
                    <tr key={app.id}>
                      <td>
                        <div style={{ fontWeight: 800 }}>{app.fullName}</div>
                        <div style={{ fontSize: "12px", color: "#60a5fa" }}>{app.phone}</div>
                        <div style={{ fontSize: "11px", color: "var(--adm-text-muted)" }}>
                          {app.email}
                        </div>
                      </td>

                      <td>
                        <div style={{ fontWeight: 700, color: "var(--adm-orange)" }}>
                          {app.opportunityRole}
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--adm-text-muted)" }}>
                          {new Date(app.createdAt).toLocaleDateString("fr-FR")}
                        </div>
                      </td>

                      <td>
                        <div
                          style={{
                            fontSize: "12.5px",
                            color: "#c0c7d2",
                            maxWidth: "320px",
                            whiteSpace: "normal",
                            lineHeight: "1.4",
                          }}
                        >
                          « {app.motivation} »
                        </div>
                      </td>

                      <td>
                        {app.portfolioUrl ? (
                          <a
                            href={app.portfolioUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              color: "var(--adm-orange)",
                              fontSize: "12px",
                              textDecoration: "underline",
                            }}
                          >
                            <span>Voir réalisations</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span style={{ fontSize: "12px", color: "var(--adm-text-muted)" }}>
                            Non renseigné
                          </span>
                        )}
                      </td>

                      <td>
                        <span
                          className={`status-badge status-${
                            app.status === "RETENU"
                              ? "confirme"
                              : app.status === "ENTRETIEN"
                              ? "devis_envoye"
                              : app.status === "REFUSE"
                              ? "annule"
                              : "nouveau"
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>

                      <td>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className="admin-btn admin-btn-whatsapp admin-btn-sm"
                          >
                            <MessageSquare size={13} />
                            <span>Contacter WhatsApp</span>
                          </a>

                          <form
                            action={async (formData: FormData) => {
                              "use server";
                              const status = formData.get("status") as ApplicantItem["status"];
                              await updateApplicantStatusAction(app.id, status);
                            }}
                          >
                            <select
                              name="status"
                              defaultValue={app.status}
                              className="admin-select"
                              style={{ padding: "4px 8px", fontSize: "11px", height: "auto" }}
                              onChange={(e) => e.target.form?.requestSubmit()}
                            >
                              <option value="NOUVEAU">Nouveau</option>
                              <option value="ENTRETIEN">Entretien / Casting terrain</option>
                              <option value="RETENU">Retenu dans l'équipe</option>
                              <option value="REFUSE">Non retenu</option>
                            </select>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
