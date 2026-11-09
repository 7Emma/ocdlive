import Link from "next/link";

export const dynamic = "force-dynamic";
import { PlusCircle, ExternalLink } from "lucide-react";
import AdminDeleteButton from "@/components/AdminDeleteButton";
import { getAdminStore } from "@/lib/admin-store";
import { createProjectAction, deleteProjectAction } from "@/app/actions/admin";

export default async function AdminRealisationsPage() {
  const store = await getAdminStore();
  const projects = store.projects;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}>
          Portfolio & Réalisations
        </h1>
        <p style={{ fontSize: "14px", color: "var(--adm-text-muted)" }}>
          Gérez les références de captation et projets live diffusés sur la vitrine publique OCD Live.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px" }}>
        {/* Left Column: Projects List */}
        <div className="admin-table-card">
          <div className="admin-table-head">
            <div className="table-title-box">
              <h3>Projets en Ligne ({projects.length})</h3>
              <p>Visibles dans la section /realisations</p>
            </div>
          </div>

          <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {projects.map((proj) => (
              <div
                key={proj.slug}
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
                      {proj.category} · {proj.client}
                    </span>
                    <h4 style={{ fontSize: "16px", fontWeight: "800", color: "#fff" }}>
                      {proj.title}
                    </h4>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Link
                      href={`/realisations/${proj.slug}`}
                      target="_blank"
                      className="admin-logout-btn"
                      title="Voir sur le site"
                    >
                      <ExternalLink size={16} />
                    </Link>

                    <form
                      action={async () => {
                        "use server";
                        await deleteProjectAction(proj.slug);
                      }}
                    >
                      <AdminDeleteButton
                        confirmMessage={`Supprimer le projet ${proj.title} ?`}
                        title="Supprimer ce projet"
                      />
                    </form>
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "#c0c7d2", marginBottom: "12px" }}>
                  {proj.summary}
                </p>

                {proj.metrics && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      fontSize: "12px",
                      color: "var(--adm-text-muted)",
                      borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                      paddingTop: "10px",
                    }}
                  >
                    {proj.metrics.map((m: { label: string; value: string }, idx: number) => (
                      <span key={idx}>📊 {m.label} : <strong style={{ color: "#fff" }}>{m.value}</strong></span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Add Project Form */}
        <div className="admin-table-card" style={{ padding: "28px" }}>
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "20px" }}>
            Ajouter une Réalisation
          </h3>

          <form
            action={async (formData: FormData) => {
              "use server";
              const title = formData.get("title")?.toString().trim() || "";
              const client = formData.get("client")?.toString().trim() || "";
              const category = (formData.get("category")?.toString().trim() || "Conference") as "Conference" | "Live" | "Corporate" | "Plateau";
              const summary = formData.get("summary")?.toString().trim() || "";
              const viewers = formData.get("viewers")?.toString().trim() || "10 000+";
              const cameras = formData.get("cameras")?.toString().trim() || "4 flux 4K";
              const duration = formData.get("duration")?.toString().trim() || "3 heures";

              const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");

              await createProjectAction({
                id: `proj-${Date.now()}`,
                slug,
                title,
                client,
                category,
                year: new Date().getFullYear().toString(),
                summary,
                description: summary,
                image: "/images/hero-cameraman.png",
                metrics: [
                  { label: "Spectateurs", value: viewers },
                  { label: "Caméras", value: cameras },
                  { label: "Durée", value: duration },
                ],
                deliverables: ["Flux live 4K", "Aftermovie express", "Replay multipiste"],
                techSetup: ["Régie mobile 8 entrées", "Starlink", "Caméras 4K"],
              });
            }}
          >
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="title">
                Titre de l'événement
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="Ex : Gala des Bâtisseurs Africains 2026"
                className="admin-input"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="client">
                  Client / Organisateur
                </label>
                <input
                  id="client"
                  name="client"
                  type="text"
                  required
                  placeholder="Ex : Groupe Horizon"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="category">
                  Catégorie
                </label>
                <select id="category" name="category" className="admin-select">
                  <option value="Conférence">Conférence & Sommet</option>
                  <option value="Talk-Show">Plateau & Talk-Show</option>
                  <option value="Concert">Concert & Musique</option>
                  <option value="Corporate">Corporate & Lancement</option>
                </select>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="viewers">
                  Spectateurs
                </label>
                <input
                  id="viewers"
                  name="viewers"
                  type="text"
                  defaultValue="15 000+"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="cameras">
                  Caméras
                </label>
                <input
                  id="cameras"
                  name="cameras"
                  type="text"
                  defaultValue="6 flux 4K"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="duration">
                  Durée
                </label>
                <input
                  id="duration"
                  name="duration"
                  type="text"
                  defaultValue="4 heures"
                  className="admin-input"
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="summary">
                Résumé court
              </label>
              <textarea
                id="summary"
                name="summary"
                required
                rows={2}
                placeholder="Dispositif technique déployé et succès d'audience..."
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="context">
                Défi & Contexte
              </label>
              <textarea
                id="context"
                name="context"
                rows={2}
                placeholder="Exigences du client et contraintes de direct..."
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="solution">
                Solution déployée par OCD Live
              </label>
              <textarea
                id="solution"
                name="solution"
                rows={2}
                placeholder="Liaisons Starlink, caméras tourelles, régie mobile..."
                className="admin-textarea"
              />
            </div>

            <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%", padding: "14px" }}>
              <PlusCircle size={16} />
              <span>Publier la réalisation</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
