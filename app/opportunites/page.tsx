"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Building,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { OPPORTUNITIES_DATA, OpportunityItem, COMPANY_INFO } from "@/lib/data";

const CATEGORIES = [
  "Toutes les opportunités",
  "Audiovisuel & Régie",
  "Production & Montage",
  "Événementiel & Accueil",
];

export default function OpportunitesPage() {
  const [selectedCat, setSelectedCat] = useState("Toutes les opportunités");

  const filteredJobs: OpportunityItem[] =
    selectedCat === "Toutes les opportunités"
      ? OPPORTUNITIES_DATA
      : OPPORTUNITIES_DATA.filter((job) => job.category === selectedCat);

  return (
    <main style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: "50px" }}>
        <div className="section-head" style={{ marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">
              <i /> Le Concret du Dehors
            </div>
            <h1>
              Opportunités & Emplois : <em>le terrain recrute.</em>
            </h1>
            <p>
              Tu veux apprendre, travailler, tenir une caméra ou coordonner une régie ?
              Découvre nos missions réelles et offres de tournage vérifiées à Lomé et en région.
            </p>
          </div>
          <a className="btn orange" href={`mailto:${COMPANY_INFO.email}?subject=Candidature%20Spontan%C3%A9e%20OCD%20Live`}>
            Candidature spontanée ↗
          </a>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="container" style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", paddingBottom: "20px", borderBottom: "1px solid var(--line)" }}>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                style={{
                  background: isActive ? "var(--orange)" : "#141414",
                  color: isActive ? "#170e08" : "#ccc",
                  border: isActive ? "1px solid var(--orange)" : "1px solid var(--line)",
                  borderRadius: "50px",
                  padding: "8px 18px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {filteredJobs.map((job) => (
            <article
              key={job.id}
              style={{
                background: "linear-gradient(145deg, #181818, #101010)",
                border: "1px solid var(--line)",
                borderRadius: "20px",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      background: "rgba(243, 107, 11, 0.15)",
                      color: "var(--light)",
                      border: "1px solid rgba(243, 107, 11, 0.3)",
                      fontSize: "10px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: "50px",
                      letterSpacing: "1px",
                    }}
                  >
                    {job.contractType}
                  </span>
                  <span style={{ fontSize: "11px", color: "#777", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.postedDate}</span>
                  </span>
                </div>

                <div>
                  <h2 style={{ font: "800 20px Manrope, sans-serif", margin: "0 0 6px 0", color: "#fff" }}>
                    {job.title}
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "12px", color: "var(--muted)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Building className="w-3.5 h-3.5 text-[#f36b0b]" />
                      <span>{job.company}</span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <MapPin className="w-3.5 h-3.5 text-[#f36b0b]" />
                      <span>{job.location}</span>
                    </span>
                  </div>
                </div>

                <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                  {job.description}
                </p>

                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "12px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--light)", display: "block", marginBottom: "8px" }}>
                    Critères clés
                  </span>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                    {job.requirements.map((req, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", fontSize: "12px", color: "#ccc" }}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#f36b0b] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <small style={{ color: "#777", fontSize: "10px", display: "block", textTransform: "uppercase", fontWeight: 700 }}>
                    Rémunération
                  </small>
                  <strong style={{ color: "#fff", fontSize: "13px" }}>
                    {job.remuneration}
                  </strong>
                </div>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Candidature%20pour%20${encodeURIComponent(job.title)}%20(Ref:%20${job.id})`}
                  className="btn orange"
                  style={{ minHeight: "40px", padding: "0 18px", fontSize: "12px" }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Postuler maintenant</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Action Band */}
      <section className="contact">
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Opportunités C'est Dehors</small>
            <h2>Vous recrutez pour un événement ou un tournage ?</h2>
            <p>OCD Live diffuse vos opportunités auprès de milliers de jeunes talents motivés.</p>
          </div>
          <Link className="btn white" href="/contact">
            Publier une offre →
          </Link>
        </div>
      </section>
    </main>
  );
}
