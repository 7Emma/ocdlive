import Link from "next/link";
import AfricaMapGraphic from "@/components/AfricaMapGraphic";

export const instant = false;
import {
  Radio,
  CalendarCheck,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { getAdminStore, getLiveBroadcast, getReservations } from "@/lib/admin-store";
import { updateLiveBroadcastAction, updateReservationStatusAction } from "@/app/actions/admin";

export default async function AdminDashboardPage() {
  const store = await getAdminStore();
  const live = await getLiveBroadcast();
  const reservations = await getReservations();

  // Metrics
  const totalReservations = reservations.length;
  const pendingReservations = reservations.filter((r) => r.status === "NOUVEAU").length;
  const confirmedReservations = reservations.filter((r) => r.status === "CONFIRME").length;
  const totalRevenueEstimated = reservations
    .filter((r) => r.status === "CONFIRME" || r.status === "TERMINE")
    .reduce((sum, r) => sum + (r.budgetEstimated || 0), 0);

  const totalApplicants = store.applicants.length;
  const recentReservations = reservations.slice(0, 5);

  // Format currency FCFA
  const formatFcfa = (n: number) => `${n.toLocaleString("fr-FR")} FCFA`;

  return (
    <div>
      {/* 1. Live Broadcast Quick Controller Banner */}
      <div className="admin-broadcast-banner">
        <div className="broadcast-glow" />
        <div className="broadcast-info-box">
          <div className="broadcast-live-icon-wrap">
            <Radio size={28} />
          </div>
          <div className="broadcast-details">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  background: live.isLive ? "rgba(239, 68, 68, 0.2)" : "rgba(255, 255, 255, 0.1)",
                  color: live.isLive ? "#ff3333" : "var(--adm-text-muted)",
                }}
              >
                {live.isLive ? "● Signal Actif · En Direct" : "○ Régie Hors-Ligne"}
              </span>
              <span style={{ fontSize: "12px", color: "var(--adm-text-muted)" }}>
                Plateforme : <strong style={{ color: "#fff" }}>{live.platform.toUpperCase()}</strong>
              </span>
              {live.isLive && (
                <span style={{ fontSize: "12px", color: "var(--adm-orange)", fontWeight: 700 }}>
                  🔥 {live.viewersCount.toLocaleString()} spectateurs connectés
                </span>
              )}
            </div>
            <h3>{live.streamTitle || "Aucune émission configurée"}</h3>
            <p>
              Flux diffusé sur le bandeau supérieur de l'ensemble du site web public OCD Live.
            </p>
          </div>
        </div>

        <div className="broadcast-actions">
          {/* Quick toggle action */}
          <form action={updateLiveBroadcastAction}>
            <input type="hidden" name="isLive" value={live.isLive ? "false" : "true"} />
            <input type="hidden" name="streamTitle" value={live.streamTitle} />
            <input type="hidden" name="platform" value={live.platform} />
            <input type="hidden" name="streamUrl" value={live.streamUrl} />
            <input type="hidden" name="viewersCount" value={live.viewersCount.toString()} />
            <input type="hidden" name="channelName" value={live.channelName} />

            <button
              type="submit"
              className={`admin-btn ${live.isLive ? "admin-btn-danger" : "admin-btn-primary"}`}
              style={{ padding: "10px 20px" }}
            >
              <Radio size={16} />
              {live.isLive ? "Couper le Signal Direct" : "Lancer le Signal Direct"}
            </button>
          </form>

          <Link href="/admin/lives" className="admin-btn admin-btn-secondary">
            Paramètres Régie
          </Link>
        </div>
      </div>

      {/* 2. Key Metrics Grid */}
      <div className="admin-metrics-grid">
        <div className="admin-metric-card">
          <div className="metric-header">
            <span>Demandes en attente</span>
            <div className="metric-icon-box">
              <AlertCircle size={20} />
            </div>
          </div>
          <div className="metric-value">{pendingReservations}</div>
          <div className="metric-footer">
            <span style={{ color: pendingReservations > 0 ? "var(--adm-orange)" : "var(--adm-green)" }}>
              {pendingReservations > 0 ? "À traiter en priorité" : "Toutes les demandes traitées"}
            </span>
          </div>
        </div>

        <div className="admin-metric-card">
          <div className="metric-header">
            <span>Total Réservations</span>
            <div className="metric-icon-box">
              <CalendarCheck size={20} />
            </div>
          </div>
          <div className="metric-value">{totalReservations}</div>
          <div className="metric-footer">
            <span>{confirmedReservations} confirmées ou terminées</span>
          </div>
        </div>

        <div className="admin-metric-card">
          <div className="metric-header">
            <span>Chiffre d'Affaires Confirmé</span>
            <div className="metric-icon-box">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="metric-value" style={{ fontSize: "22px" }}>
            {formatFcfa(totalRevenueEstimated)}
          </div>
          <div className="metric-footer">
            <span>Prestations régie & captation</span>
          </div>
        </div>

        <div className="admin-metric-card">
          <div className="metric-header">
            <span>Candidatures Jeunes #OCD</span>
            <div className="metric-icon-box">
              <Briefcase size={20} />
            </div>
          </div>
          <div className="metric-value">{totalApplicants}</div>
          <div className="metric-footer">
            <span>Talents motivés pour le terrain</span>
          </div>
        </div>
      </div>

      {/* 3. 4 Daily Slots Status Widget & Panafrican Coverage */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
          marginBottom: "32px",
        }}
      >
        <div className="admin-slots-widget" style={{ marginBottom: 0, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="slots-widget-head">
              <div>
                <h3>Disponibilité Quotidienne de la Régie (Règle des 4 Lives / Jour)</h3>
                <p style={{ fontSize: "13px", color: "var(--adm-text-muted)", marginTop: "2px" }}>
                  Pour garantir une retransmission 4K sans compromis, OCD Live limite strictement sa régie à 4 lives par 24h.
                </p>
              </div>
              <div style={{ fontSize: "12px", color: "var(--adm-orange)", fontWeight: 700 }}>
                {new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </div>
            </div>

            <div className="slots-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
              {store.dailySlots.map((slot, index) => {
                const isLiveNow = live.isLive && index === 2;
                const isReserved = index === 1;
                return (
                  <div
                    key={slot.id}
                    className={`slot-card ${isLiveNow ? "live-now" : isReserved ? "reserved" : ""}`}
                  >
                    <div className="slot-header">
                      <span style={{ color: "var(--adm-text-muted)", fontSize: "11px" }}>Créneau #{index + 1}</span>
                      <span
                        className={`slot-badge ${
                          isLiveNow
                            ? "badge-live"
                            : isReserved
                            ? "badge-reserved"
                            : "badge-available"
                        }`}
                      >
                        {isLiveNow ? "En direct" : isReserved ? "Réservé" : "Disponible"}
                      </span>
                    </div>
                    <div className="slot-time" style={{ fontSize: "14px" }}>{slot.hours}</div>
                    <div className="slot-client-info" style={{ fontSize: "12px" }}>
                      {slot.label}
                      <div style={{ marginTop: "4px", fontSize: "10px", color: "var(--adm-text-muted)" }}>
                        {slot.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SPOT 6 : CARTE D'AFRIQUE & HUB DE DIFFUSION LOMÉ */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AfricaMapGraphic
            variant="admin"
            style={{
              maxWidth: "100%",
              height: "100%",
              minHeight: "260px",
            }}
          />
        </div>
      </div>

      {/* 4. Recent Booking Requests Table */}
      <div className="admin-table-card">
        <div className="admin-table-head">
          <div className="table-title-box">
            <h3>Dernières Demandes de Devis & Réservations</h3>
            <p>Demandes reçues en temps réel depuis le formulaire du site public</p>
          </div>
          <Link href="/admin/reservations" className="admin-btn admin-btn-secondary admin-btn-sm">
            <span>Voir toutes les réservations ({totalReservations})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Réf & Date</th>
                <th>Client / Contact</th>
                <th>Activité & Produits</th>
                <th>Offre & Format</th>
                <th>Créneau</th>
                <th>Paiement & Montant</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentReservations.map((res) => {
                const cleanPhone = res.phone.replace(/[^0-9]/g, "");
                const waText = `Bonjour ${res.fullName}, l'équipe OCD Live vous contacte pour votre réservation #${res.ref} (${res.selectedOffer} - Activité : ${res.activityLabel || "Vente"}).`;
                const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waText)}`;

                return (
                  <tr key={res.id}>
                    <td>
                      <div style={{ fontWeight: 800, color: "var(--adm-orange)" }}>{res.ref}</div>
                      <div style={{ fontSize: "11.5px", color: "var(--adm-text-muted)" }}>
                        {new Date(res.createdAt).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>

                    <td>
                      <div style={{ fontWeight: 700 }}>{res.fullName}</div>
                      {res.organization && (
                        <div style={{ fontSize: "12px", color: "var(--adm-text-muted)" }}>
                          {res.organization}
                        </div>
                      )}
                      <div style={{ fontSize: "12px", color: "#60a5fa" }}>{res.phone}</div>
                    </td>

                    <td>
                      <div
                        style={{
                          display: "inline-block",
                          background: "rgba(243, 107, 11, 0.15)",
                          color: "var(--adm-orange)",
                          border: "1px solid rgba(243, 107, 11, 0.3)",
                          borderRadius: "50px",
                          padding: "2px 8px",
                          fontSize: "11px",
                          fontWeight: 700,
                        }}
                      >
                        {res.activityLabel || "Vente & Commerce"}
                      </div>
                    </td>

                    <td>
                      <div style={{ fontWeight: 600 }}>{res.selectedOffer}</div>
                      <div style={{ fontSize: "11.5px", color: "var(--adm-text-muted)" }}>
                        {res.liveFormat}
                      </div>
                    </td>

                    <td>
                      <div style={{ fontWeight: 700 }}>{res.eventDate}</div>
                      <div style={{ fontSize: "12px", color: "var(--adm-orange)" }}>
                        {res.assignedSlotLabel || res.selectedSlot}
                      </div>
                    </td>

                    <td>
                      <div style={{ fontWeight: 800 }}>
                        {res.budgetEstimated ? formatFcfa(res.budgetEstimated) : "Sur devis"}
                      </div>
                      <div style={{ fontSize: "11px", color: "#aaa" }}>
                        {res.paymentMethodLabel || res.paymentMethod || "T-Money"}
                      </div>
                    </td>

                    <td>
                      <span className={`status-badge status-${res.status.toLowerCase()}`}>
                        {res.status.replace("_", " ")}
                      </span>
                    </td>

                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                          className="admin-btn admin-btn-whatsapp admin-btn-sm"
                          title="Ouvrir WhatsApp"
                        >
                          <MessageSquare size={13} />
                          <span>WhatsApp</span>
                        </a>

                        {res.status === "NOUVEAU" && (
                          <form
                            action={async () => {
                              "use server";
                              await updateReservationStatusAction(res.id, "DEVIS_ENVOYE");
                            }}
                          >
                            <button
                              type="submit"
                              className="admin-btn admin-btn-secondary admin-btn-sm"
                              title="Marquer Devis envoyé"
                            >
                              <CheckCircle2 size={13} color="var(--adm-orange)" />
                              <span>Devis envoyé</span>
                            </button>
                          </form>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
