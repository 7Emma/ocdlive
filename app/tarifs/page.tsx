import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  HelpCircle,
} from "lucide-react";
import { PRICING_OFFERS, DAILY_LIVE_SLOTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tarifs & Packs Audiovisuels en FCFA — OCD Live",
  description:
    "Consultez les prix officiels en FCFA d'OCD Live : Pack 1h30 (15 000 FCFA), Pack 4h (40 000 FCFA), Live Direct 4h (100 000 FCFA). Réservation directe selon les 4 créneaux quotidiens disponibles.",
};

const FAQS = [
  {
    q: "Pourquoi les places sont-elles limitées à 4 lives par jour ?",
    a: "Pour garantir un niveau broadcast irréprochable. Chaque direct mobilise des ingénieurs du son, cadreurs et réalisateurs dédiés. Cette discipline technique assure zéro coupure et une réactivité totale.",
  },
  {
    q: "Comment fonctionne la réservation ?",
    a: "Vous choisissez votre formule et votre créneau souhaité via le formulaire. L'administrateur reçoit votre demande en temps réel, vérifie la disponibilité sur le planning et vous contacte sous 24h pour valider définitivement.",
  },
  {
    q: "Le matériel est-il entièrement inclus dans le tarif ?",
    a: "Oui, les caméras broadcast 4K, les micros voix Shure SM7B, l'éclairage de plateau et l'assistance technique sont compris dans nos formules studio.",
  },
  {
    q: "Puis-je diffuser en simultané sur mes propres réseaux sociaux ?",
    a: "Absolument. Nos régies peuvent diffuser simultanément sur vos chaînes YouTube, Facebook, LinkedIn et sur vos serveurs privés.",
  },
];

export default function TarifsPage() {
  return (
    <main style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: "50px" }}>
        <div className="section-head" style={{ marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">
              <i /> Tarifs Officiels en FCFA
            </div>
            <h1>
              Des formules claires <em>pour passer à l'action.</em>
            </h1>
            <p>
              Tarifs transparents en FCFA. Chaque offre est pensée pour vous permettre
              d'émerger dehors et d'atteindre votre audience avec une qualité professionnelle.
            </p>
          </div>
          <Link className="btn orange" href="/reservation">
            Réserver un créneau direct ↗
          </Link>
        </div>
      </section>

      {/* Règle des 4 créneaux quotidiens */}
      <section className="container" style={{ marginBottom: "60px" }}>
        <div
          style={{
            background: "linear-gradient(145deg, #181512, #101010)",
            border: "1px solid var(--orange)",
            borderRadius: "8px",
            padding: "clamp(24px, 4vw, 36px)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Clock className="w-5 h-5 text-[#f36b0b]" />
            <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.2px", color: "var(--light)" }}>
              Régulation stricte des plannings
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(20px, 2.8vw, 28px)", margin: "0 0 10px 0", color: "#fff" }}>
                Capacité exclusive : 4 créneaux par jour maximum
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                Toutes les réservations sont centralisées auprès de l'administrateur.
                Cette limitation garantit une disponibilité totale de nos équipes et une rigueur technique sans faille.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
              {DAILY_LIVE_SLOTS.map((slot) => (
                <div
                  key={slot.id}
                  style={{
                    background: "#181818",
                    border: "1px solid var(--line)",
                    borderRadius: "6px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <strong style={{ color: "var(--orange)", fontSize: "14px", display: "block" }}>
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

      {/* Grille des Packs en FCFA */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {PRICING_OFFERS.map((offer) => (
            <div
              key={offer.id}
              style={{
                background: offer.isPopular ? "linear-gradient(145deg, #201810, #131110)" : "linear-gradient(145deg, #181818, #101010)",
                border: offer.isPopular ? "2px solid var(--orange)" : "1px solid var(--line)",
                borderRadius: "8px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
                position: "relative",
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
                    padding: "3px 12px",
                    borderRadius: "50px",
                    letterSpacing: "1px",
                  }}
                >
                  Le plus choisi
                </span>
              )}

              <div>
                <h3 style={{ font: "800 22px Manrope, sans-serif", margin: "0 0 6px 0", color: "#fff" }}>
                  {offer.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.5, margin: "0 0 16px 0" }}>
                  {offer.description}
                </p>

                <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "16px 0", margin: "16px 0" }}>
                  <div style={{ font: "900 32px Manrope, sans-serif", color: "var(--orange)" }}>
                    {offer.price}
                  </div>
                  {offer.period && (
                    <small style={{ color: "#aaa", fontSize: "12px" }}>{offer.period}</small>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", color: "var(--light)", letterSpacing: "1px" }}>
                    Ce qui est inclus
                  </span>
                  {offer.included.map((inc, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: "#ccc" }}>
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
                  Réserver cette offre →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#0b0b0b", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "75px 0" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <label>Questions Fréquentes</label>
              <h2>
                Tout ce que vous devez savoir <em>avant de réserver.</em>
              </h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(145deg, #181818, #101010)",
                  border: "1px solid var(--line)",
                  borderRadius: "6px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <HelpCircle className="w-5 h-5 text-[#f36b0b] shrink-0" />
                  <h3 style={{ font: "700 16px Manrope, sans-serif", margin: 0, color: "#fff" }}>
                    {faq.q}
                  </h3>
                </div>
                <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
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
            <small>Directement auprès de l'administrateur</small>
            <h2>Vous avez une question sur une formule ?</h2>
            <p>Notre équipe vérifie les disponibilités des 4 créneaux et vous répond sous 24h.</p>
          </div>
          <Link className="btn white" href="/reservation">
            Accéder à la réservation →
          </Link>
        </div>
      </section>
    </main>
  );
}
