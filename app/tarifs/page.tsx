import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  HelpCircle,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { PRICING_OFFERS, DAILY_LIVE_SLOTS } from "@/lib/data";
import PageBackgroundGraphics from "@/components/PageBackgroundGraphics";

export const metadata: Metadata = {
  title: "Tarifs & Packs Audiovisuels en FCFA — OCD Live Lomé (Togo)",
  description:
    "Consultez les prix officiels en FCFA d'OCD Live à Lomé, Togo : 6 packs calibrés de 15 000 FCFA à 180 000 FCFA. Équipe technique personnalisée déployée directement dans vos locaux ou en studio.",
};

const FAQS = [
  {
    q: "L'équipe peut-elle se déplacer directement dans nos locaux à Lomé ?",
    a: "Absolument. Toutes nos formules incluent le déploiement d'une équipe personnalisée (cadreurs, ingénieur du son, régisseur) directement dans vos bureaux, boutiques, églises ou salles d'événement à Lomé et dans ses environs, ainsi que l'accès au plateau studio.",
  },
  {
    q: "Pourquoi les places sont-elles limitées à 4 lives par jour ?",
    a: "Pour garantir un niveau broadcast irréprochable. Chaque direct mobilise des ingénieurs du son, cadreurs et réalisateurs dédiés. Cette discipline technique assure zéro coupure, une liaison Starlink stable et une réactivité totale.",
  },
  {
    q: "Comment fonctionne la réservation d'un pack ?",
    a: "Vous choisissez votre formule parmi nos 6 packs et sélectionnez votre créneau souhaité. Notre administrateur reçoit votre demande en temps réel, valide la faisabilité avec le planning et vous recontacte sous 24h par WhatsApp ou appel direct.",
  },
  {
    q: "Le matériel technique est-il entièrement fourni par OCD Live ?",
    a: "Oui, les caméras broadcast HD/4K, les micros voix HF et Shure SM7B, l'éclairage de plateau, la régie multicaméra et l'habillage graphique personnalisé sont 100 % inclus dans nos forfaits.",
  },
  {
    q: "Sur quels canaux nos vidéos et nos lives sont-ils diffusés ?",
    a: "Selon la formule choisie, nous retransmettons en direct sur vos propres comptes (YouTube, Facebook, TikTok) et nous assurons le relais et la publication sur les réseaux de Bovan et House of Challenge pour une visibilité démultipliée.",
  },
];

export default function TarifsPage() {
  return (
    <main className="page-with-bg-graphics" style={{ paddingTop: "40px", paddingBottom: "90px", position: "relative" }}>
      {/* GRAPHISME D'ARRIÈRE-PLAN : VAGUE ORANGE & SILHOUETTE AFRIQUE */}
      <PageBackgroundGraphics />

      {/* Header */}
      <section className="container" style={{ marginBottom: "40px", position: "relative", zIndex: 2 }}>
        <div className="section-head" style={{ marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">
              <i /> Tarifs Officiels en FCFA · Lomé (Togo)
            </div>
            <h1>
              Des packs calibrés <em>pour émerger dehors.</em>
            </h1>
            <p>
              6 formules claires et symétriques en Franc CFA, adaptées aux
              créateurs, entrepreneurs, commerces et institutions. Une équipe
              technique complète mobilisée directement dans vos locaux ou en
              studio.
            </p>
          </div>
          <Link className="btn orange" href="/reservation">
            Réserver un créneau direct ↗
          </Link>
        </div>

        {/* Bannière Valeur Ajoutée : Équipe personnalisée dans vos locaux */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(243, 107, 11, 0.12), rgba(18, 18, 18, 0.95))",
            border: "1px solid rgba(243, 107, 11, 0.35)",
            borderRadius: "20px",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(243, 107, 11, 0.18)",
                border: "1px solid var(--orange)",
                display: "grid",
                placeItems: "center",
                color: "var(--orange)",
                flexShrink: 0,
              }}
            >
              <Users className="w-5 h-5" />
            </div>
            <div>
              <strong
                style={{ color: "#fff", fontSize: "15px", display: "block" }}
              >
                Une équipe personnalisée mobilisée directement dans vos locaux
              </strong>
              <span style={{ color: "#aaa", fontSize: "13px" }}>
                Cadreurs, ingénieur son et régie mobile installés chez vous à
                Lomé ou accès à notre plateau studio.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--orange)",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            <MapPin className="w-4 h-4" />
            <span>Lomé & Tout le Togo</span>
          </div>
        </div>
      </section>

      {/* Règle des 4 créneaux quotidiens */}
      <section className="container" style={{ marginBottom: "60px" }}>
        <div
          style={{
            background: "linear-gradient(145deg, #181512, #101010)",
            border: "1px solid var(--orange)",
            borderRadius: "20px",
            padding: "clamp(24px, 4vw, 36px)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Clock className="w-5 h-5 text-[#f36b0b]" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                color: "var(--light)",
              }}
            >
              Discipline & Qualité Broadcast
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(20px, 2.8vw, 28px)",
                  margin: "0 0 10px 0",
                  color: "#fff",
                }}
              >
                Capacité exclusive : 4 créneaux par jour maximum
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Chaque prestation mobilise une équipe dédiée complète. Cette
                limitation stricte garantit une attention maximale, zéro coupure
                et un accompagnement sur mesure pour chacun de vos directs.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            >
              {DAILY_LIVE_SLOTS.map((slot) => (
                <div
                  key={slot.id}
                  style={{
                    background: "#181818",
                    border: "1px solid var(--line)",
                    borderRadius: "14px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <strong
                    style={{
                      color: "var(--orange)",
                      fontSize: "14px",
                      display: "block",
                    }}
                  >
                    {slot.hours}
                  </strong>
                  <span style={{ fontSize: "11px", color: "#aaa" }}>
                    {slot.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grille des 6 Packs en FCFA (Grille symétrique 3x2 / 2x3) */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "24px",
          }}
        >
          {PRICING_OFFERS.map((offer) => (
            <div
              key={offer.id}
              style={{
                background: offer.isPopular
                  ? "linear-gradient(145deg, rgba(32, 22, 14, 0.95), rgba(16, 14, 12, 0.98))"
                  : "linear-gradient(145deg, rgba(28, 28, 28, 0.85), rgba(16, 16, 16, 0.95))",
                border: offer.isPopular
                  ? "2px solid var(--orange)"
                  : "1px solid rgba(255, 255, 255, 0.09)",
                borderRadius: "20px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
                position: "relative",
                boxShadow: offer.isPopular
                  ? "0 14px 40px rgba(243, 107, 11, 0.22)"
                  : "0 10px 30px rgba(0, 0, 0, 0.5)",
                transition: "transform 0.25s ease, border-color 0.25s ease",
              }}
            >
              {offer.isPopular && (
                <span
                  style={{
                    position: "absolute",
                    top: "-12px",
                    right: "24px",
                    background: "var(--orange)",
                    color: "#170e08",
                    fontSize: "10px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    padding: "4px 14px",
                    borderRadius: "50px",
                    letterSpacing: "1px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    boxShadow: "0 4px 14px rgba(243, 107, 11, 0.4)",
                  }}
                >
                  <Sparkles className="w-3 h-3" /> Recommandé
                </span>
              )}

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      color: "var(--orange)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Pack Officiel #{offer.id}
                  </span>
                  {offer.period && (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#888",
                        background: "rgba(255,255,255,0.05)",
                        padding: "3px 10px",
                        borderRadius: "50px",
                      }}
                    >
                      {offer.period}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    font: "800 22px Manrope, sans-serif",
                    margin: "0 0 10px 0",
                    color: "#fff",
                  }}
                >
                  {offer.title}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "13px",
                    lineHeight: 1.55,
                    margin: "0 0 18px 0",
                  }}
                >
                  {offer.description}
                </p>

                <div
                  style={{
                    borderTop: "1px solid var(--line)",
                    borderBottom: "1px solid var(--line)",
                    padding: "16px 0",
                    margin: "18px 0",
                  }}
                >
                  <div
                    style={{
                      font: "900 32px Manrope, sans-serif",
                      color: "var(--orange)",
                    }}
                  >
                    {offer.price}
                  </div>
                  <small
                    style={{
                      color: "#aaa",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "4px",
                    }}
                  >
                    <Users className="w-3.5 h-3.5 text-[#f36b0b]" /> Équipe
                    personnalisée incluse (locaux ou studio)
                  </small>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      color: "var(--light)",
                      letterSpacing: "1px",
                    }}
                  >
                    Détail des prestations incluses
                  </span>
                  {offer.included.map((inc, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#ccc",
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#f36b0b] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={`/reservation?offre=${offer.slug}`}
                  className={offer.isPopular ? "btn orange" : "btn outline"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Réserver ce pack →
                </Link>
                {offer.note && (
                  <p
                    style={{
                      fontSize: "11px",
                      color: "#777",
                      textAlign: "center",
                      margin: "8px 0 0 0",
                    }}
                  >
                    {offer.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section"
        style={{
          background: "#0b0b0b",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "75px 0",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div>
              <label>Questions Fréquentes</label>
              <h2>
                Tout ce que vous devez savoir <em>avant de réserver.</em>
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(145deg, #181818, #101010)",
                  border: "1px solid var(--line)",
                  borderRadius: "20px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <HelpCircle className="w-5 h-5 text-[#f36b0b] shrink-0" />
                  <h3
                    style={{
                      font: "700 16px Manrope, sans-serif",
                      margin: 0,
                      color: "#fff",
                    }}
                  >
                    {faq.q}
                  </h3>
                </div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "13px",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Band */}
      <section className="contact" style={{ marginTop: "75px" }}>
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Directement auprès de l'administrateur OCD Live Lomé</small>
            <h2>
              Vous avez une question sur une formule ou un besoin sur mesure ?
            </h2>
            <p>
              Notre équipe technique vérifie la disponibilité des 4 créneaux et
              vous répond sous 24h.
            </p>
          </div>
          <Link className="btn white" href="/reservation">
            Accéder à la réservation →
          </Link>
        </div>
      </section>
    </main>
  );
}
