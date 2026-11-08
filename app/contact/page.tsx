"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CalendarCheck2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

const CONTACT_TOPICS = [
  "Renseignement général / Information",
  "Demande de visite du plateau studio",
  "Partenariat média ou institutionnel",
  "Presse, interview & relations publiques",
  "Recrutement & opportunités de terrain",
  "Autre demande spécifique",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(CONTACT_TOPICS[0]);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 600);
  };

  return (
    <main style={{ paddingBottom: "90px" }}>
      {/* HERO SECTION CONTACT */}
      <section
        style={{
          position: "relative",
          minHeight: "290px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid var(--line)",
          background:
            "linear-gradient(90deg, #090909 20%, rgba(9, 9, 9, 0.88) 60%, rgba(9, 9, 9, 0.4)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1800&auto=format&fit=crop&q=80') center/cover no-repeat",
        }}
      >
        <div className="container" style={{ paddingTop: "50px", paddingBottom: "40px" }}>
          <div
            style={{
              fontSize: "11px",
              color: "#aaa",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Link href="/" style={{ color: "#aaa", textDecoration: "none" }}>
              Accueil
            </Link>
            <span style={{ color: "var(--orange)", fontWeight: 700 }}>›</span>
            <span>Contact & Relations Studio</span>
          </div>

          <div className="eyebrow">
            <i /> Échangeons sur vos projets · OCD Live
          </div>

          <h1
            style={{
              font: "800 clamp(34px, 4.8vw, 54px) Manrope, sans-serif",
              letterSpacing: "-2px",
              margin: "12px 0 10px",
              color: "#fff",
              lineHeight: 1.15,
            }}
          >
            Prenez contact avec <em>notre équipe.</em>
          </h1>

          <p
            style={{
              color: "#ccc",
              fontSize: "14px",
              maxWidth: "580px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Une question technique, un partenariat stratégique, une demande institutionnelle
            ou une visite de notre plateau ? Nos équipes sont à votre entière disposition.
          </p>
        </div>
      </section>

      {/* BANDEAU PASSERELLE VERS LA RÉSERVATION */}
      <section className="container" style={{ marginTop: "40px", marginBottom: "40px" }}>
        <div
          style={{
            background: "linear-gradient(145deg, #1f1610, #13100e)",
            border: "1px solid rgba(243, 107, 11, 0.35)",
            borderRadius: "16px",
            padding: "24px 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--orange)",
                color: "#111",
                display: "grid",
                placeItems: "center",
                fontSize: "22px",
                flexShrink: 0,
              }}
            >
              <CalendarCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h3 style={{ font: "800 16px Manrope, sans-serif", margin: "0 0 4px", color: "#fff" }}>
                Vous souhaitez réserver un créneau ou commander un pack live ?
              </h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#bbb" }}>
                Pack Découverte (15 000 FCFA), Événement (50 000 FCFA), Production 4K ou Régie sur mesure : utilisez notre tunnel dédié en 4 étapes.
              </p>
            </div>
          </div>

          <Link
            className="btn orange"
            href="/reservation"
            style={{ whiteSpace: "nowrap" }}
          >
            Accéder au module de réservation ↗
          </Link>
        </div>
      </section>

      {/* CONTENU PRINCIPAL DE CONTACT : 2 COLONNES */}
      <section className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* COLONNE GAUCHE : COORDONNÉES & INFORMATIONS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                background: "linear-gradient(145deg, #181818, #101010)",
                border: "1px solid var(--line)",
                borderRadius: "20px",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div>
                <label>Plateau & Administration</label>
                <h2 style={{ font: "800 22px Manrope, sans-serif", margin: "6px 0 4px", color: "#fff" }}>
                  Coordonnées Officielles
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "13px", margin: 0 }}>
                  Échangez directement avec la régie et la direction d'OCD Live.
                </p>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Adresse */}
                <li style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(243, 107, 11, 0.15)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin className="w-5 h-5 text-[#f36b0b]" />
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "#aaa",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Studio & Plateau Central
                    </span>
                    <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
                      {COMPANY_INFO.address}
                    </span>
                    <small style={{ display: "block", color: "#888", fontSize: "11px", marginTop: "3px" }}>
                      Interventions mobiles dans toute la Côte d'Ivoire & la sous-région
                    </small>
                  </div>
                </li>

                {/* Téléphone */}
                <li style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(243, 107, 11, 0.15)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone className="w-5 h-5 text-[#f36b0b]" />
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "#aaa",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Ligne Directe / Téléphone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      style={{
                        color: "#fff",
                        fontSize: "15px",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      {COMPANY_INFO.phoneLabel}
                    </a>
                  </div>
                </li>

                {/* E-mail */}
                <li style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(243, 107, 11, 0.15)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail className="w-5 h-5 text-[#f36b0b]" />
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "#aaa",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Courriel Professionnel
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      style={{
                        color: "var(--orange)",
                        fontSize: "15px",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>

                {/* Horaires */}
                <li style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "rgba(243, 107, 11, 0.15)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock className="w-5 h-5 text-[#f36b0b]" />
                  </div>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "#aaa",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Disponibilité de la Régie
                    </span>
                    <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
                      Lundi – Samedi : 08h00 – 20h00
                    </span>
                    <small style={{ display: "block", color: "#888", fontSize: "11px", marginTop: "3px" }}>
                      Permanence technique 24/7 sur tournages & événements nocturnes
                    </small>
                  </div>
                </li>
              </ul>
            </div>

            {/* Carte Visite / Rassurance */}
            <div
              style={{
                background: "linear-gradient(145deg, #141414, #0d0d0d)",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Sparkles className="w-5 h-5 text-[#f36b0b]" />
                <h4 style={{ font: "800 15px Manrope, sans-serif", margin: 0, color: "#fff" }}>
                  La philosophie OCD Live
                </h4>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
                « Les opportunités, c'est dehors. » Nous ne sommes pas une agence enfermée
                derrière des formulaires impersonnels : nos portes sont ouvertes à ceux qui
                entreprennent, créent et bâtissent.
              </p>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE DE PRISE DE CONTACT ÉPURÉ */}
          <div
            style={{
              background: "linear-gradient(145deg, #181818, #101010)",
              border: "1px solid var(--line)",
              borderRadius: "20px",
              padding: "36px 32px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
            }}
          >
            {isSent ? (
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "var(--orange)",
                    color: "#111",
                    display: "grid",
                    placeItems: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 0 25px rgba(243, 107, 11, 0.5)",
                  }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 style={{ font: "800 24px Manrope, sans-serif", color: "#fff", margin: "0 0 10px" }}>
                  Message envoyé avec succès !
                </h2>
                <p style={{ color: "#ccc", fontSize: "14px", lineHeight: 1.7, margin: "0 0 24px" }}>
                  Merci <strong>{name}</strong>. Votre message a été directement transmis à la direction
                  d'OCD Live. Notre équipe reviendra vers vous sous 24 heures ouvrées.
                </p>
                <button
                  type="button"
                  className="btn orange"
                  onClick={() => {
                    setIsSent(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                  }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label>Formulaire de contact direct</label>
                  <h2 style={{ font: "800 22px Manrope, sans-serif", margin: "6px 0 4px", color: "#fff" }}>
                    Laissez-nous un message
                  </h2>
                  <p style={{ color: "var(--muted)", fontSize: "13px", margin: 0 }}>
                    Nous vous répondons rapidement avec une attention personnalisée.
                  </p>
                </div>

                {/* Nom & Entreprise */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="contact-name" style={{ fontSize: "12px", fontWeight: 700, color: "#ddd" }}>
                    Nom complet ou Organisation *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Ex: Marc Koffi / Studio Afrique"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      background: "#18181b",
                      color: "#fff",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      borderRadius: "10px",
                      padding: "14px 16px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Email & Téléphone en grille */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label htmlFor="contact-email" style={{ fontSize: "12px", fontWeight: 700, color: "#ddd" }}>
                      Adresse e-mail *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="vous@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "100%",
                        background: "#18181b",
                        color: "#fff",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        borderRadius: "10px",
                        padding: "14px 16px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label htmlFor="contact-phone" style={{ fontSize: "12px", fontWeight: 700, color: "#ddd" }}>
                      Numéro de téléphone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+225 00 00 00 00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: "100%",
                        background: "#18181b",
                        color: "#fff",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        borderRadius: "10px",
                        padding: "14px 16px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Objet du contact */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="contact-topic" style={{ fontSize: "12px", fontWeight: 700, color: "#ddd" }}>
                    Objet de votre demande *
                  </label>
                  <select
                    id="contact-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    style={{
                      width: "100%",
                      background: "#18181b",
                      color: "#fff",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      borderRadius: "10px",
                      padding: "14px 16px",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  >
                    {CONTACT_TOPICS.map((t, idx) => (
                      <option key={idx} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="contact-msg" style={{ fontSize: "12px", fontWeight: 700, color: "#ddd" }}>
                    Votre message *
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    rows={5}
                    placeholder="Détaillez votre demande, vos attentes ou votre proposition..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: "100%",
                      background: "#18181b",
                      color: "#fff",
                      border: "1px solid rgba(255, 255, 255, 0.18)",
                      borderRadius: "10px",
                      padding: "14px 16px",
                      fontSize: "14px",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  className="btn orange"
                  disabled={isSending}
                  style={{
                    width: "100%",
                    minHeight: "52px",
                    fontSize: "14px",
                    fontWeight: 800,
                    marginTop: "6px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  {isSending ? (
                    "Transmission en cours..."
                  ) : (
                    <>
                      <span>Envoyer mon message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p
                  style={{
                    color: "#777",
                    fontSize: "11px",
                    margin: 0,
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  🔒 Vos coordonnées restent strictement confidentielles et ne seront jamais cédées.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
