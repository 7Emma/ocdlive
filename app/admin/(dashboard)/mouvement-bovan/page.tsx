import { CheckCircle2 } from "lucide-react";

export const dynamic = "force-dynamic";
import { getAdminStore, saveAdminStore } from "@/lib/admin-store";
import { revalidatePath } from "next/cache";

export default async function AdminMouvementBovanPage() {
  const store = await getAdminStore();
  const videos = store.bovanVideos;
  const photos = store.youthPhotos;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}>
          Vidéos PDG Bovan & Galerie du Mouvement #OCD
        </h1>
        <p style={{ fontSize: "14px", color: "var(--adm-text-muted)" }}>
          Pilotez les masterclass de Bovan et la vitrine des jeunes bâtisseurs sur la page d'accueil.
        </p>
      </div>

      {/* Videos Section */}
      <div className="admin-table-card" style={{ marginBottom: "36px", padding: "28px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>
          🎥 Masterclass & Vidéos Phares de Bovan (Accueil)
        </h2>
        <p style={{ fontSize: "13px", color: "var(--adm-text-muted)", marginBottom: "24px" }}>
          Ces vidéos sont présentées en grand format 16:9 dans la section « #LesOpportunitesCestDehors · La Communauté ».
        </p>

        <form
          action={async (formData: FormData) => {
            "use server";
            const currentStore = await getAdminStore();
            const v1Title = formData.get("v1Title")?.toString() || "";
            const v1Duration = formData.get("v1Duration")?.toString() || "16:42";
            const v1Views = formData.get("v1Views")?.toString() || "640K";
            const v1Url = formData.get("v1Url")?.toString() || "";

            const v2Title = formData.get("v2Title")?.toString() || "";
            const v2Duration = formData.get("v2Duration")?.toString() || "12:15";
            const v2Views = formData.get("v2Views")?.toString() || "310K";

            const v3Title = formData.get("v3Title")?.toString() || "";
            const v3Duration = formData.get("v3Duration")?.toString() || "18:50";
            const v3Views = formData.get("v3Views")?.toString() || "480K";

            if (currentStore.bovanVideos[0]) {
              currentStore.bovanVideos[0].title = v1Title;
              currentStore.bovanVideos[0].duration = v1Duration;
              currentStore.bovanVideos[0].views = v1Views;
              currentStore.bovanVideos[0].youtubeUrl = v1Url;
            }
            if (currentStore.bovanVideos[1]) {
              currentStore.bovanVideos[1].title = v2Title;
              currentStore.bovanVideos[1].duration = v2Duration;
              currentStore.bovanVideos[1].views = v2Views;
            }
            if (currentStore.bovanVideos[2]) {
              currentStore.bovanVideos[2].title = v3Title;
              currentStore.bovanVideos[2].duration = v3Duration;
              currentStore.bovanVideos[2].views = v3Views;
            }

            await saveAdminStore(currentStore);
            revalidatePath("/", "layout");
          }}
        >
          {/* Main Video (Grande vidéo) */}
          <div
            style={{
              padding: "20px",
              borderRadius: "14px",
              background: "var(--adm-surface-elevated)",
              border: "1px solid rgba(255, 85, 0, 0.3)",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  background: "var(--adm-orange)",
                  color: "#fff",
                }}
              >
                Vidéo Principale (Grand Format 16:9)
              </span>
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Titre de la masterclass</label>
              <input
                name="v1Title"
                type="text"
                defaultValue={videos[0]?.title}
                className="admin-input"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "14px" }}>
              <div className="admin-form-group">
                <label className="admin-label">Lien / URL YouTube</label>
                <input
                  name="v1Url"
                  type="url"
                  defaultValue={videos[0]?.youtubeUrl}
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Durée</label>
                <input
                  name="v1Duration"
                  type="text"
                  defaultValue={videos[0]?.duration}
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Nombre de vues affiché</label>
                <input
                  name="v1Views"
                  type="text"
                  defaultValue={videos[0]?.views}
                  className="admin-input"
                />
              </div>
            </div>
          </div>

          {/* Secondary Videos */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
            <div
              style={{
                padding: "16px",
                borderRadius: "12px",
                background: "var(--adm-surface-elevated)",
                border: "1px solid var(--adm-border)",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "10px", color: "var(--adm-orange)" }}>
                Vidéo Secondaire #1
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Titre</label>
                <input
                  name="v2Title"
                  type="text"
                  defaultValue={videos[1]?.title}
                  className="admin-input"
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label className="admin-label">Durée</label>
                  <input
                    name="v2Duration"
                    type="text"
                    defaultValue={videos[1]?.duration}
                    className="admin-input"
                  />
                </div>
                <div>
                  <label className="admin-label">Vues</label>
                  <input
                    name="v2Views"
                    type="text"
                    defaultValue={videos[1]?.views}
                    className="admin-input"
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "16px",
                borderRadius: "12px",
                background: "var(--adm-surface-elevated)",
                border: "1px solid var(--adm-border)",
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "10px", color: "var(--adm-orange)" }}>
                Vidéo Secondaire #2
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Titre</label>
                <input
                  name="v3Title"
                  type="text"
                  defaultValue={videos[2]?.title}
                  className="admin-input"
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label className="admin-label">Durée</label>
                  <input
                    name="v3Duration"
                    type="text"
                    defaultValue={videos[2]?.duration}
                    className="admin-input"
                  />
                </div>
                <div>
                  <label className="admin-label">Vues</label>
                  <input
                    name="v3Views"
                    type="text"
                    defaultValue={videos[2]?.views}
                    className="admin-input"
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="admin-btn admin-btn-primary">
            <CheckCircle2 size={16} />
            <span>Enregistrer les Vidéos Bovan</span>
          </button>
        </form>
      </div>

      {/* Youth Movement Photos */}
      <div className="admin-table-card" style={{ padding: "28px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>
          📸 Galerie Terrain des Jeunes du Mouvement #OCD
        </h2>
        <p style={{ fontSize: "13px", color: "var(--adm-text-muted)", marginBottom: "24px" }}>
          Aperçu des 4 portraits de terrain mis en valeur sur l'accueil :
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {photos.map((item) => (
            <div
              key={item.id}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                background: "var(--adm-surface-elevated)",
                border: "1px solid var(--adm-border)",
              }}
            >
              <div
                style={{
                  height: "140px",
                  background: `url(${item.image}) center/cover no-repeat`,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    background: "rgba(0,0,0,0.7)",
                    color: "var(--adm-orange)",
                    fontSize: "11px",
                    fontWeight: 800,
                  }}
                >
                  {item.hashtag}
                </span>
              </div>

              <div style={{ padding: "14px" }}>
                <div style={{ fontWeight: 800, fontSize: "13px", color: "#fff", marginBottom: "4px" }}>
                  {item.title} · {item.role}
                </div>
                <div style={{ fontSize: "11.5px", color: "var(--adm-text-muted)" }}>
                  📍 {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
