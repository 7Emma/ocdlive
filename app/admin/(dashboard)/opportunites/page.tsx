import { PlusCircle, Trash2, MessageSquare, ExternalLink } from "lucide-react";
import AutoSubmitSelect from "@/components/AutoSubmitSelect";

export const dynamic = "force-dynamic";
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
        <h1
          style={{ fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}
        >
          Mouvement #LesOpportunitesCestDehors & Recrutement
        </h1>
        <p style={{ fontSize: "14px", color: "var(--adm-text-muted)" }}>
          Gérez les opportunités de terrain pour la jeunesse et suivez les
          candidatures reçues par OCD Live.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "28px",
          marginBottom: "40px",
        }}
      >
        {/* Left Column: Active Opportunities */}
        <div className="admin-table-card">
          <div className="admin-table-head">
            <div className="table-title-box">
              <h3>Missions & Postes Ouverts ({opportunities.length})</h3>
              <p>Affichés sur la page publique /opportunites</p>
            </div>
          </div>

          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
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
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "6px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          fontSize: "10px",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          background: opp.type?.includes("Formation")
                            ? "rgba(59, 130, 246, 0.18)"
                            : opp.type?.includes("Mentorat")
                            ? "rgba(168, 85, 247, 0.18)"
                            : opp.type?.includes("Casting")
                            ? "rgba(236, 72, 153, 0.18)"
                            : "rgba(243, 107, 11, 0.18)",
                          color: opp.type?.includes("Formation")
                            ? "#60a5fa"
                            : opp.type?.includes("Mentorat")
                            ? "#c084fc"
                            : opp.type?.includes("Casting")
                            ? "#f472b6"
                            : "var(--adm-orange)",
                          border: "1px solid currentColor",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        {opp.type || "Opportunité"}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "var(--adm-text-muted)",
                        }}
                      >
                        {opp.company} · {opp.category}
                      </span>
                    </div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "800",
                        color: "#fff",
                        marginBottom: "4px",
                      }}
                    >
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
                      title="Supprimer cette opportunité"
                    >
                      <Trash2 size={16} />
                    </button>
                  </form>
                </div>

                <p
                  style={{
                    fontSize: "13px",
                    color: "#c0c7d2",
                    marginBottom: "12px",
                    lineHeight: 1.5,
                  }}
                >
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
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span>📍 {opp.location}</span>
                  {opp.spots && <span>👥 {opp.spots}</span>}
                  <span style={{ fontWeight: 700, color: "#fff" }}>
                    💰 {opp.remuneration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Create New Opportunity Form */}
        <div className="admin-table-card" style={{ padding: "28px" }}>
          <h3
            style={{
              fontSize: "17px",
              fontWeight: "800",
              marginBottom: "6px",
            }}
          >
            Publier une Opportunité #OCD
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "var(--adm-text-muted)",
              marginBottom: "20px",
            }}
          >
            Formation, Mentorat Bovan, Pige terrain ou Casting jeunes talents.
          </p>

          <form action={createOpportunityAction}>
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="opportunityType">
                Type d'opportunité
              </label>
              <select
                id="opportunityType"
                name="opportunityType"
                className="admin-select"
                defaultValue="Formation & Masterclass"
              >
                <option value="Formation & Masterclass">
                  🎓 Formation & Masterclass
                </option>
                <option value="Encadrement & Mentorat">
                  🚀 Encadrement & Mentorat Bovan
                </option>
                <option value="Emploi & Mission Terrain">
                  💼 Emploi & Mission Terrain (Pige)
                </option>
                <option value="Casting & Appel à Projets">
                  📢 Casting & Appel à Projets
                </option>
              </select>
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="role">
                Intitulé de l'opportunité
              </label>
              <input
                id="role"
                name="role"
                type="text"
                required
                placeholder="Ex : Masterclass Réalisation Multicaméra & Régie 4K"
                className="admin-input"
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="company">
                  Organisateur / Structure
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  defaultValue="OCD Live Academy"
                  placeholder="Ex : OCD Live Academy ou Bovan Mouvement"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="department">
                  Pôle / Domaine
                </label>
                <select
                  id="department"
                  name="department"
                  className="admin-select"
                >
                  <option value="Audiovisuel & Régie">Audiovisuel & Régie</option>
                  <option value="Production & Montage">Production & Montage</option>
                  <option value="Communication & Réseaux">Communication & Réseaux</option>
                  <option value="Entrepreneuriat & Création">Entrepreneuriat & Création</option>
                  <option value="Événementiel & Accueil">Événementiel & Accueil</option>
                </select>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="type">
                  Format / Statut
                </label>
                <input
                  id="type"
                  name="type"
                  type="text"
                  defaultValue="Formation Pratique Gratuite"
                  placeholder="Ex: Stage, Freelance, Mentorat 3 mois"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="location">
                  Lieu
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  defaultValue="Lomé (Studio OCD & Terrain)"
                  className="admin-input"
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="compensation">
                  Rémunération / Prise en charge
                </label>
                <input
                  id="compensation"
                  name="compensation"
                  type="text"
                  defaultValue="Prise en charge intégrale (Matériel fourni)"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="spots">
                  Nombre de places / Postes
                </label>
                <input
                  id="spots"
                  name="spots"
                  type="text"
                  defaultValue="12 places sélectionnées"
                  className="admin-input"
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="duration">
                  Durée de la mission / session
                </label>
                <input
                  id="duration"
                  name="duration"
                  type="text"
                  defaultValue="2 semaines intensives (30h)"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="badge">
                  Badge visuel
                </label>
                <input
                  id="badge"
                  name="badge"
                  type="text"
                  defaultValue="FORMATION 100% PRATIQUE"
                  className="admin-input"
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="description">
                Description concrète de l'opportunité
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                placeholder="Décrivez ce que les jeunes vont apprendre, pratiquer ou réaliser sur le terrain..."
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="requirements">
                Critères ou prérequis (1 par ligne)
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={3}
                defaultValue="Passionnés d'image et du direct&#10;Disponibilité pour les sessions pratiques&#10;Mentalité #OCD : soif d'apprendre et rigueur"
                className="admin-textarea"
              />
            </div>

            <button
              type="submit"
              className="admin-btn admin-btn-primary"
              style={{ width: "100%", padding: "14px" }}
            >
              <PlusCircle size={16} />
              <span>Publier l'opportunité sur le site</span>
            </button>
          </form>
        </div>
      </div>

      {/* Candidatures Section */}
      <div className="admin-table-card">
        <div className="admin-table-head">
          <div className="table-title-box">
            <h3>Candidatures Reçues de la Jeunesse ({applicants.length})</h3>
            <p>
              Talents ayant répondu à l'appel du mouvement
              #LesOpportunitesCestDehors
            </p>
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
                  <td
                    colSpan={6}
                    style={{ textAlign: "center", padding: "30px" }}
                  >
                    Aucune candidature enregistrée pour l'instant.
                  </td>
                </tr>
              ) : (
                applicants.map((app) => {
                  const cleanPhone = app.phone.replace(/[^0-9]/g, "");
                  const waLink = `https://wa.me/${cleanPhone}?text=Bonjour%20${encodeURIComponent(
                    app.fullName,
                  )},%20l'équipe%20OCD%20Live%20a%20bien%20reçu%20votre%20candidature%20pour%20le%20poste%20de%20${encodeURIComponent(
                    app.opportunityRole,
                  )}.`;

                  return (
                    <tr key={app.id}>
                      <td>
                        <div style={{ fontWeight: 800 }}>{app.fullName}</div>
                        <div style={{ fontSize: "12px", color: "#60a5fa" }}>
                          {app.phone}
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "var(--adm-text-muted)",
                          }}
                        >
                          {app.email}
                        </div>
                      </td>

                      <td>
                        <div
                          style={{
                            fontWeight: 700,
                            color: "var(--adm-orange)",
                          }}
                        >
                          {app.opportunityRole}
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "var(--adm-text-muted)",
                          }}
                        >
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
                          <span
                            style={{
                              fontSize: "12px",
                              color: "var(--adm-text-muted)",
                            }}
                          >
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
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                          }}
                        >
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
                              const status = formData.get(
                                "status",
                              ) as ApplicantItem["status"];
                              await updateApplicantStatusAction(app.id, status);
                            }}
                          >
                            <AutoSubmitSelect
                              name="status"
                              defaultValue={app.status}
                              className="admin-select"
                              style={{
                                padding: "4px 8px",
                                fontSize: "11px",
                                height: "auto",
                              }}
                            >
                              <option value="NOUVEAU">Nouveau</option>
                              <option value="ENTRETIEN">
                                Entretien / Casting terrain
                              </option>
                              <option value="RETENU">
                                Retenu dans l'équipe
                              </option>
                              <option value="REFUSE">Non retenu</option>
                            </AutoSubmitSelect>
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
