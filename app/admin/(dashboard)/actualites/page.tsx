import Link from "next/link";

export const instant = false;
import { PlusCircle, Trash2, ExternalLink } from "lucide-react";
import { getAdminStore } from "@/lib/admin-store";
import { createArticleAction, deleteArticleAction } from "@/app/actions/admin";

export default async function AdminActualitesPage() {
  const store = await getAdminStore();
  const articles = store.articles;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}>
          Actualités & Communiqués de Presse
        </h1>
        <p style={{ fontSize: "14px", color: "var(--adm-text-muted)" }}>
          Rédigez et publiez les actualités de la régie OCD Live et les échos du mouvement #OCD.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px" }}>
        {/* Left Column: Articles List */}
        <div className="admin-table-card">
          <div className="admin-table-head">
            <div className="table-title-box">
              <h3>Articles Publiés ({articles.length})</h3>
              <p>Visibles dans la rubrique /actualites</p>
            </div>
          </div>

          <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {articles.map((art) => (
              <div
                key={art.slug}
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
                      {art.category} · {art.readTime}
                    </span>
                    <h4 style={{ fontSize: "16px", fontWeight: "800", color: "#fff" }}>
                      {art.title}
                    </h4>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Link
                      href={`/actualites/${art.slug}`}
                      target="_blank"
                      className="admin-logout-btn"
                      title="Lire l'article"
                    >
                      <ExternalLink size={16} />
                    </Link>

                    <form
                      action={async () => {
                        "use server";
                        await deleteArticleAction(art.slug);
                      }}
                    >
                      <button
                        type="submit"
                        className="admin-logout-btn"
                        title="Supprimer cet article"
                        onClick={(e) => {
                          if (!confirm(`Supprimer l'article ${art.title} ?`)) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </form>
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "#c0c7d2", marginBottom: "12px" }}>
                  {art.excerpt}
                </p>

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
                  <span>📅 {art.date}</span>
                  <span>✍️ Rédaction OCD Live</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Add Article Form */}
        <div className="admin-table-card" style={{ padding: "28px" }}>
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "20px" }}>
            Publier un Nouvel Article
          </h3>

          <form
            action={async (formData: FormData) => {
              "use server";
              const title = formData.get("title")?.toString().trim() || "";
              const category = formData.get("category")?.toString().trim() || "Régie & Direct";
              const readTime = formData.get("readTime")?.toString().trim() || "4 min";
              const excerpt = formData.get("excerpt")?.toString().trim() || "";
              const content = formData.get("content")?.toString().trim() || "";

              const slug = title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");

              await createArticleAction({
                id: slug,
                slug,
                title,
                date: new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
                readTime,
                category,
                excerpt,
                content: content || excerpt,
                image: "/images/hero-cameraman.png",
              });
            }}
          >
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="title">
                Titre de l'article
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="Ex : Pourquoi le multi-caméras 4K transforme l'impact de vos directs"
                className="admin-input"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="category">
                  Catégorie
                </label>
                <select id="category" name="category" className="admin-select">
                  <option value="Régie & Direct">Régie & Direct</option>
                  <option value="Mouvement #OCD">Mouvement #OCD</option>
                  <option value="Coulisses Tournage">Coulisses Tournage</option>
                  <option value="Événements">Événements</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="author">
                  Auteur
                </label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  defaultValue="Bovan · Direction OCD Live"
                  className="admin-input"
                />
              </div>
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="readTime">
                Temps de lecture estimé
              </label>
              <input
                id="readTime"
                name="readTime"
                type="text"
                defaultValue="4 min"
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="excerpt">
                Chapô / Extrait court
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                required
                rows={2}
                placeholder="Résumé percutant qui s'affiche sur la carte..."
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label" htmlFor="content">
                Contenu de l'article
              </label>
              <textarea
                id="content"
                name="content"
                required
                rows={6}
                placeholder="Rédigez votre article complet ici..."
                className="admin-textarea"
              />
            </div>

            <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%", padding: "14px" }}>
              <PlusCircle size={16} />
              <span>Publier l'article</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
