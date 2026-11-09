import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Building,
  Tv,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { PROJECTS_DATA, WHATSAPP_RESERVATION_URL } from "@/lib/data";
import "../realisations.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Projet non trouvé | OCD Live" };

  return {
    title: `${project.title} — Réalisation OCD Live`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — OCD Live`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS_DATA.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="project-page">
      {/* 1. BARRE DE NAVIGATION & RETOUR */}
      <div className="container project-nav-bar">
        <div className="project-breadcrumb">
          <Link href="/">Accueil</Link>
          <span>›</span>
          <Link href="/realisations">Réalisations</Link>
          <span>›</span>
          <span style={{ color: "#fff" }}>{project.title}</span>
        </div>

        <Link href="/realisations" className="project-back-btn">
          ← Toutes les réalisations
        </Link>
      </div>

      {/* 2. EN-TÊTE DU PROJET */}
      <header className="container project-header">
        <div className="project-badges">
          <span className="badge-category">{project.category}</span>
          <span className="badge-meta">
            <Building className="w-3.5 h-3.5" />
            <span>{project.client}</span>
          </span>
          <span className="badge-meta">
            <Calendar className="w-3.5 h-3.5" />
            <span>Production {project.year}</span>
          </span>
          <span className="badge-meta">
            <Layers className="w-3.5 h-3.5" />
            <span>Multicaméra 4K & Régie Mobile</span>
          </span>
        </div>

        <h1 className="project-title">
          {project.title}
        </h1>

        <p className="project-summary">
          {project.summary}
        </p>
      </header>

      {/* 3. GRAND ÉCRAN MÉDIA BROADCAST */}
      <div className="container">
        <div className="project-media-wrap">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="project-media-overlay" />

          {/* Badge broadcast en haut à gauche */}
          <div className="media-live-tag">
            <i /> MASTER ARCHIVE BROADCAST 4K UHD
          </div>

          {/* Bande d'information en bas de l'écran */}
          <div className="media-bottom-info">
            <span>📹 {project.category.toUpperCase()} · RÉGIE EXTÉRIEURE OCD LIVE</span>
            <span>SIGNAL DIRECT HD/4K MULTIPLATEFORME</span>
          </div>
        </div>
      </div>

      {/* 4. GRILLE DE CONTENU : NARRATIVE & SIDEBAR TECHNIQUE */}
      <section className="container">
        <div className="project-content-grid">
          {/* Colonne gauche : Récit & KPI */}
          <div className="narrative-card">
            <div className="narrative-header">
              <label>
                <i /> CONTEXTE DE PRODUCTION & DÉFI TECHNIQUE
              </label>
              <h2>
                La réponse technique déployée par <em>OCD Live.</em>
              </h2>
              <p className="narrative-lead">
                {project.description}
              </p>
            </div>

            {/* Citation / Philosophie OCD */}
            <div className="narrative-quote">
              <p style={{ margin: 0 }}>
                💡 <strong>La vision OCD Live :</strong> « On ne réussit pas enfermé dans sa chambre : c&apos;est sur le terrain, face au public et aux aléas du direct que naissent les vraies opportunités. Notre mission est d&apos;apporter une réalisation broadcast de niveau mondial à ceux qui bougent et construisent. »
              </p>
            </div>

            {/* Métriques / Indicateurs clés (KPI) */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <div className="metrics-section-title">
                  <span /> IMPACT & CHIFFRES CLÉS DU DIRECT
                </div>
                <div className="metrics-grid">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="metric-card">
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Colonne droite : Carte Prestations & Setup technique */}
          <aside>
            <div className="sidebar-card">
              {/* Section Livrables */}
              <div>
                <div className="sidebar-section-title">
                  <div className="sidebar-icon-wrap">
                    <Tv />
                  </div>
                  <h3>Prestations & Livrables</h3>
                </div>
                <ul className="deliverables-list">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <span className="deliverables-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-divider" />

              {/* Section Setup Technique */}
              <div>
                <div className="sidebar-section-title">
                  <div className="sidebar-icon-wrap">
                    <Cpu />
                  </div>
                  <h3>Dispositif Technique Déployé</h3>
                </div>
                <div className="tech-pills-wrap">
                  {project.techSetup.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sidebar-divider" />

              {/* Appel à l'action vers la réservation */}
              <div>
                <a
                  href={WHATSAPP_RESERVATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="sidebar-cta-btn"
                >
                  Planifier sur WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <p className="sidebar-note" style={{ marginTop: "14px" }}>
                  <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-[#f36b0b]" />
                  Capacité maîtrisée : 4 lives maximum par jour
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 5. AUTRES RÉALISATIONS RECOMMANDÉES */}
      {relatedProjects.length > 0 && (
        <section className="container related-section">
          <div className="related-head">
            <div>
              <div className="eyebrow">
                <i /> Portfolio OCD Live
              </div>
              <h2>
                Autres réalisations <em>à découvrir.</em>
              </h2>
            </div>
            <Link href="/realisations" className="project-back-btn">
              Voir tout le portfolio →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "80px",
            }}
          >
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                href={`/realisations/${rel.slug}`}
                className="work-card"
                style={{
                  minHeight: "320px",
                  display: "block",
                  textDecoration: "none",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <Image
                  src={rel.image}
                  alt={rel.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="shade" />
                <span className="work-title">
                  <small style={{ color: "var(--orange)", fontWeight: 800 }}>
                    {rel.category} · {rel.year}
                  </small>
                  <b style={{ fontSize: "20px", margin: "6px 0 2px" }}>{rel.title}</b>
                  <span style={{ fontSize: "12px", color: "#bbb" }}>
                    {rel.client}
                  </span>
                </span>
                <i>↗</i>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 6. BANDE D'ACTION FINALE */}
      <section className="contact">
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Votre projet commence dehors</small>
            <h2>Vous souhaitez obtenir une estimation pour votre événement ?</h2>
            <p>Notre régisseur général vous propose un cadrage technique précis sous 24h.</p>
          </div>
          <a
            className="btn white"
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noreferrer"
          >
            Réserver sur WhatsApp →
          </a>
        </div>
      </section>
    </article>
  );
}
