import { CheckCircle2, ExternalLink } from "lucide-react";

export const dynamic = "force-dynamic";
import { getLiveBroadcast, getAdminStore } from "@/lib/admin-store";
import { updateLiveBroadcastAction } from "@/app/actions/admin";

export default async function AdminLivesPage() {
  const live = await getLiveBroadcast();
  const store = await getAdminStore();

  return (
    <div>
      {/* Page Title */}
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}>
          Régie & Diffusion Direct
        </h1>
        <p style={{ fontSize: "14px", color: "var(--adm-text-muted)" }}>
          Pilotez en temps réel le signal diffusé sur l’en-tête du site web public OCD Live.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px" }}>
        {/* Left Column: Form Controller */}
        <div className="admin-table-card" style={{ padding: "28px" }}>
          <h2 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "20px" }}>
            Configuration du Flux en Direct
          </h2>

          <form action={updateLiveBroadcastAction}>
            {/* Live Toggle */}
            <div
              style={{
                padding: "18px 20px",
                borderRadius: "14px",
                background: live.isLive ? "rgba(239, 68, 68, 0.12)" : "var(--adm-surface-elevated)",
                border: `1px solid ${live.isLive ? "rgba(239, 68, 68, 0.4)" : "var(--adm-border)"}`,
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "4px" }}>
                  {live.isLive ? "SIGNAL EN DIRECT ACTIF" : "RÉGIE HORS-LIGNE"}
                </div>
                <div style={{ fontSize: "12.5px", color: "var(--adm-text-muted)" }}>
                  {live.isLive
                    ? "Le badge rouge clignotant et le titre sont actuellement visibles par tous les visiteurs."
                    : "Aucun live n'est actuellement diffusé sur le site public."}
                </div>
              </div>

              <label
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "52px",
                  height: "28px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  name="isLive"
                  defaultChecked={live.isLive}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: live.isLive ? "#ff3333" : "rgba(255, 255, 255, 0.2)",
                    borderRadius: "28px",
                    transition: "0.3s",
                  }}
                />
              </label>
            </div>

            {/* Stream Title */}
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="streamTitle">
                Titre de l'émission / de l'événement
              </label>
              <input
                id="streamTitle"
                name="streamTitle"
                type="text"
                required
                defaultValue={live.streamTitle}
                placeholder="Ex : Direct Régie OCD Live · Talk-Show #LesOpportunitesCestDehors"
                className="admin-input"
              />
            </div>

            {/* Platform & Channel */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="platform">
                  Plateforme de diffusion
                </label>
                <select
                  id="platform"
                  name="platform"
                  defaultValue={live.platform}
                  className="admin-select"
                >
                  <option value="youtube">YouTube Live</option>
                  <option value="tiktok">TikTok Live</option>
                  <option value="facebook">Facebook Live</option>
                  <option value="twitch">Twitch</option>
                  <option value="linkedin">LinkedIn Live</option>
                  <option value="multistream">Multistream (Multi-réseaux)</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="channelName">
                  Identifiant Chaîne / Page
                </label>
                <input
                  id="channelName"
                  name="channelName"
                  type="text"
                  defaultValue={live.channelName}
                  placeholder="@BovannYT"
                  className="admin-input"
                />
              </div>
            </div>

            {/* URL & Viewers */}
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: "16px" }}>
              <div className="admin-form-group">
                <label className="admin-label" htmlFor="streamUrl">
                  URL directe de la retransmission
                </label>
                <input
                  id="streamUrl"
                  name="streamUrl"
                  type="url"
                  required
                  defaultValue={live.streamUrl}
                  placeholder="https://www.youtube.com/@BovannYT/live"
                  className="admin-input"
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label" htmlFor="viewersCount">
                  Spectateurs en direct
                </label>
                <input
                  id="viewersCount"
                  name="viewersCount"
                  type="number"
                  defaultValue={live.viewersCount}
                  placeholder="1420"
                  className="admin-input"
                />
              </div>
            </div>

            {/* Scheduled Live Option */}
            <div className="admin-form-group">
              <label className="admin-label" htmlFor="scheduledTime">
                Horaire récurrent ou programmé
              </label>
              <input
                id="scheduledTime"
                name="scheduledTime"
                type="text"
                defaultValue={live.scheduledTime || "Tous les soirs à 19h00 GMT"}
                placeholder="Ex : Prochain direct demain à 19h00 GMT"
                className="admin-input"
              />
            </div>

            <div style={{ marginTop: "24px" }}>
              <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%", padding: "14px" }}>
                <CheckCircle2 size={16} />
                <span>Enregistrer & Actualiser le Signal</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Live Simulator & Quotas */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Live Bar Preview */}
          <div className="admin-table-card" style={{ padding: "24px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "12px" }}>
              Aperçu en direct sur le site web
            </h3>
            <p style={{ fontSize: "12.5px", color: "var(--adm-text-muted)", marginBottom: "16px" }}>
              Voici exactement comment vos visiteurs voient le bandeau supérieur de navigation :
            </p>

            <div
              style={{
                padding: "8px 14px",
                borderRadius: "10px",
                background: "#080a0e",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: live.isLive ? "rgba(255, 30, 30, 0.2)" : "rgba(255, 255, 255, 0.1)",
                    border: `1px solid ${live.isLive ? "rgba(255, 30, 30, 0.5)" : "rgba(255, 255, 255, 0.2)"}`,
                    color: live.isLive ? "#ff4444" : "#888",
                    padding: "2px 8px",
                    borderRadius: "20px",
                    fontSize: "10.5px",
                    fontWeight: 900,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: live.isLive ? "#ff3333" : "#888",
                    }}
                  />
                  {live.isLive ? "EN DIRECT" : "OFFLINE"}
                </span>

                <span style={{ fontSize: "11.5px", color: "#fff", fontWeight: 600 }}>
                  {live.streamTitle || "Titre du live"}
                </span>
              </div>

              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 700,
                  color: "var(--adm-orange)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Rejoindre le live →
              </span>
            </div>

            <div style={{ marginTop: "16px" }}>
              <a
                href={live.streamUrl}
                target="_blank"
                rel="noreferrer"
                className="admin-btn admin-btn-secondary admin-btn-sm"
                style={{ width: "100%" }}
              >
                <ExternalLink size={14} />
                <span>Tester le lien du stream ({live.platform})</span>
              </a>
            </div>
          </div>

          {/* Daily Slots Planning */}
          <div className="admin-table-card" style={{ padding: "24px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "12px" }}>
              Planning Quotidien de Régie
            </h3>
            <p style={{ fontSize: "12.5px", color: "var(--adm-text-muted)", marginBottom: "16px" }}>
              Attribution des 4 créneaux pour aujourd'hui :
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {store.dailySlots.map((slot, index) => {
                const isLiveSlot = live.isLive && index === 2;
                const isReservedSlot = index === 1;
                return (
                  <div
                    key={slot.id}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "var(--adm-surface-elevated)",
                      border: "1px solid var(--adm-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "13px" }}>{slot.hours}</div>
                      <div style={{ fontSize: "11px", color: "var(--adm-text-muted)" }}>
                        {slot.label}
                      </div>
                    </div>

                    <span
                      className={`slot-badge ${
                        isLiveSlot
                          ? "badge-live"
                          : isReservedSlot
                          ? "badge-reserved"
                          : "badge-available"
                      }`}
                    >
                      {isLiveSlot
                        ? "En Direct"
                        : isReservedSlot
                        ? "Réservé"
                        : "Libre"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
