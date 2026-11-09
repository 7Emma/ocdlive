"use client";

import { Suspense, useState, useTransition } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Clock,
  MessageSquare,
  ShieldCheck,
  Users,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import {
  PRICING_OFFERS,
  BUSINESS_ACTIVITIES,
  PAYMENT_METHODS,
  DAILY_LIVE_SLOTS,
} from "@/lib/data";
import { submitQuoteAction } from "@/app/actions/quote";
import AfricaMapGraphic from "@/components/AfricaMapGraphic";
import "./reservation.css";

const PACKS = PRICING_OFFERS.map((offer) => ({
  id: offer.id,
  slugAliases: [offer.slug, offer.id],
  title: offer.title,
  subtitle: offer.description,
  price: offer.price,
  rawPrice: offer.rawPrice,
  period: offer.period,
  isPopular: offer.isPopular,
  image:
    offer.id === "video-bovan"
      ? "/images/bovan-dg.jpg"
      : offer.id === "live-1h30"
        ? "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&auto=format&fit=crop&q=80"
        : offer.id === "live-4h"
          ? "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=80"
          : offer.id === "live-video-hoc"
            ? "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop&q=80"
            : offer.id === "double-video-media"
              ? "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop&q=80"
              : "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80",
  features: offer.included.slice(0, 2).join(" · "),
}));

function ReservationForm() {
  const searchParams = useSearchParams();

  // Query parameter parsing
  const paramOffre =
    searchParams.get("offre") || searchParams.get("pack") || "";
  const paramFormat = searchParams.get("format") || "";
  const paramActivite = searchParams.get("activite") || "";

  const initialPack =
    PACKS.find(
      (p) =>
        p.id === paramOffre || p.slugAliases.includes(paramOffre.toLowerCase()),
    )?.id || "live-1h30";

  const initialFormat = paramFormat === "distance" ? "distance" : "presentiel";

  const [selectedPack, setSelectedPack] = useState(initialPack);
  const [selectedActivity, setSelectedActivity] = useState(
    BUSINESS_ACTIVITIES.some((a) => a.id === paramActivite)
      ? paramActivite
      : "mode_vetements",
  );
  const [activityCustomDetails, setActivityCustomDetails] = useState("");
  const [selectedFormat, setSelectedFormat] = useState(initialFormat);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("slot-2");
  const [selectedPayment, setSelectedPayment] = useState("tmoney");

  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);

  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    ref: string;
    depositAmount: number;
    activityLabel: string;
    paymentLabel: string;
  } | null>(null);

  const activePackObj = PACKS.find((p) => p.id === selectedPack) || PACKS[0];
  const activeActivityObj =
    BUSINESS_ACTIVITIES.find((a) => a.id === selectedActivity) ||
    BUSINESS_ACTIVITIES[0];
  const activePaymentObj =
    PAYMENT_METHODS.find((p) => p.id === selectedPayment) || PAYMENT_METHODS[0];

  const calculatedDeposit =
    activePackObj.rawPrice <= 30000
      ? activePackObj.rawPrice
      : Math.round(activePackObj.rawPrice * 0.5);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("organization", organization);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("selectedOffer", selectedPack);
    formData.append("liveFormat", selectedFormat);
    formData.append("activityType", selectedActivity);
    formData.append("activityCustomDetails", activityCustomDetails);
    formData.append("paymentMethod", selectedPayment);
    formData.append("eventDate", selectedDate);
    formData.append("selectedSlot", selectedSlot);
    formData.append("eventLocation", location);
    formData.append("message", message);
    if (consent) formData.append("consent", "on");

    startTransition(async () => {
      try {
        const result = await submitQuoteAction(null, formData);
        if (result.success) {
          setSubmittedData({
            ref:
              result.reservationId || `OCD-${Date.now().toString().slice(-6)}`,
            depositAmount: result.depositAmountFcfa || calculatedDeposit,
            activityLabel: result.activityLabel || activeActivityObj.label,
            paymentLabel: result.paymentMethodLabel || activePaymentObj.label,
          });
          window.scrollTo({ top: 280, behavior: "smooth" });
        } else {
          setSubmitError(
            result.message || "Une erreur est survenue lors de la réservation.",
          );
        }
      } catch (err) {
        console.error("Booking error:", err);
        setSubmitError("Une erreur réseau est survenue. Veuillez réessayer.");
      }
    });
  };

  // WhatsApp click-to-chat payload
  const waMessage = submittedData
    ? `Bonjour l'équipe OCD Live ! Je viens d'enregistrer ma réservation sur le site :%0A- Réf : *#${submittedData.ref}*%0A- Pack : *${encodeURIComponent(activePackObj.title)}* (${encodeURIComponent(activePackObj.price)})%0A- Activité : *${encodeURIComponent(submittedData.activityLabel)}*%0A- Date : *${encodeURIComponent(selectedDate)}*%0A- Créneau : *${encodeURIComponent(DAILY_LIVE_SLOTS.find((s) => s.id === selectedSlot)?.hours || selectedSlot)}*%0A- Règlement acompte : *${encodeURIComponent(submittedData.paymentLabel)}*%0APouvez-vous me confirmer le créneau et la disponibilité ? Merci !`
    : "";

  return (
    <div className="reservation" id="reservation">
      {/* BARRE DE PROGRESSION */}
      <div
        className="reservation-progress"
        aria-label="Étapes de la réservation"
      >
        <button
          type="button"
          className={`reservation-step ${!submittedData ? "active" : "completed"}`}
          onClick={() => {
            document
              .getElementById("step-1")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>01</span>
          <small>Pack</small>
        </button>

        <div
          className={`reservation-progress-line ${selectedPack ? "filled" : ""}`}
        />

        <button
          type="button"
          className={`reservation-step ${selectedActivity ? "active" : ""}`}
          onClick={() => {
            document
              .getElementById("step-2")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>02</span>
          <small>Activité</small>
        </button>

        <div
          className={`reservation-progress-line ${selectedFormat ? "filled" : ""}`}
        />

        <button
          type="button"
          className={`reservation-step ${selectedFormat ? "active" : ""}`}
          onClick={() => {
            document
              .getElementById("step-3")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>03</span>
          <small>Format</small>
        </button>

        <div
          className={`reservation-progress-line ${selectedDate ? "filled" : ""}`}
        />

        <button
          type="button"
          className={`reservation-step ${selectedDate ? "active" : ""}`}
          onClick={() => {
            document
              .getElementById("step-4")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>04</span>
          <small>Planning</small>
        </button>

        <div
          className={`reservation-progress-line ${selectedPayment ? "filled" : ""}`}
        />

        <button
          type="button"
          className={`reservation-step ${selectedPayment ? "active" : ""}`}
          onClick={() => {
            document
              .getElementById("step-5")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>05</span>
          <small>Paiement</small>
        </button>

        <div
          className={`reservation-progress-line ${submittedData ? "filled" : ""}`}
        />

        <button
          type="button"
          className={`reservation-step ${submittedData ? "active" : ""}`}
          onClick={() => {
            document
              .getElementById("step-6")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>06</span>
          <small>Validation</small>
        </button>
      </div>

      {submittedData ? (
        <div className="reservation-success">
          <div className="reservation-success-icon">✓</div>
          <span
            style={{
              display: "inline-block",
              background: "rgba(243, 107, 11, 0.18)",
              color: "var(--orange)",
              padding: "4px 14px",
              borderRadius: "50px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "1px",
              marginBottom: "12px",
            }}
          >
            RÉSERVATION ENREGISTRÉE #{submittedData.ref}
          </span>
          <h2>Votre demande est transmise à la régie OCD Live !</h2>
          <p>
            Notre régisseur étudie immédiatement votre dossier parmi nos{" "}
            <strong>4 créneaux quotidiens stricts</strong>. Vous pouvez dès
            maintenant finaliser votre acompte par{" "}
            <strong>{submittedData.paymentLabel}</strong> ou nous contacter
            directement sur WhatsApp.
          </p>

          <div className="reservation-summary-card">
            <div className="reservation-summary-item">
              <span>Formule choisie :</span>
              <strong>
                {activePackObj.title} ({activePackObj.price})
              </strong>
            </div>
            <div className="reservation-summary-item">
              <span>Activité commerciale :</span>
              <strong style={{ color: "var(--orange)" }}>
                {activeActivityObj.icon} {submittedData.activityLabel}
              </strong>
            </div>
            <div className="reservation-summary-item">
              <span>Format d'intervention :</span>
              <strong>
                {selectedFormat === "presentiel"
                  ? "En présentiel (Équipe dans vos locaux ou Studio)"
                  : "À distance (Streaming web)"}
              </strong>
            </div>
            <div className="reservation-summary-item">
              <span>Date & Créneau :</span>
              <strong>
                📅 {selectedDate} (
                {DAILY_LIVE_SLOTS.find((s) => s.id === selectedSlot)?.hours ||
                  selectedSlot}
                )
              </strong>
            </div>
            <div className="reservation-summary-item">
              <span>Moyen de règlement retenu :</span>
              <strong>
                {activePaymentObj.icon} {submittedData.paymentLabel}
              </strong>
            </div>
            <div
              className="reservation-summary-item"
              style={{ borderBottom: "none", paddingTop: "6px" }}
            >
              <span>Acompte de verrouillage de créneau :</span>
              <strong style={{ color: "var(--orange)", fontSize: "16px" }}>
                {submittedData.depositAmount.toLocaleString("fr-FR")} FCFA
              </strong>
            </div>
          </div>

          {/* Instructions de paiement pour l'acompte */}
          <div
            style={{
              background: "rgba(243, 107, 11, 0.1)",
              border: "1px dashed rgba(243, 107, 11, 0.4)",
              borderRadius: "16px",
              padding: "20px",
              maxWidth: "500px",
              margin: "0 auto 28px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <span style={{ fontSize: "20px" }}>{activePaymentObj.icon}</span>
              <strong style={{ color: "#fff", fontSize: "14px" }}>
                Instructions {activePaymentObj.label} :
              </strong>
            </div>
            <p
              style={{
                color: "#ccc",
                fontSize: "12.5px",
                margin: "0 0 10px 0",
                lineHeight: 1.5,
              }}
            >
              {activePaymentObj.instructions}
            </p>
            <div
              style={{
                background: "#0a0a0c",
                padding: "10px 14px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#888", fontSize: "12px" }}>
                Compte officiel :
              </span>
              <span
                style={{
                  color: "var(--orange)",
                  fontWeight: 900,
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                {activePaymentObj.accountNumber}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href={`https://wa.me/22890000000?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-cta-btn"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Finaliser et bloquer le créneau sur WhatsApp ↗</span>
            </a>

            <button
              type="button"
              className="btn outline"
              onClick={() => {
                setSubmittedData(null);
              }}
            >
              <RotateCcw className="w-4 h-4" /> Modifier ma réservation
            </button>

            <Link className="btn white" href="/">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          {submitError && (
            <div
              style={{
                background: "rgba(220, 38, 38, 0.15)",
                border: "1px solid rgba(220, 38, 38, 0.4)",
                color: "#fca5a5",
                borderRadius: "14px",
                padding: "16px 20px",
                marginBottom: "24px",
                fontSize: "13.5px",
              }}
            >
              ⚠️ {submitError}
            </div>
          )}

          {/* ÉTAPE 1 : CHOIX DE LA PRESTATION (6 PACKS PAIRS) */}
          <section className="form-section" id="step-1">
            <div className="section-title">
              <span className="number">01</span>
              <div>
                <h2>1. Choisissez votre formule audiovisuelle</h2>
                <p>
                  6 formules calibrées avec{" "}
                  <strong>
                    une équipe personnalisée dans vos locaux ou en studio
                  </strong>{" "}
                  à Lomé.
                </p>
              </div>
            </div>

            <div className="packs">
              {PACKS.map((pack) => {
                const isSelected = selectedPack === pack.id;
                return (
                  <label
                    key={pack.id}
                    className={`pack ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedPack(pack.id)}
                  >
                    <input
                      type="radio"
                      name="pack"
                      checked={isSelected}
                      onChange={() => setSelectedPack(pack.id)}
                    />
                    <img src={pack.image} alt={pack.title} />
                    {isSelected && <span className="check">✓</span>}
                    {pack.isPopular && (
                      <span
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          background: "var(--orange)",
                          color: "#170e08",
                          fontSize: "9px",
                          fontWeight: 900,
                          padding: "3px 10px",
                          borderRadius: "50px",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Populaire
                      </span>
                    )}
                    <div className="pack-info">
                      <h3>{pack.title}</h3>
                      <p>{pack.subtitle}</p>
                      <strong>{pack.price}</strong>
                    </div>
                  </label>
                );
              })}
            </div>
          </section>

          {/* ÉTAPE 2 : SÉLECTION DE L'ACTIVITÉ COMMERCIALE OU DU PRODUIT */}
          <section className="form-section" id="step-2">
            <div className="section-title">
              <span className="number">02</span>
              <div>
                <h2>
                  2. Quelle est votre activité commerciale ou vos produits ?
                </h2>
                <p>
                  Précisez votre domaine pour que l'équipe technique adapte les
                  plans caméras, la lumière et la mise en valeur.
                </p>
              </div>
            </div>

            <div className="activities-grid">
              {BUSINESS_ACTIVITIES.map((act) => {
                const isSelected = selectedActivity === act.id;
                return (
                  <label
                    key={act.id}
                    className={`activity-card ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedActivity(act.id)}
                  >
                    <input
                      type="radio"
                      name="activity"
                      checked={isSelected}
                      onChange={() => setSelectedActivity(act.id)}
                    />
                    <div className="activity-icon">{act.icon}</div>
                    <div className="activity-body">
                      <span className="activity-badge">{act.badge}</span>
                      <h3 className="activity-title">{act.label}</h3>
                      <p className="activity-desc">{act.description}</p>
                      <span className="activity-examples">
                        Exemples : {act.examples}
                      </span>
                    </div>
                    {isSelected && <span className="check">✓</span>}
                  </label>
                );
              })}
            </div>

            <div style={{ marginTop: "18px" }} className="field">
              <label htmlFor="activity-details">
                Précisions supplémentaires sur vos articles ou votre concept
                (optionnel) :
              </label>
              <input
                id="activity-details"
                type="text"
                placeholder="Ex: Arrivage de robes de soirée chics, gamme de savons éclaircissants bio, téléphones iPhone 15/16..."
                value={activityCustomDetails}
                onChange={(e) => setActivityCustomDetails(e.target.value)}
              />
            </div>
          </section>

          {/* ÉTAPE 3 : FORMAT D'INTERVENTION */}
          <section className="form-section" id="step-3">
            <div className="section-title">
              <span className="number">03</span>
              <div>
                <h2>3. Format du direct & Déploiement</h2>
                <p>
                  Où souhaitez-vous que nos caméras et nos équipes opèrent ?
                </p>
              </div>
            </div>

            <div className="formats">
              <label
                className={`format ${selectedFormat === "presentiel" ? "selected" : ""}`}
                onClick={() => setSelectedFormat("presentiel")}
              >
                <input
                  type="radio"
                  name="format"
                  checked={selectedFormat === "presentiel"}
                  onChange={() => setSelectedFormat("presentiel")}
                />
                <div>
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Users className="w-4 h-4 text-[#f36b0b]" /> En présentiel
                    (Dans vos locaux ou au Studio)
                  </h3>
                  <p>
                    Une équipe technique dédiée se déplace directement dans
                    votre boutique, entreprise ou lieu d'événement à Lomé, ou
                    accueil sur notre plateau.
                  </p>
                </div>
              </label>

              <label
                className={`format ${selectedFormat === "distance" ? "selected" : ""}`}
                onClick={() => setSelectedFormat("distance")}
              >
                <input
                  type="radio"
                  name="format"
                  checked={selectedFormat === "distance"}
                  onChange={() => setSelectedFormat("distance")}
                />
                <div>
                  <h3
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Clock className="w-4 h-4 text-[#f36b0b]" /> À distance
                    (Streaming hybride web)
                  </h3>
                  <p>
                    Gestion de flux vidéo à distance, duplex multi-intervenants
                    et retransmission simultanée sur vos pages.
                  </p>
                </div>
              </label>
            </div>
          </section>

          {/* ÉTAPE 4 : PLANIFICATION & CRÉNEAU HORAIRE (4/JOUR MAX) */}
          <section className="form-section" id="step-4">
            <div className="section-title">
              <span className="number">04</span>
              <div>
                <h2>4. Planification & Choix du créneau</h2>
                <p>
                  Capacité exclusive :{" "}
                  <strong>4 créneaux maximum par jour</strong> pour une qualité
                  broadcast irréprochable.
                </p>
              </div>
            </div>

            <div className="fields-grid-2">
              <div className="field">
                <label htmlFor="res-date">
                  Date souhaitée pour votre live *
                </label>
                <input
                  id="res-date"
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="field">
                <label htmlFor="res-slot">Créneau horaire souhaité *</label>
                <select
                  id="res-slot"
                  required
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                >
                  {DAILY_LIVE_SLOTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.hours} — {s.label} ({s.description})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="hint">
              <span>●</span> Limitation technique à 4 lives/jour : La
              réservation de votre créneau est vérifiée et priorisée selon
              l'ordre d'arrivée.
            </p>
          </section>

          {/* ÉTAPE 5 : MOYEN DE PAIEMENT POUR L'ACOMPTE */}
          <section className="form-section" id="step-5">
            <div className="section-title">
              <span className="number">05</span>
              <div>
                <h2>5. Choisissez votre moyen de paiement</h2>
                <p>
                  Pour bloquer votre créneau parmi les 4 du jour, un acompte est
                  requis via l'une de nos méthodes sécurisées.
                </p>
              </div>
            </div>

            <div
              className="deposit-info-banner"
              style={{ marginBottom: "20px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <ShieldCheck className="w-5 h-5 text-[#f36b0b]" />
                <div>
                  <strong
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    Acompte de confirmation :{" "}
                    {calculatedDeposit.toLocaleString("fr-FR")} FCFA
                  </strong>
                  <span style={{ color: "#aaa", fontSize: "12px" }}>
                    Garantit la mobilisation de l'équipe et du matériel pour
                    votre créneau. Reçu officiel délivré.
                  </span>
                </div>
              </div>
              <div
                style={{
                  color: "var(--orange)",
                  fontWeight: 800,
                  fontSize: "13px",
                }}
              >
                Paiement direct sécurisé
              </div>
            </div>

            <div className="payments-grid">
              {PAYMENT_METHODS.map((pm) => {
                const isSelected = selectedPayment === pm.id;
                return (
                  <label
                    key={pm.id}
                    className={`payment-card ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedPayment(pm.id)}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={isSelected}
                      onChange={() => setSelectedPayment(pm.id)}
                    />
                    <div>
                      <div className="payment-card-top">
                        <span style={{ fontSize: "24px" }}>{pm.icon}</span>
                        <span className="payment-badge">{pm.badge}</span>
                      </div>
                      <h3
                        style={{
                          font: "800 15px Manrope, sans-serif",
                          margin: "10px 0 4px",
                          color: "#fff",
                        }}
                      >
                        {pm.label}
                      </h3>
                      <p
                        style={{
                          color: "#aaa",
                          fontSize: "12px",
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {pm.tagline}
                      </p>
                    </div>

                    <div className="payment-account-box">
                      <span>Règlement :</span>
                      <span className="payment-account-number">
                        {pm.accountNumber}
                      </span>
                    </div>

                    {isSelected && <span className="check">✓</span>}
                  </label>
                );
              })}
            </div>
          </section>

          {/* ÉTAPE 6 : COORDONNÉES ET VALIDATION */}
          <section className="form-section" id="step-6">
            <div className="section-title">
              <span className="number">06</span>
              <div>
                <h2>6. Vos coordonnées & Adresse de tournage</h2>
                <p>
                  Informations indispensables pour que l'équipe vous contacte et
                  prépare le direct.
                </p>
              </div>
            </div>

            <div className="fields">
              <div className="fields-grid-2">
                <div className="field">
                  <label htmlFor="res-name">
                    Nom complet ou Nom de la Boutique / Marque *
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    placeholder="Ex: Koffi Mensah / Boutique Élégance Lomé"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="res-org">Société / Marque (optionnel)</label>
                  <input
                    id="res-org"
                    type="text"
                    placeholder="Ex: Mode & Style SARL"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </div>
              </div>

              <div className="fields-grid-2">
                <div className="field">
                  <label htmlFor="res-phone">
                    Numéro WhatsApp / Téléphone direct *
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    placeholder="Ex: +228 90 00 00 00"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="res-email">
                    Adresse e-mail professionnelle *
                  </label>
                  <input
                    id="res-email"
                    type="email"
                    placeholder="contact@boutique.tg"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="res-location">
                  Adresse exacte où installer l'équipe à Lomé (ou Studio OCD
                  Live) *
                </label>
                <input
                  id="res-location"
                  type="text"
                  placeholder="Ex: Boulevard du 13 Janvier, en face de la pharmacie / Quartier Agoè / Studio OCD"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="field">
                <label htmlFor="res-msg">
                  Besoins spécifiques pour votre vente ou votre direct
                </label>
                <textarea
                  id="res-msg"
                  rows={3}
                  placeholder="Objectif de vente, nombre d'articles à présenter, présence de mannequins, diffusion sur TikTok ou Facebook..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "12px",
                  color: "#aaa",
                  cursor: "pointer",
                  marginTop: "6px",
                }}
              >
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  style={{
                    accentColor: "var(--orange)",
                    width: "16px",
                    height: "16px",
                    marginTop: "2px",
                  }}
                />
                <span>
                  J'accepte d'être contacté(e) par l'administrateur OCD Live sur
                  WhatsApp pour valider la disponibilité du créneau et les
                  détails logistiques de l'équipe dans mes locaux.
                </span>
              </label>
            </div>
          </section>

          {/* VALIDATION */}
          <div className="submit-area">
            <button
              type="submit"
              disabled={isPending}
              className="btn orange"
              style={{ minWidth: "260px" }}
            >
              {isPending ? (
                "Validation en cours..."
              ) : (
                <>
                  Confirmer et Réserver mon direct{" "}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>

            <p>
              🔒 Réservation directe : aucun débit automatique sans votre
              accord.
            </p>
            <small>
              Votre demande est transmise en temps réel au régisseur d'OCD Live.
              Vous recevez un récapitulatif avec les coordonnées de transfert{" "}
              {activePaymentObj.label} pour valider le créneau de façon
              officielle.
            </small>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ReservationPage() {
  return (
    <main className="reservation-page-wrapper">
      {/* GRAPHISMES D'ARRIÈRE-PLAN SUR LES CÔTÉS */}
      <div className="bg-graphics-layer" aria-hidden="true">
        {/* Vague fluide orange côté gauche */}
        <svg
          className="bg-graphic-left"
          viewBox="0 0 240 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-40,20 C80,80 140,190 90,300 C65,355 5,390 -40,400"
            stroke="url(#bgOrangeGradL)"
            strokeWidth="38"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M-40,20 C80,80 140,190 90,300 C65,355 5,390 -40,400"
            stroke="#ff801a"
            strokeWidth="10"
            strokeLinecap="round"
            className="bg-graphic-stroke"
          />
          <defs>
            <linearGradient
              id="bgOrangeGradL"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f36b0b" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ff7b1a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f36b0b" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* SPOT 3 : Silhouette de l'Afrique en flanc lumineux côté droit */}
        <AfricaMapGraphic variant="flank" />
      </div>

      {/* HERO BANNER DE RÉSERVATION AVEC TRANSITION ASYMÉTRIQUE */}
      <section className="reservation-hero">
        <div className="hero-crescent-left" aria-hidden="true" />

        <div className="reservation-hero-content">
          <div className="reservation-breadcrumb">
            <Link href="/">Accueil</Link>
            <span>›</span>
            <span>Réservation & Planning</span>
          </div>

          <span className="eyebrow">
            <i /> RÉSERVATIONS EN DIRECT · LOMÉ (TOGO)
          </span>

          <h1>
            Réservez votre live avec <span>équipe dans vos locaux.</span>
          </h1>

          <p>
            Vente de vêtements, produits cosmétiques, street food ou événements
            : choisissez votre pack, votre activité commerciale et votre moyen
            de paiement sécurisé.
          </p>
        </div>

        <div className="hero-wave-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="hero-wave-svg"
          >
            <path
              d="M0,45 C320,110 520,115 880,55 C1150,15 1320,22 1440,25 L1440,120 L0,120 Z"
              fill="#080808"
            />
            <path
              d="M0,45 C320,110 520,115 880,55 C1150,15 1320,22 1440,25"
              stroke="#f36b0b"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="hero-wave-stroke"
            />
          </svg>
        </div>
      </section>

      {/* FORMULAIRE MULTI-ÉTAPES */}
      <Suspense
        fallback={
          <div
            className="container"
            style={{ padding: "80px 0", textAlign: "center" }}
          >
            Chargement du module de réservation...
          </div>
        }
      >
        <ReservationForm />
      </Suspense>
    </main>
  );
}
