import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Sparkles,
  Shield,
  Layers,
  Camera,
  Radio,
  Cpu,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import AfricaMapGraphic from "@/components/AfricaMapGraphic";

export const metadata: Metadata = {
  title: "À Propos d'OCD Live — Notre Histoire, Bovan & Vision",
  description:
    "Découvrez l'histoire d'OCD Live (« Opportunités C'est Dehors »), le mot du DG Bovan, notre mission pour la jeunesse et nos équipements broadcast à Lomé (Togo).",
};

const VALUES = [
  {
    icon: <Target className="w-7 h-7 text-[#f36b0b]" />,
    title: "Le Terrain d'Abord",
    desc: "Les opportunités ne sont pas dans une chambre. Nous nous déplaçons là où les bâtisseurs agissent, créent et transforment l'Afrique.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-[#f36b0b]" />,
    title: "Exigence Broadcast",
    desc: "Qualité d'image 4K, régie multicaméra millimétrée, son pur et double redondance pour des directs sans compromis.",
  },
  {
    icon: <Shield className="w-7 h-7 text-[#f36b0b]" />,
    title: "Révélation des Talents",
    desc: "Donner un mégaphone de classe internationale aux jeunes, aux entreprises innovantes et aux institutions audacieuses.",
  },
  {
    icon: <Layers className="w-7 h-7 text-[#f36b0b]" />,
    title: "Rareté & Respect du Client",
    desc: "Capacité maîtrisée à 4 lives par jour pour accorder à chaque retransmission une concentration technique absolue.",
  },
];

const EQUIPMENTS = [
  {
    category: "Prise de vue & Caméras",
    icon: <Camera className="w-5 h-5 text-[#f36b0b]" />,
    items: [
      "Caméras broadcast 4K à capteur plein format (Sony FX6 / FX9)",
      "Caméras tourelles robotisées PTZ pour captation discrète",
      "Optiques ciné à grande ouverture pour une profondeur de champ marquée",
      "Stabilisateurs Ronin & travelling motorisé pour mouvements fluides",
    ],
  },
  {
    category: "Régie Mobile & Diffusion",
    icon: <Radio className="w-5 h-5 text-[#f36b0b]" />,
    items: [
      "Mélangeurs Blackmagic ATEM Constellation 4K en flight-case",
      "Unités de streaming LiveU avec bonding cellulaire 4G/5G",
      "Connexions satellitaires Starlink Business pour liaison autonome",
      "Système d'habillage graphique et synthés dynamiques en direct",
    ],
  },
  {
    category: "Ingénierie Son & Acoustique",
    icon: <Cpu className="w-5 h-5 text-[#f36b0b]" />,
    items: [
      "Micros voix broadcast Shure SM7B avec préamplificateurs Cloudlifter",
      "Liaisons HF numériques Sennheiser avec micros cravates et serre-tête",
      "Consoles audio numériques Dante avec traitement dynamique en temps réel",
      "Traitement acoustique professionnel de notre plateau à Lomé",
    ],
  },
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      {/* Hero Intro */}
      <section className="container" style={{ marginBottom: "64px" }}>
        <div className="section-head" style={{ marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">
              <i /> L'Histoire & Le Mouvement
            </div>
            <h1>
              OCD : <em>« Opportunités C’est Dehors »</em>
            </h1>
            <p>
              On ne réussit pas enfermé dans sa chambre. OCD Live est né d'un constat
              simple et direct : c'est sur le terrain que les projets se concrétisent,
              que les contrats se signent et que les idées prennent vie.
            </p>
          </div>
        </div>
      </section>

      {/* Le Mot du DG Bovan */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "40px",
            alignItems: "center",
            background: "linear-gradient(145deg, #181818, #101010)",
            border: "1px solid var(--line)",
            borderRadius: "20px",
            padding: "clamp(24px, 4vw, 48px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.7)",
          }}
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "3 / 4",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(243, 107, 11, 0.35)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
            }}
          >
            <Image
              src="/images/bovann-pdg.jpg"
              alt="Bovann — Fondateur & PDG d'OCD Live"
              fill
              className="object-cover"
              priority
            />
            <span
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                background: "rgba(0, 0, 0, 0.85)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--orange)",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 800,
                padding: "6px 14px",
                borderRadius: "50px",
                boxShadow: "0 4px 15px rgba(243, 107, 11, 0.35)",
              }}
            >
              ● Bovann — PDG & Fondateur OCD Live
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <label>La Parole de la Direction</label>
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", lineHeight: 1.2, margin: 0 }}>
              « Quand vous sortez, nous mettons nos caméras au service de votre voix. »
            </h2>
            <blockquote
              style={{
                borderLeft: "3px solid var(--orange)",
                paddingLeft: "18px",
                margin: "4px 0",
                color: "#d0ceca",
                fontStyle: "italic",
                fontSize: "15px",
                lineHeight: 1.7,
              }}
            >
              "{COMPANY_INFO.dg.quote}"
            </blockquote>
            <span style={{ fontSize: "11px", color: "var(--light)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
              {COMPANY_INFO.dg.quoteStatus}
            </span>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>
              OCD Live n'est pas un catalogue d'options : c'est un outil de terrain,
              pensé pour propulser ceux qui ont le courage de franchir leur porte et
              d'affronter la réalité avec ambition.
            </p>
            <div style={{ marginTop: "12px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link className="btn orange" href="/reservation">
                Réserver un créneau live →
              </Link>
              <Link className="btn outline" href="/services">
                Découvrir nos 2 formats de direct
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos 4 Valeurs Fondamentales */}
      <section className="section" style={{ background: "#0b0b0b", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <div>
              <label>Nos Principes Directeurs</label>
              <h2>
                Ce qui guide chaque seconde <em>du direct.</em>
              </h2>
              <p>
                La technique est au service du message. Voici les piliers sur lesquels
                nos équipes ne transigent jamais.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            {VALUES.map((v, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(145deg, #181818, #101010)",
                  border: "1px solid var(--line)",
                  borderRadius: "6px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div>{v.icon}</div>
                <h3 style={{ margin: 0, font: "700 18px Manrope, sans-serif", color: "#fff" }}>
                  {v.title}
                </h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: "13px", lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Moyens Techniques Broadcast */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <label>Plateau & Régie Mobile</label>
              <h2>
                Des moyens techniques <em>de haut vol.</em>
              </h2>
              <p>
                Un plateau insonorisé et équipé à Lomé, couplé à des régies
                autonomes capables d'intervenir directement dans vos locaux partout au Togo et dans la sous-région.
              </p>
            </div>
            <Link className="orange-link" href="/services">
              Voir tous les livrables ↗
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {EQUIPMENTS.map((eq, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(145deg, #161616, #0e0e0e)",
                  border: "1px solid var(--line)",
                  borderRadius: "6px",
                  padding: "30px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(243, 107, 11, 0.15)", display: "grid", placeItems: "center" }}>
                    {eq.icon}
                  </div>
                  <h3 style={{ margin: 0, font: "700 17px Manrope, sans-serif", color: "#fff" }}>
                    {eq.category}
                  </h3>
                </div>

                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {eq.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "13px",
                        color: "#ccc",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "var(--orange)", fontWeight: "bold" }}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOT 4 : COUVERTURE PANAFRICAINE & PRÉSENCE TERRAIN */}
      <section className="section" style={{ background: "#0b0b0b", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "85px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "48px", alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>
                <i /> Rayonnement Continental
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3.4vw, 42px)", margin: "0 0 18px", color: "#fff", lineHeight: 1.2 }}>
                Un ancrage à Lomé, <em>une portée sur toute l'Afrique.</em>
              </h2>
              <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.75, margin: "0 0 28px" }}>
                Fondé par le PDG <strong>Bovan</strong>, OCD Live opère depuis son <strong>Studio Central à Lomé (Togo)</strong> pour déployer des régies multicaméras mobiles et des liaisons satellite Starlink partout en Afrique de l'Ouest (Togo, Bénin, Ghana, Côte d'Ivoire, Sénégal) et connecter la diaspora.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "rgba(255,255,255,0.03)", padding: "16px 20px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontSize: "22px" }}>📍</span>
                  <div>
                    <strong style={{ color: "#fff", display: "block", fontSize: "14.5px" }}>Studio Central & Régie Fixe · Lomé, Togo</strong>
                    <small style={{ color: "#aaa", fontSize: "12.5px" }}>Plateau insonorisé, régie 4K Blackmagic et accueil des invités VIP.</small>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "rgba(255,255,255,0.03)", padding: "16px 20px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontSize: "22px" }}>🚐</span>
                  <div>
                    <strong style={{ color: "#fff", display: "block", fontSize: "14.5px" }}>Régies Mobiles Tout-Terrain</strong>
                    <small style={{ color: "#aaa", fontSize: "12.5px" }}>Déploiement direct dans vos locaux d'entreprise, boutiques et foires.</small>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", background: "rgba(255,255,255,0.03)", padding: "16px 20px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontSize: "22px" }}>📡</span>
                  <div>
                    <strong style={{ color: "#fff", display: "block", fontSize: "14.5px" }}>Duplex Satellite & Réseau Diaspora</strong>
                    <small style={{ color: "#aaa", fontSize: "12.5px" }}>Connexion en direct avec Paris, Londres, Montréal et les métropoles africaines.</small>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <AfricaMapGraphic
                variant="about"
                showRays={true}
                showCityDots={true}
                showCityNames={true}
                showLomeBeacon={true}
                showHubBadge={true}
                width="100%"
                style={{
                  maxWidth: "680px",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA de fin */}
      <section className="contact">
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Votre voix mérite d'être entendue dehors</small>
            <h2>Envie d'échanger avec l'équipe d'OCD Live ?</h2>
            <p>Venez visiter le studio ou planifions ensemble votre prochaine retransmission en direct.</p>
          </div>
          <Link className="btn white" href="/contact">
            Prendre contact →
          </Link>
        </div>
      </section>
    </main>
  );
}
