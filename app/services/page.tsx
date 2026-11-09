import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  Clapperboard,
  Radio,
  Calendar,
  Film,
  CheckCircle2,
  Cpu,
  PackageCheck,
  Video,
  Globe2,
} from "lucide-react";
import {
  SERVICES_DATA,
  LIVE_FORMATS,
  WHATSAPP_RESERVATION_URL,
  getWhatsAppReservationUrl,
} from "@/lib/data";
import PageBackgroundGraphics from "@/components/PageBackgroundGraphics";

export const metadata: Metadata = {
  title: "Nos Services Audiovisuels & Formats de Lives — OCD Live",
  description:
    "Découvrez les 2 formats de direct (présentiel et à distance) et les 5 expertises audiovisuelles d'OCD Live : captation multicaméra 4K, streaming, régie mobile et studio.",
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Camera: <Camera className="w-8 h-8 text-[#f36b0b]" />,
  Clapperboard: <Clapperboard className="w-8 h-8 text-[#f36b0b]" />,
  Radio: <Radio className="w-8 h-8 text-[#f36b0b]" />,
  Calendar: <Calendar className="w-8 h-8 text-[#f36b0b]" />,
  Film: <Film className="w-8 h-8 text-[#f36b0b]" />,
};

export default function ServicesPage() {
  return (
    <main className="page-with-bg-graphics" style={{ paddingTop: "40px", paddingBottom: "90px", position: "relative" }}>
      {/* GRAPHISME D'ARRIÈRE-PLAN : VAGUE ORANGE & SILHOUETTE AFRIQUE */}
      <PageBackgroundGraphics />

      {/* Header Introduction */}
      <section className="container" style={{ marginBottom: "50px", position: "relative", zIndex: 2 }}>
        <div className="section-head" style={{ marginBottom: "20px" }}>
          <div>
            <div className="eyebrow">
              <i /> L'Offre OCD Live
            </div>
            <h1>
              Le terrain, en direct <em>et en images.</em>
            </h1>
            <p>
              Des solutions broadcast taillées pour capter l'énergie de ceux qui
              sortent, bâtissent et transforment leurs idées en actions
              concrètes.
            </p>
          </div>
          <a
            className="btn orange"
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noreferrer"
          >
            Réserver sur WhatsApp ↗
          </a>
        </div>
      </section>

      {/* =========================================================================
          SECTION DÉDIÉE : LES DEUX FORMATS DE LIVES
      ========================================================================= */}
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
              <label>Les Formats de Direct</label>
              <h2>
                Deux façons de sortir, <em>une seule intensité.</em>
              </h2>
              <p>
                Parce qu'on ne réussit pas dans sa chambre, OCD Live propose
                deux modalités de direct pour vous faire entendre et vous
                connecter au terrain.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {LIVE_FORMATS.map((format, idx) => (
              <div
                key={format.id}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(28, 28, 28, 0.9), rgba(16, 16, 16, 0.98))",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  padding: "36px 30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "24px",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                  transition: "all 0.3s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "18px",
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(243, 107, 11, 0.15)",
                        color: "var(--light)",
                        border: "1px solid rgba(243, 107, 11, 0.4)",
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "5px 14px",
                        borderRadius: "50px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {format.badge}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--orange)",
                        fontWeight: 800,
                        letterSpacing: "1px",
                      }}
                    >
                      FORMAT #{idx + 1}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    {idx === 0 ? (
                      <Video className="w-7 h-7 text-[#f36b0b] shrink-0" />
                    ) : (
                      <Globe2 className="w-7 h-7 text-[#f36b0b] shrink-0" />
                    )}
                    <h3
                      style={{
                        margin: 0,
                        font: "800 24px Manrope, sans-serif",
                        color: "#fff",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {format.title}
                    </h3>
                  </div>
                  <small
                    style={{
                      color: "var(--orange)",
                      fontWeight: 700,
                      fontSize: "13px",
                      display: "block",
                      marginBottom: "16px",
                    }}
                  >
                    {format.subtitle}
                  </small>
                  <p
                    style={{
                      color: "#d0ceca",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      margin: "0 0 20px 0",
                    }}
                  >
                    {format.concept}
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: "18px",
                      marginBottom: "18px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "var(--light)",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      Innovations & Atouts Techniques
                    </span>
                    <ul
                      style={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {format.innovations?.map((inn, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontSize: "13px",
                            color: "#e2e0dc",
                            lineHeight: 1.5,
                          }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#f36b0b] shrink-0 mt-0.5" />
                          <span>{inn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: "14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      fontSize: "12.5px",
                    }}
                  >
                    <p style={{ margin: 0, color: "#ccc" }}>
                      <strong style={{ color: "#fff" }}>Pour qui :</strong>{" "}
                      {format.forWhom}
                    </p>
                    <p style={{ margin: 0, color: "#aaa" }}>
                      <strong style={{ color: "#fff" }}>Impact Réseau :</strong>{" "}
                      {format.socialViral}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingTop: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "18px",
                    }}
                  >
                    {format.techPills?.map((pill, i) => (
                      <span
                        key={i}
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          color: "#aaa",
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "3px 10px",
                          borderRadius: "15px",
                        }}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppReservationUrl(format.title)}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn ${idx === 0 ? "orange" : "outline"}`}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Réserver en{" "}
                    {format.id === "live-presentiel"
                      ? "présentiel"
                      : "à distance"}{" "}
                    sur WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LES 5 SERVICES FONDAMENTAUX
      ========================================================================= */}
      <section className="container" style={{ marginTop: "75px" }}>
        <div className="section-head">
          <div>
            <label>Catalogue de Prestations</label>
            <h2>
              Une couverture intégrale <em>de vos besoins.</em>
            </h2>
            <p>
              De la préparation scénaristique à la retransmission satellite
              multi-plateformes, explorez nos 5 piliers de savoir-faire.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {SERVICES_DATA.map((service, index) => (
            <article
              key={service.id}
              id={service.slug}
              style={{
                scrollMarginTop: "100px",
                background: "linear-gradient(145deg, #181818, #101010)",
                border: "1px solid var(--line)",
                borderRadius: "8px",
                padding: "clamp(24px, 4vw, 42px)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "36px",
              }}
            >
              {/* Colonne gauche : Présentation & Bénéfices */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                      background: "rgba(243, 107, 11, 0.15)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    {SERVICE_ICONS[service.iconName]}
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 800,
                        color: "var(--light)",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      Expertise 0{index + 1}
                    </span>
                    <h3
                      style={{
                        margin: 0,
                        font: "800 24px Manrope, sans-serif",
                        color: "#fff",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    color: "#d0ceca",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {service.fullDesc}
                </p>

                <div style={{ marginTop: "8px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      color: "var(--light)",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Bénéfices concrets
                  </span>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "8px",
                    }}
                  >
                    {service.benefits.map((b, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "13px",
                          color: "var(--muted)",
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#f36b0b] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Colonne droite : Livrables & Technologies */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  background: "#0c0c0c",
                  border: "1px solid var(--line)",
                  padding: "26px",
                  borderRadius: "6px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <PackageCheck className="w-4 h-4 text-[#f36b0b]" />
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "#fff",
                      }}
                    >
                      Ce qui vous est livré
                    </span>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {service.deliverables.map((d, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "12px",
                          color: "#aaa",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "var(--orange)" }}>✔ </span> {d}
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "10px",
                    }}
                  >
                    <Cpu className="w-4 h-4 text-[#f36b0b]" />
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "#fff",
                      }}
                    >
                      Technologies mobilisées
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          background: "#161616",
                          border: "1px solid var(--line)",
                          fontSize: "11px",
                          color: "#bbb",
                          padding: "3px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--line)",
                    paddingTop: "16px",
                  }}
                >
                  <a
                    href={WHATSAPP_RESERVATION_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn orange"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Réserver sur WhatsApp ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bandeau Tarifs FCFA & 4 Lives par jour */}
      <section
        className="section"
        style={{
          background: "#0b0b0b",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          marginTop: "75px",
        }}
      >
        <div className="container">
          <div className="section-head">
            <div>
              <label>Transparence & Packs</label>
              <h2>
                Des tarifs clairs en FCFA, <em>sans surprise.</em>
              </h2>
              <p>
                Pack 1h30 dès 15 000 FCFA, Pack 4h à 40 000 FCFA, Live direct à
                100 000 FCFA. Capacité restreinte à 4 lives quotidiens pour un
                accompagnement sur mesure.
              </p>
            </div>
            <Link className="btn orange" href="/tarifs">
              Voir la grille tarifaire complète →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="contact" style={{ marginTop: "75px" }}>
        <div className="container contact-row">
          <b className="contact-symbol">◉</b>
          <div>
            <small>Votre projet commence maintenant</small>
            <h2>Besoin d'une configuration technique sur mesure ?</h2>
            <p>
              Nos régisseurs et réalisateurs étudient votre cahier des charges
              sous 24h.
            </p>
          </div>
          <a
            className="btn white"
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noreferrer"
          >
            Réserver sur WhatsApp ↗
          </a>
        </div>
      </section>
    </main>
  );
}
