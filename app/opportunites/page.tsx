"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  Sparkles,
  Users,
  MessageCircle,
} from "lucide-react";
import { OPPORTUNITIES_DATA, COMPANY_INFO } from "@/lib/data";
import PageBackgroundGraphics from "@/components/PageBackgroundGraphics";

const FILTER_TYPES = [
  { id: "all", label: "Toutes les opportunités", icon: "✨" },
  { id: "formation", label: "Formations & Masterclasses", icon: "🎓" },
  { id: "mentorat", label: "Encadrement & Mentorat Bovan", icon: "🚀" },
  { id: "emploi", label: "Emplois & Missions Terrain", icon: "💼" },
  { id: "casting", label: "Castings & Appels à Projets", icon: "📢" },
];

export default function OpportunitesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredOpportunities = OPPORTUNITIES_DATA.filter((opp) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "formation")
      return opp.type?.includes("Formation") || opp.contractType?.includes("Formation") || opp.contractType?.includes("Bootcamp") || opp.contractType?.includes("Stage");
    if (selectedFilter === "mentorat")
      return opp.type?.includes("Mentorat") || opp.contractType?.includes("Mentorat") || opp.contractType?.includes("Coaching");
    if (selectedFilter === "emploi")
      return opp.type?.includes("Emploi") || opp.contractType?.includes("Freelance") || opp.contractType?.includes("CDD") || opp.contractType?.includes("Pige");
    if (selectedFilter === "casting")
      return opp.type?.includes("Casting") || opp.contractType?.includes("Casting") || opp.contractType?.includes("Audition") || opp.contractType?.includes("Concours");
    return true;
  });

  return (
    <main className="page-with-bg-graphics" style={{ paddingTop: "50px", paddingBottom: "110px", position: "relative" }}>
      {/* GRAPHISME D'ARRIÈRE-PLAN : VAGUE ORANGE & SILHOUETTE AFRIQUE */}
      <PageBackgroundGraphics />

      {/* Hero Header */}
      <section className="container" style={{ position: "relative", zIndex: 2, marginBottom: "45px" }}>
        <div className="section-head" style={{ marginBottom: "25px" }}>
          <div>
            <div className="eyebrow">
              <i /> #LesOpportunitesCestDehors · Tremplin Jeunesse & Avenir
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, lineHeight: 1.15, color: "#fff" }}>
              Formations, Mentorat & Emplois : <br />
              <em style={{ color: "var(--orange)", fontStyle: "normal" }}>
                l'opportunité se crée dehors.
              </em>
            </h1>
            <p style={{ maxWidth: "760px", fontSize: "15px", lineHeight: 1.6, color: "#ccc", marginTop: "12px" }}>
              Parce que le talent ne doit plus rester enfermé dans une chambre : retrouvez nos masterclasses 100% pratiques, nos programmes de mentorat terrain avec le PDG <strong>Bovan</strong>, nos piges régie rémunérées et nos castings ouverts pour révéler les bâtisseurs de demain.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              className="btn orange"
              href="https://wa.me/22890000000?text=Bonjour%20OCD%20Live,%20je%20suis%20un%20jeune%20talent%20et%20je%20veux%20rejoindre%20le%20mouvement%20%23LesOpportunitesCestDehors"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Jeunesse Direct</span>
            </a>
          </div>
        </div>

        {/* 4 Engagements Forts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "14px",
            marginTop: "20px",
          }}
        >
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>🎓</span>
            <div>
              <strong style={{ display: "block", color: "#fff", fontSize: "13px" }}>Formations Pratiques</strong>
              <small style={{ color: "#aaa", fontSize: "11px" }}>Caméras 4K, Régie & Son HF</small>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>🚀</span>
            <div>
              <strong style={{ display: "block", color: "#fff", fontSize: "13px" }}>Mentorat PDG Bovan</strong>
              <small style={{ color: "#aaa", fontSize: "11px" }}>Visibilité sur 4M d'abonnés</small>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>💼</span>
            <div>
              <strong style={{ display: "block", color: "#fff", fontSize: "13px" }}>Piges Terrain Payées</strong>
              <small style={{ color: "#aaa", fontSize: "11px" }}>Paiement garanti après chaque direct</small>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>📢</span>
            <div>
              <strong style={{ display: "block", color: "#fff", fontSize: "13px" }}>Castings & Tremplins</strong>
              <small style={{ color: "#aaa", fontSize: "11px" }}>Nouveaux visages & défis créateurs</small>
            </div>
          </div>
        </div>
      </section>

      {/* Onglets Filtres interactifs */}
      <section className="container" style={{ position: "relative", zIndex: 2, marginBottom: "35px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            paddingBottom: "18px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {FILTER_TYPES.map((f) => {
            const isActive = selectedFilter === f.id;
            const count =
              f.id === "all"
                ? OPPORTUNITIES_DATA.length
                : OPPORTUNITIES_DATA.filter((o) => {
                    if (f.id === "formation") return o.type?.includes("Formation") || o.contractType?.includes("Formation") || o.contractType?.includes("Bootcamp") || o.contractType?.includes("Stage");
                    if (f.id === "mentorat") return o.type?.includes("Mentorat") || o.contractType?.includes("Mentorat") || o.contractType?.includes("Coaching");
                    if (f.id === "emploi") return o.type?.includes("Emploi") || o.contractType?.includes("Freelance") || o.contractType?.includes("CDD") || o.contractType?.includes("Pige");
                    if (f.id === "casting") return o.type?.includes("Casting") || o.contractType?.includes("Casting") || o.contractType?.includes("Audition") || o.contractType?.includes("Concours");
                    return true;
                  }).length;

            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFilter(f.id)}
                style={{
                  background: isActive
                    ? "var(--orange)"
                    : "rgba(22, 22, 22, 0.8)",
                  color: isActive ? "#111" : "#ddd",
                  border: isActive
                    ? "1px solid var(--orange)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "50px",
                  padding: "9px 18px",
                  fontSize: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  boxShadow: isActive
                    ? "0 4px 18px rgba(243, 107, 11, 0.35)"
                    : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <span>{f.icon}</span>
                <span>{f.label}</span>
                <span
                  style={{
                    background: isActive ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.1)",
                    color: isActive ? "#111" : "#bbb",
                    borderRadius: "50px",
                    padding: "2px 7px",
                    fontSize: "10.5px",
                    fontWeight: 700,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Grille des Cartes d'Opportunités */}
      <section className="container" style={{ position: "relative", zIndex: 2, marginBottom: "80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredOpportunities.map((opp) => {
            const isFormation = opp.type?.includes("Formation") || opp.contractType?.includes("Formation") || opp.contractType?.includes("Bootcamp") || opp.contractType?.includes("Stage");
            const isMentorat = opp.type?.includes("Mentorat") || opp.contractType?.includes("Mentorat") || opp.contractType?.includes("Coaching");
            const isCasting = opp.type?.includes("Casting") || opp.contractType?.includes("Casting") || opp.contractType?.includes("Audition") || opp.contractType?.includes("Concours");

            const typeColor = isFormation
              ? "#60a5fa"
              : isMentorat
              ? "#c084fc"
              : isCasting
              ? "#f472b6"
              : "var(--orange)";

            const typeBg = isFormation
              ? "rgba(59, 130, 246, 0.12)"
              : isMentorat
              ? "rgba(168, 85, 247, 0.12)"
              : isCasting
              ? "rgba(236, 72, 153, 0.12)"
              : "rgba(243, 107, 11, 0.12)";

            const whatsappMessage = encodeURIComponent(
              `Bonjour OCD Live, je candidate pour l'opportunité : "${opp.title}" (Réf: ${opp.id}). Je suis motivé(e) et disponible.`
            );

            return (
              <article
                key={opp.id}
                style={{
                  background: "linear-gradient(160deg, #181818 0%, #101010 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "22px",
                  padding: "30px 26px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "22px",
                  boxShadow: "0 14px 40px rgba(0, 0, 0, 0.65)",
                  transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Lueur supérieure colorée selon le type */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "20%",
                    right: "20%",
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${typeColor}, transparent)`,
                  }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {/* Badges du haut */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                      <span
                        style={{
                          background: typeBg,
                          color: typeColor,
                          border: `1px solid ${typeColor}`,
                          fontSize: "10.5px",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          padding: "4px 10px",
                          borderRadius: "50px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {opp.badge || opp.contractType}
                      </span>
                      <span style={{ fontSize: "11px", color: "#888", fontWeight: 700 }}>
                        {opp.company}
                      </span>
                    </div>

                    <span style={{ fontSize: "11px", color: "#666", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={12} />
                      <span>{opp.postedDate}</span>
                    </span>
                  </div>

                  {/* Titre & métadonnées */}
                  <div>
                    <h2 style={{ font: "800 20px Manrope, sans-serif", margin: "0 0 10px 0", color: "#fff", lineHeight: 1.35 }}>
                      {opp.title}
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "12px", color: "#aaa" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <MapPin size={13} style={{ color: typeColor }} />
                        <span>{opp.location}</span>
                      </span>
                      {opp.duration && (
                        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                          <Clock size={13} style={{ color: typeColor }} />
                          <span>{opp.duration}</span>
                        </span>
                      )}
                      {opp.spots && (
                        <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#f3a563" }}>
                          <Users size={13} />
                          <span>{opp.spots}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ color: "#bbb", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                    {opp.description}
                  </p>

                  {/* Critères requis */}
                  <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "14px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--light)", display: "block", marginBottom: "8px" }}>
                      Profil recherché & Prérequis
                    </span>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                      {opp.requirements.map((req, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12px", color: "#ccc", lineHeight: 1.45 }}>
                          <CheckCircle2 size={13} style={{ color: typeColor, flexShrink: 0, marginTop: "2px" }} />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Avantages & ce que tu gagnes */}
                  {opp.benefits && opp.benefits.length > 0 && (
                    <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)", borderRadius: "12px", padding: "10px 14px" }}>
                      <span style={{ fontSize: "10.5px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", color: typeColor, display: "flex", alignItems: "center", gap: "5px", marginBottom: "6px" }}>
                        <Sparkles size={11} />
                        <span>Ce que tu gagnes</span>
                      </span>
                      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                        {opp.benefits.map((ben, i) => (
                          <li key={i} style={{ fontSize: "11.5px", color: "#aaa" }}>
                            ✦ {ben}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer de la carte */}
                <div
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingTop: "18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div>
                    <small style={{ color: "#777", fontSize: "10px", display: "block", textTransform: "uppercase", fontWeight: 800 }}>
                      Rémunération / Prise en charge
                    </small>
                    <strong style={{ color: "#fff", fontSize: "13px" }}>
                      {opp.remuneration}
                    </strong>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <a
                      href={`https://wa.me/22890000000?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn orange"
                      style={{
                        minHeight: "38px",
                        padding: "0 16px",
                        fontSize: "12px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <MessageCircle size={14} />
                      <span>Postuler</span>
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(`Candidature pour ${opp.title} (${opp.id})`)}`}
                      className="btn outline"
                      title="Postuler par email"
                      style={{
                        minHeight: "38px",
                        padding: "0 12px",
                        fontSize: "12px",
                      }}
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bannière Partenaires & Annonceurs */}
      <section className="contact" style={{ position: "relative", zIndex: 2 }}>
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Réseau Bâtisseurs #OCD</small>
            <h2>Vous organisez une formation ou offrez une opportunité pour les jeunes ?</h2>
            <p>
              Entreprises, mentors, formateurs et producteurs : publiez vos annonces vérifiées sur OCD Live et touchez la jeunesse la plus active d'Afrique de l'Ouest.
            </p>
          </div>
          <Link className="btn white" href="/contact">
            Publier une opportunité →
          </Link>
        </div>
      </section>
    </main>
  );
}
