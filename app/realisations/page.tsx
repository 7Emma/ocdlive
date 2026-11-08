"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA, ProjectItem } from "@/lib/data";
import "./realisations.css";

const CATEGORIES = [
  { key: "ALL", label: "Toutes les réalisations" },
  { key: "Conference", label: "Conférences & Sommets" },
  { key: "Plateau", label: "Plateaux & Émissions" },
  { key: "Corporate", label: "Films Corporate" },
  { key: "Live", label: "Concerts & Live" },
];

export default function RealisationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects: ProjectItem[] =
    selectedCategory === "ALL"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <main style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: "50px" }}>
        <div className="section-head" style={{ marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">
              <i /> Ceux qui sont sortis
            </div>
            <h1>
              Le savoir-faire <em>en images.</em>
            </h1>
            <p>
              Découvrez une sélection de captations en direct, de plateaux d'émission et de
              sommets internationaux réalisés par les équipes d'OCD Live.
            </p>
          </div>
          <Link className="btn orange" href="/reservation">
            Réserver une captation ↗
          </Link>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="container" style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", paddingBottom: "20px", borderBottom: "1px solid var(--line)" }}>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
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
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div className="work-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/realisations/${project.slug}`}
              className="work-card"
              style={{ minHeight: "340px", display: "block", textDecoration: "none" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <span className="shade" />
              <span className="work-title">
                <small>{project.category} · {project.year}</small>
                <b>{project.title}</b>
                <span style={{ fontSize: "12px", color: "var(--muted)", marginTop: "4px" }}>
                  {project.client}
                </span>
              </span>
              <i>↗</i>
            </Link>
          ))}
        </div>
        <p className="disclaimer" style={{ textAlign: "center", marginTop: "30px" }}>
          Photographies et captations officielles issues des régies et du studio OCD Live.
        </p>
      </section>

      {/* Action Band */}
      <section className="contact">
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Votre événement mérite une captation de standard broadcast</small>
            <h2>Un projet de conférence, concert ou émission ?</h2>
            <p>Nos régies mobiles 4K interviennent avec réactivité et précision.</p>
          </div>
          <Link className="btn white" href="/reservation">
            Réserver ma captation →
          </Link>
        </div>
      </section>
    </main>
  );
}
