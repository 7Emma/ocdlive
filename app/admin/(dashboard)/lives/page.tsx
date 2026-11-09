import { CheckCircle2, ExternalLink, Check, X, Trash2 } from "lucide-react";

export const dynamic = "force-dynamic";
import { getLiveBroadcast, getAdminStore } from "@/lib/admin-store";
import { updateLiveBroadcastAction } from "@/app/actions/admin";
import { moderateVendorLiveAction, deleteVendorLiveAction } from "@/app/actions/vendor-lives";
import { PANAFRICAN_COUNTRIES, REGIE_VALIDATION_SLOTS } from "@/lib/data";

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

      {/* =========================================================================
          SECTION 2 : MODÉRATION DES VENDEURS EN DIRECT D'AFRIQUE
          ========================================================================= */}
      <div className="admin-table-card" style={{ marginTop: "36px", padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
          <div>
            <h2 style={{ fontSize: "19px", fontWeight: "900", color: "#fff", display: "flex", alignItems: "center", gap: "10px", margin: "0 0 6px" }}>
              <span>🌍 Vendeurs en Direct d'Afrique à Modérer</span>
              <span style={{ fontSize: "12px", background: "rgba(243, 107, 11, 0.2)", color: "var(--adm-primary)", padding: "2px 10px", borderRadius: "50px" }}>
                {(store.vendorLives || []).length} lives enregistrés
              </span>
            </h2>
            <p style={{ fontSize: "13px", color: "var(--adm-text-muted)", margin: 0 }}>
              Vérifiez les streams des commerçants du Cameroun, Bénin, Togo, Côte d'Ivoire... selon vos 4 créneaux de validation quotidiens.
            </p>
          </div>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {REGIE_VALIDATION_SLOTS.map((slot) => (
              <span
                key={slot.id}
                style={{
                  fontSize: "11px",
                  background: "var(--adm-surface-elevated)",
                  border: "1px solid var(--adm-border)",
                  padding: "4px 10px",
                  borderRadius: "50px",
                  color: "#ddd",
                }}
              >
                ⏰ {slot.time}
              </span>
            ))}
          </div>
        </div>

        {/* Table des Vendeurs */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--adm-border)", color: "var(--adm-text-muted)" }}>
                <th style={{ padding: "12px 10px" }}>Boutique & Pays</th>
                <th style={{ padding: "12px 10px" }}>Vente & Produits</th>
                <th style={{ padding: "12px 10px" }}>Plateforme & Lien</th>
                <th style={{ padding: "12px 10px" }}>Créneau demandé</th>
                <th style={{ padding: "12px 10px" }}>Statut</th>
                <th style={{ padding: "12px 10px", textAlign: "right" }}>Actions Régie</th>
              </tr>
            </thead>
            <tbody>
              {(store.vendorLives || []).length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: "30px", textAlign: "center", color: "var(--adm-text-muted)" }}>
                    Aucun live de vendeur en attente.
                  </td>
                </tr>
              ) : (
                (store.vendorLives || []).map((live) => {
                  const countryObj = PANAFRICAN_COUNTRIES.find((c) => c.code === live.country);
                  return (
                    <tr
                      key={live.id}
                      style={{
                        borderBottom: "1px solid var(--adm-border)",
                        background: live.status === "PENDING" ? "rgba(243, 107, 11, 0.04)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "14px 10px" }}>
                        <div style={{ fontWeight: 800, color: "#fff" }}>
                          {countryObj?.flag} {live.vendorName}
                        </div>
                        <div style={{ fontSize: "11.5px", color: "var(--adm-text-muted)" }}>
                          {live.city} ({countryObj?.name || live.country})
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--adm-primary)", marginTop: "2px" }}>
                          📱 {live.whatsapp}
                        </div>
                      </td>

                      <td style={{ padding: "14px 10px", maxWidth: "260px" }}>
                        <div style={{ fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                          {live.title}
                        </div>
                        <div style={{ fontSize: "11.5px", color: "var(--adm-text-muted)" }}>
                          {live.productHighlights}
                        </div>
                      </td>

                      <td style={{ padding: "14px 10px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: "10.5px",
                            fontWeight: 800,
                            padding: "2px 8px",
                            borderRadius: "4px",
                            background: "var(--adm-surface-elevated)",
                            border: "1px solid var(--adm-border)",
                            color: "#fff",
                            marginBottom: "6px",
                          }}
                        >
                          {live.platform.toUpperCase()}
                        </span>
                        <div>
                          <a
                            href={live.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              color: "var(--adm-primary)",
                              fontSize: "11.5px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              textDecoration: "underline",
                            }}
                          >
                            <span>Tester le lien</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </td>

                      <td style={{ padding: "14px 10px" }}>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 800,
                            color: "#fff",
                            background: "rgba(255, 255, 255, 0.06)",
                            padding: "3px 8px",
                            borderRadius: "50px",
                          }}
                        >
                          {live.validationSlot || "Immédiat"}
                        </span>
                      </td>

                      <td style={{ padding: "14px 10px" }}>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 800,
                            padding: "3px 10px",
                            borderRadius: "50px",
                            background:
                              live.status === "APPROVED"
                                ? "rgba(34, 197, 94, 0.15)"
                                : live.status === "PENDING"
                                ? "rgba(243, 107, 11, 0.15)"
                                : live.status === "REJECTED"
                                ? "rgba(239, 68, 68, 0.15)"
                                : "rgba(255, 255, 255, 0.08)",
                            color:
                              live.status === "APPROVED"
                                ? "#4ade80"
                                : live.status === "PENDING"
                                ? "#fbbf24"
                                : live.status === "REJECTED"
                                ? "#f87171"
                                : "#888",
                            border: `1px solid ${
                              live.status === "APPROVED"
                                ? "rgba(34, 197, 94, 0.4)"
                                : live.status === "PENDING"
                                ? "rgba(243, 107, 11, 0.4)"
                                : live.status === "REJECTED"
                                ? "rgba(239, 68, 68, 0.4)"
                                : "rgba(255, 255, 255, 0.1)"
                            }`,
                          }}
                        >
                          ● {live.status === "APPROVED" ? "EN LIGNE (2H)" : live.status === "PENDING" ? "EN ATTENTE" : live.status === "REJECTED" ? "REJETÉ" : "TERMINÉ"}
                        </span>
                      </td>

                      <td style={{ padding: "14px 10px", textAlign: "right" }}>
                        <div style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                          {live.status !== "APPROVED" && (
                            <form
                              action={async () => {
                                "use server";
                                await moderateVendorLiveAction(live.id, "APPROVED");
                              }}
                            >
                              <button
                                type="submit"
                                title="Approuver et mettre en avant 2h"
                                style={{
                                  background: "#22c55e",
                                  border: "none",
                                  color: "#111",
                                  borderRadius: "6px",
                                  padding: "6px 10px",
                                  fontWeight: 800,
                                  fontSize: "11px",
                                  cursor: "pointer",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "4px",
                                }}
                              >
                                <Check size={13} />
                                <span>Valider</span>
                              </button>
                            </form>
                          )}

                          {live.status === "APPROVED" && (
                            <form
                              action={async () => {
                                "use server";
                                await moderateVendorLiveAction(live.id, "ENDED");
                              }}
                            >
                              <button
                                type="submit"
                                title="Marquer le live comme terminé"
                                style={{
                                  background: "rgba(255, 255, 255, 0.1)",
                                  border: "1px solid rgba(255, 255, 255, 0.2)",
                                  color: "#ccc",
                                  borderRadius: "6px",
                                  padding: "6px 10px",
                                  fontWeight: 700,
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                Terminer
                              </button>
                            </form>
                          )}

                          {live.status === "PENDING" && (
                            <form
                              action={async () => {
                                "use server";
                                await moderateVendorLiveAction(live.id, "REJECTED");
                              }}
                            >
                              <button
                                type="submit"
                                title="Rejeter le live"
                                style={{
                                  background: "rgba(239, 68, 68, 0.15)",
                                  border: "1px solid rgba(239, 68, 68, 0.3)",
                                  color: "#f87171",
                                  borderRadius: "6px",
                                  padding: "6px 8px",
                                  fontWeight: 700,
                                  fontSize: "11px",
                                  cursor: "pointer",
                                }}
                              >
                                <X size={13} />
                              </button>
                            </form>
                          )}

                          <form
                            action={async () => {
                              "use server";
                              await deleteVendorLiveAction(live.id);
                            }}
                          >
                            <button
                              type="submit"
                              title="Supprimer définitivement"
                              style={{
                                background: "transparent",
                                border: "none",
                                color: "#666",
                                padding: "6px",
                                cursor: "pointer",
                              }}
                            >
                              <Trash2 size={13} />
                            </button>
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
