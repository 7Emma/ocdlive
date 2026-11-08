import {
  MessageSquare,
  Trash2,
} from "lucide-react";

export const instant = false;
import { getReservations, type ReservationStatus } from "@/lib/admin-store";
import { updateReservationStatusAction, deleteReservationAction } from "@/app/actions/admin";

export default async function AdminReservationsPage() {
  const reservations = await getReservations();
  const formatFcfa = (n: number) => `${n.toLocaleString("fr-FR")} FCFA`;

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "28px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "900", marginBottom: "6px" }}>
            Devis & Réservations de Lives
          </h1>
          <p style={{ fontSize: "14px", color: "var(--adm-text-muted)" }}>
            Gestion centralisée des demandes de captation, suivi commercial et planning des 4 lives/jour.
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              padding: "8px 16px",
              borderRadius: "10px",
              background: "var(--adm-surface)",
              border: "1px solid var(--adm-border)",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Total : <span style={{ color: "var(--adm-orange)" }}>{reservations.length} demandes</span>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="admin-table-card">
        <div className="admin-table-head">
          <div className="table-title-box">
            <h3>Toutes les demandes de réservation</h3>
            <p>Classées par date de réception décroissante</p>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Réf. / Date</th>
                <th>Client & Contact</th>
                <th>Détails du Live</th>
                <th>Date & Lieu</th>
                <th>Budget Estimé</th>
                <th>Statut</th>
                <th>Actions Régie</th>
              </tr>
            </thead>
            <tbody>
              {reservations.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", padding: "40px" }}>
                    Aucune réservation enregistrée pour le moment.
                  </td>
                </tr>
              ) : (
                reservations.map((res) => {
                  const cleanPhone = res.phone.replace(/[^0-9]/g, "");
                  const waLink = `https://wa.me/${cleanPhone}?text=Bonjour%20${encodeURIComponent(
                    res.fullName
                  )},%20l'équipe%20OCD%20Live%20revient%20vers%20vous%20concernant%20votre%20demande%20de%20live%20référence%20${
                    res.ref
                  }.`;

                  return (
                    <tr key={res.id}>
                      {/* Ref & Date */}
                      <td>
                        <div style={{ fontWeight: 800, color: "var(--adm-orange)", fontSize: "14px" }}>
                          {res.ref}
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--adm-text-muted)", marginTop: "2px" }}>
                          {new Date(res.createdAt).toLocaleDateString("fr-FR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                      </td>

                      {/* Client */}
                      <td>
                        <div style={{ fontWeight: 700, fontSize: "14px" }}>{res.fullName}</div>
                        {res.organization && (
                          <div style={{ fontSize: "12px", color: "#c0c7d2" }}>
                            {res.organization}
                          </div>
                        )}
                        <div style={{ fontSize: "12px", color: "#60a5fa", marginTop: "2px" }}>
                          {res.phone}
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--adm-text-muted)" }}>
                          {res.email}
                        </div>
                      </td>

                      {/* Live details */}
                      <td>
                        <div style={{ fontWeight: 700, color: "#fff" }}>{res.selectedOffer}</div>
                        <div style={{ fontSize: "12px", color: "var(--adm-orange)" }}>
                          {res.liveFormat}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "var(--adm-text-muted)",
                            marginTop: "4px",
                            maxWidth: "260px",
                            whiteSpace: "normal",
                            lineHeight: "1.3",
                          }}
                        >
                          « {res.message.slice(0, 80)}... »
                        </div>
                      </td>

                      {/* Date & Location */}
                      <td>
                        <div style={{ fontWeight: 800 }}>📅 {res.eventDate}</div>
                        <div style={{ fontSize: "12px", color: "var(--adm-text-muted)", marginTop: "2px" }}>
                          ⏰ {res.assignedSlotLabel || res.selectedSlot}
                        </div>
                        <div style={{ fontSize: "12px", color: "#c0c7d2", marginTop: "4px" }}>
                          📍 {res.eventLocation}
                        </div>
                      </td>

                      {/* Budget */}
                      <td>
                        <div style={{ fontWeight: 800, fontSize: "14px" }}>
                          {res.budgetEstimated ? formatFcfa(res.budgetEstimated) : "Sur devis"}
                        </div>
                      </td>

                      {/* Status */}
                      <td>
                        <span className={`status-badge status-${res.status.toLowerCase()}`}>
                          {res.status.replace("_", " ")}
                        </span>
                      </td>

                      {/* Actions */}
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

                          {/* Quick status change form */}
                          <form
                            action={async (formData: FormData) => {
                              "use server";
                              const nextStatus = formData.get("status") as ReservationStatus;
                              await updateReservationStatusAction(res.id, nextStatus);
                            }}
                          >
                            <select
                              name="status"
                              defaultValue={res.status}
                              className="admin-select"
                              style={{ padding: "4px 8px", fontSize: "11.5px", height: "auto" }}
                              onChange={(e) => e.target.form?.requestSubmit()}
                            >
                              <option value="NOUVEAU">Nouveau</option>
                              <option value="DEVIS_ENVOYE">Devis envoyé</option>
                              <option value="CONFIRME">Confirmé (Acompte OK)</option>
                              <option value="TERMINE">Terminé</option>
                              <option value="ANNULE">Annulé</option>
                            </select>
                          </form>

                          {/* Delete */}
                          <form
                            action={async () => {
                              "use server";
                              await deleteReservationAction(res.id);
                            }}
                          >
                            <button
                              type="submit"
                              className="admin-btn admin-btn-danger admin-btn-sm"
                              style={{ width: "100%", justifyContent: "center" }}
                              onClick={(e) => {
                                if (!confirm("Supprimer cette réservation ?")) {
                                  e.preventDefault();
                                }
                              }}
                            >
                              <Trash2 size={12} />
                              <span>Supprimer</span>
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
