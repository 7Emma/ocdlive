"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./reservation.css";

const PACKS = [
  {
    id: "pack-1h30",
    slugAliases: ["decouverte", "pack-1h30", "1h30"],
    title: "Pack Découverte",
    subtitle: "1h30 de prestation live",
    price: "15 000 FCFA",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&auto=format&fit=crop&q=80",
    features: "Régie mobile, 1 cadreur, diffusion HD",
  },
  {
    id: "pack-4h",
    slugAliases: ["evenement", "pack-4h", "4h"],
    title: "Pack Événement",
    subtitle: "Jusqu'à 4h de direct continu",
    price: "50 000 FCFA",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=80",
    features: "Multicaméra 2 flux, régisseur dédié",
  },
  {
    id: "live-direct",
    slugAliases: ["production", "live-direct", "plateau"],
    title: "Pack Production",
    subtitle: "Production & régie 4K complète",
    price: "100 000 FCFA",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop&q=80",
    features: "Plateau studio ou extérieur, mixage son",
  },
  {
    id: "sur-mesure",
    slugAliases: ["sur-mesure", "custom", "page-bovan"],
    title: "Prestation sur mesure",
    subtitle: "Cadrage technique personnalisé",
    price: "Devis personnalisé",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop&q=80",
    features: "Conférence, sommet, diffusion multicanale",
  },
];

const SLOTS = [
  { id: "matin", label: "Matin — 08h00 à 10h00", desc: "Créneau 1 / 4" },
  { id: "midi", label: "Midi — 11h30 à 13h30", desc: "Créneau 2 / 4" },
  { id: "apres-midi", label: "Après-midi — 14h00 à 16h00", desc: "Créneau 3 / 4" },
  { id: "soiree", label: "Soirée — 17h00 à 19h00", desc: "Créneau 4 / 4" },
];

function ReservationForm() {
  const searchParams = useSearchParams();

  // Query parameter parsing
  const paramOffre = searchParams.get("offre") || searchParams.get("pack") || "";
  const paramFormat = searchParams.get("format") || "";

  const initialPack =
    PACKS.find(
      (p) =>
        p.id === paramOffre ||
        p.slugAliases.includes(paramOffre.toLowerCase())
    )?.id || "pack-1h30";

  const initialFormat =
    paramFormat === "distance" ? "distance" : "presentiel";

  const [selectedPack, setSelectedPack] = useState(initialPack);
  const [selectedFormat, setSelectedFormat] = useState(initialFormat);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activePackObj = PACKS.find((p) => p.id === selectedPack) || PACKS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate direct admin booking transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 700);
  };

  return (
    <div className="reservation" id="reservation">
      {/* PROGRESSION */}
      <div className="reservation-progress" aria-label="Étapes de la réservation">
        <button
          type="button"
          className={`reservation-step ${!isSubmitted ? "active" : "completed"}`}
          onClick={() => {
            document.getElementById("step-1")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>01</span>
          <small>Prestation</small>
        </button>

        <div className={`reservation-progress-line ${selectedPack ? "filled" : ""}`} />

        <button
          type="button"
          className={`reservation-step ${selectedPack ? "active" : ""}`}
          onClick={() => {
            document.getElementById("step-2")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>02</span>
          <small>Configuration</small>
        </button>

        <div className={`reservation-progress-line ${selectedDate && selectedSlot ? "filled" : ""}`} />

        <button
          type="button"
          className={`reservation-step ${selectedDate && selectedSlot ? "active" : ""}`}
          onClick={() => {
            document.getElementById("step-3")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>03</span>
          <small>Planification</small>
        </button>

        <div className={`reservation-progress-line ${name && phone && email ? "filled" : ""}`} />

        <button
          type="button"
          className={`reservation-step ${isSubmitted ? "active" : ""}`}
          onClick={() => {
            document.getElementById("step-4")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>04</span>
          <small>Confirmation</small>
        </button>
      </div>

      {isSubmitted ? (
        <div className="reservation-success">
          <div className="reservation-success-icon">✓</div>
          <h2>Votre demande de réservation est bien reçue !</h2>
          <p>
            Notre régisseur général a reçu votre dossier et étudie la
            disponibilité parmi nos <strong>4 créneaux quotidiens</strong>. Vous
            recevrez une confirmation officielle par e-mail et appel sous 24h.
          </p>

          <div className="reservation-summary-card">
            <div className="reservation-summary-item">
              <span>Formule choisie :</span>
              <strong>{activePackObj.title} ({activePackObj.price})</strong>
            </div>
            <div className="reservation-summary-item">
              <span>Format du direct :</span>
              <strong>{selectedFormat === "presentiel" ? "En présentiel (Sur le terrain)" : "À distance (Streaming web)"}</strong>
            </div>
            {selectedDate && (
              <div className="reservation-summary-item">
                <span>Date souhaitée :</span>
                <strong>{selectedDate}</strong>
              </div>
            )}
            {selectedSlot && (
              <div className="reservation-summary-item">
                <span>Créneau horaire :</span>
                <strong>{SLOTS.find((s) => s.id === selectedSlot)?.label || selectedSlot}</strong>
              </div>
            )}
            <div className="reservation-summary-item">
              <span>Client :</span>
              <strong>{name} ({phone})</strong>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              className="btn orange"
              onClick={() => {
                setIsSubmitted(false);
              }}
            >
              Modifier la demande
            </button>
            <Link className="btn outline" href="/">
              Retourner à l'accueil
            </Link>
          </div>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          {/* ÉTAPE 1 : CHOIX DE LA PRESTATION */}
          <section className="form-section" id="step-1">
            <div className="section-title">
              <span className="number">01</span>
              <div>
                <h2>Choisissez votre prestation</h2>
                <p>Sélectionnez la formule audiovisuelle adaptée à votre événement.</p>
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

          {/* ÉTAPE 2 : CONFIGURATION DU DIRECT */}
          <section className="form-section" id="step-2">
            <div className="section-title">
              <span className="number">02</span>
              <div>
                <h2>Configuration de la prestation</h2>
                <p>Comment souhaitez-vous organiser votre retransmission en direct ?</p>
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
                  <h3>◉ En présentiel</h3>
                  <p>Sur le terrain, sur votre site ou notre plateau, avec votre public.</p>
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
                  <h3>▣ À distance</h3>
                  <p>Diffusion multiplateforme et accompagnement technique en ligne.</p>
                </div>
              </label>
            </div>
          </section>

          {/* ÉTAPE 3 : PLANIFICATION */}
          <section className="form-section" id="step-3">
            <div className="section-title">
              <span className="number">03</span>
              <div>
                <h2>Planification & Créneaux</h2>
                <p>Indiquez la date et le créneau souhaité parmi les 4 disponibilités quotidiennes.</p>
              </div>
            </div>

            <div className="fields-grid-2">
              <div className="field">
                <label htmlFor="res-date">Date souhaitée *</label>
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
                <label htmlFor="res-slot">Créneau horaire * (Capacité : 4/jour)</label>
                <select
                  id="res-slot"
                  required
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                >
                  <option value="">Sélectionner un créneau</option>
                  {SLOTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label} ({s.desc})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="hint">
              <span>●</span> Capacité maximale : <strong>4 lives par jour</strong> pour garantir une régie sans faille. La disponibilité est validée par notre équipe.
            </p>
          </section>

          {/* ÉTAPE 4 : COORDONNÉES */}
          <section className="form-section" id="step-4">
            <div className="section-title">
              <span className="number">04</span>
              <div>
                <h2>Vos coordonnées de contact</h2>
                <p>Ces informations permettent à notre administrateur de vous envoyer le devis formel.</p>
              </div>
            </div>

            <div className="fields">
              <div className="fields-grid-2">
                <div className="field">
                  <label htmlFor="res-name">Nom complet ou Entreprise *</label>
                  <input
                    id="res-name"
                    type="text"
                    placeholder="Ex: Jean Kouassi / Société Tech Africa"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="res-phone">Téléphone direct *</label>
                  <input
                    id="res-phone"
                    type="tel"
                    placeholder="Ex: +225 07 00 00 00 00"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="fields-grid-2">
                <div className="field">
                  <label htmlFor="res-email">Adresse e-mail professionnelle *</label>
                  <input
                    id="res-email"
                    type="email"
                    placeholder="contact@entreprise.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="res-location">Lieu de l'événement (Ville / Salle / Studio)</label>
                  <input
                    id="res-location"
                    type="text"
                    placeholder="Ex: Plateau, Abidjan / En ligne"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="res-msg">Informations complémentaires & Besoins spécifiques</label>
                <textarea
                  id="res-msg"
                  rows={4}
                  placeholder="Objectif du direct, nombre d'intervenants, durée estimée, plateformes cibles (YouTube, Facebook, LinkedIn)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* VALIDATION */}
          <div className="submit-area">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                "Envoi en cours..."
              ) : (
                <>
                  Confirmer ma demande de réservation <span>→</span>
                </>
              )}
            </button>

            <p>🔒 Vos informations restent strictement confidentielles.</p>
            <small>
              Votre demande est transmise directement à la direction d'OCD Live. Aucun paiement n'est exigé en ligne : le devis final et la validation du créneau vous sont adressés sous 24h.
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
            <linearGradient id="bgOrangeGradL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f36b0b" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ff7b1a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f36b0b" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Vague fluide orange côté droit */}
        <svg
          className="bg-graphic-right"
          viewBox="0 0 260 420"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M300,30 C180,95 110,210 160,320 C185,370 260,405 300,420"
            stroke="url(#bgOrangeGradR)"
            strokeWidth="38"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M300,30 C180,95 110,210 160,320 C185,370 260,405 300,420"
            stroke="#ff801a"
            strokeWidth="10"
            strokeLinecap="round"
            className="bg-graphic-stroke"
          />
          <defs>
            <linearGradient id="bgOrangeGradR" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f36b0b" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ff7b1a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f36b0b" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* HERO BANNER DE RÉSERVATION AVEC TRANSITION ASYMÉTRIQUE */}
      <section className="reservation-hero">
        {/* Arc croissant lumineux orange en haut à gauche */}
        <div className="hero-crescent-left" aria-hidden="true" />

        <div className="reservation-hero-content">
          <div className="reservation-breadcrumb">
            <Link href="/">Accueil</Link>
            <span>›</span>
            <span>Réservation</span>
          </div>

          <span className="eyebrow">
            <i /> RÉSERVATIONS & CADRAGE TECHNIQUE EN DIRECT
          </span>

          <h1>
            Réservez votre expérience <span>audiovisuelle.</span>
          </h1>

          <p>
            Planifions ensemble votre projet. Remplissez le formulaire
            et notre équipe vous recontactera rapidement.
          </p>
        </div>

        {/* Découpe asymétrique en bas du hero :
            - À gauche : arrondi vers le bas
            - À droite : arrondi vers le haut
            - Avec trait orange lumineux
        */}
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
      <Suspense fallback={<div className="container" style={{ padding: "80px 0", textAlign: "center" }}>Chargement du module de réservation...</div>}>
        <ReservationForm />
      </Suspense>
    </main>
  );
}
