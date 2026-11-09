"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, ExternalLink } from "lucide-react";
import { BOVAN_VIDEOS, YOUTH_PHOTOS } from "@/lib/data";
import AfricaMapGraphic from "@/components/AfricaMapGraphic";
import VideoModal from "@/components/VideoModal";

export default function BovanCommunitySection() {
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    title: string;
    badge?: string;
  } | null>(null);

  const handleOpenVideo = (e: React.MouseEvent, url: string, title: string, badge?: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveVideo({ url, title, badge });
  };

  return (
    <>
      {/* 5. GÉNÉRATION OCD — LE MOUVEMENT DU TERRAIN */}
      <section className="community-section" id="communaute">
        <div className="container">
          <div className="section-head">
            <div>
              <label>
                #LesOpportunitesCestDehors · La Voix de Bovan & le Mouvement
              </label>
              <h2>
                Le direct n'attend pas. <em>L'énergie du terrain non plus.</em>
              </h2>
              <p>
                Fondé par le PDG <strong>Bovan</strong>, OCD Live donne la
                parole à ceux qui construisent, qui créent et qui osent sortir.
                Retrouvez nos vidéos, nos directs et la communauté des jeunes
                bâtisseurs.
              </p>
            </div>
            <a
              className="btn orange"
              href="https://www.facebook.com/share/r/1cPEQC9cbn/"
              onClick={(e) =>
                handleOpenVideo(
                  e,
                  "https://www.facebook.com/share/r/1cPEQC9cbn/",
                  "Tu peux vendre sur un compte de 4 millions d'abonnés",
                  "VIDÉO BOVAN · 4M D'ABONNÉS"
                )
              }
            >
              ▶ Lancer la vidéo (4M d'abonnés)
            </a>
          </div>

          {/* SPOT 2 : CARTE PANAFRICAINE DU MOUVEMENT BOVAN */}
          <div className="community-pan-african-card">
            <div className="community-map-col">
              <AfricaMapGraphic variant="community" showRays={true} />
            </div>
            <div className="community-text-col">
              <span className="community-tag">🌍 Rayonnement Panafricain</span>
              <h3>
                Né dans la rue à Lomé, <em>propulsé sur tout le continent.</em>
              </h3>
              <p>
                Le mouvement <strong>#LesOpportunitesCestDehors</strong> créé
                par <strong>Bovan</strong> rassemble tous les jeunes,
                commerçants, créateurs et bâtisseurs qui refusent d'attendre
                dans leur chambre. Depuis nos studios et régies mobiles à Lomé,
                nous diffusons l'énergie de ceux qui entreprennent au Togo, en
                Afrique de l'Ouest et à travers toute la diaspora.
              </p>
              <div className="community-badges">
                <span>📍 QG Central : Lomé (Togo)</span>
                <span>📡 Déploiements UEMOA & Sous-région</span>
                <span>⚡ Liaison Satellite Starlink Broadcast</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <img
                  src="/images/bovann-avatar.jpg"
                  alt="Bovann — PDG & Fondateur OCD Live"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center",
                    border: "2px solid var(--orange)",
                    boxShadow: "0 0 20px rgba(243, 107, 11, 0.45)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <strong style={{ display: "block", color: "#fff", fontSize: "15px", letterSpacing: "-0.2px" }}>
                    Bovann
                  </strong>
                  <small style={{ color: "var(--orange)", fontSize: "11px", fontWeight: 700, display: "block", marginTop: "2px" }}>
                    ★ PDG d'OCD Live & Initiateur du Mouvement #LesOpportunitesCestDehors
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* 1. VIDÉOS DU PDG BOVAN EN GRAND FORMAT */}
          {BOVAN_VIDEOS.length > 0 && (
            <div className="bovan-videos-layout">
              {/* Vidéo Principale Grand Format */}
              <div
                className="bovan-video-main"
                style={{ cursor: "pointer" }}
                onClick={(e) =>
                  handleOpenVideo(
                    e,
                    BOVAN_VIDEOS[0].youtubeUrl,
                    BOVAN_VIDEOS[0].title,
                    BOVAN_VIDEOS[0].badge
                  )
                }
              >
                <div className="bovan-thumb-wrap">
                  <img
                    src={BOVAN_VIDEOS[0].thumbnail}
                    alt={BOVAN_VIDEOS[0].title}
                  />
                  <div className="bovan-play-overlay">
                    <div className="bovan-play-btn" title="Lire la vidéo sans quitter le site">
                      <Play fill="currentColor" size={26} />
                    </div>
                  </div>
                  <span className="bovan-video-badge">
                    {BOVAN_VIDEOS[0].badge}
                  </span>
                  <span className="bovan-video-duration">
                    {BOVAN_VIDEOS[0].duration}
                  </span>
                </div>
                <div className="bovan-video-info">
                  <div className="bovan-video-meta">
                    <span style={{ color: "var(--orange)", fontWeight: 800 }}>
                      ● BOVAN PDG
                    </span>
                    <span>·</span>
                    <span>{BOVAN_VIDEOS[0].views}</span>
                    <span>·</span>
                    <span style={{ color: "#ff8a24", fontWeight: 700 }}>
                      ▶ Cliquer pour lire sur le site
                    </span>
                  </div>
                  <h3>{BOVAN_VIDEOS[0].title}</h3>
                  <p>{BOVAN_VIDEOS[0].description}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "16px",
                      paddingTop: "14px",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        fontWeight: 800,
                        color: "var(--orange)",
                      }}
                    >
                      ▶ Regarder la vidéo maintenant
                    </span>
                    <a
                      href={BOVAN_VIDEOS[0].youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "11px",
                        color: "#888",
                        textDecoration: "none",
                      }}
                    >
                      <span>Ouvrir sur Facebook</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Vidéos Secondaires */}
              <div className="bovan-secondary-videos">
                {BOVAN_VIDEOS.slice(1).map((vid) => (
                  <div
                    key={vid.id}
                    className="bovan-video-card"
                    style={{ cursor: "pointer" }}
                    onClick={(e) =>
                      handleOpenVideo(e, vid.youtubeUrl, vid.title, vid.badge)
                    }
                  >
                    <div className="bovan-card-thumb">
                      <img src={vid.thumbnail} alt={vid.title} />
                      <div className="bovan-play-overlay">
                        <div className="bovan-play-btn">
                          <Play fill="currentColor" size={14} />
                        </div>
                      </div>
                      <span className="bovan-video-duration">
                        {vid.duration}
                      </span>
                    </div>
                    <div className="bovan-card-body">
                      <span
                        style={{
                          color: "var(--orange)",
                          fontSize: "10px",
                          fontWeight: 800,
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {vid.badge}
                      </span>
                      <h4>{vid.title}</h4>
                      <p>{vid.description}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "8px",
                          fontSize: "11px",
                        }}
                      >
                        <span style={{ color: "var(--orange)", fontWeight: 700 }}>
                          ▶ Lire sur le site
                        </span>
                        <a
                          href={vid.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{ color: "#777", textDecoration: "none" }}
                        >
                          Facebook ↗
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. GALERIE DES JEUNES DU MOUVEMENT EN ACTION */}
          <div className="youth-gallery-head">
            <div>
              <span className="eyebrow">
                <i /> Sur le terrain · La réalité du dehors
              </span>
              <h3>Les Jeunes du Mouvement en Action</h3>
              <p>
                Chantiers, ateliers, tournages et street food : la jeunesse
                active filmée par OCD Live.
              </p>
            </div>
            <Link className="btn outline" href="/opportunites">
              Rejoindre nos équipes sur le terrain →
            </Link>
          </div>

          <div className="youth-photos-grid">
            {YOUTH_PHOTOS.map((photo) => {
              const isVideo = photo.isVideo || photo.facebookUrl?.includes("/reel/") || photo.facebookUrl?.includes("/r/");

              return (
                <div
                  key={photo.id}
                  className="youth-photo-card"
                  onClick={(e) => {
                    if (isVideo && photo.facebookUrl) {
                      handleOpenVideo(
                        e,
                        photo.facebookUrl,
                        photo.title,
                        "REEL EN DIRECT · OCD LIVE"
                      );
                    } else if (photo.facebookUrl) {
                      window.open(photo.facebookUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  title={
                    isVideo
                      ? "Cliquer pour regarder la vidéo sur le site"
                      : "Consulter la publication sur Facebook"
                  }
                >
                  {/* Photo cadrée naturellement sans déformation */}
                  <div className="youth-card-img-wrap">
                    <img src={photo.image} alt={photo.title} />

                    {/* Badges du haut */}
                    <div className="youth-card-badges-top">
                      <span className="youth-loc-badge">📍 {photo.location}</span>
                      {isVideo ? (
                        <span className="youth-video-badge">▶ Vidéo Reel</span>
                      ) : (
                        <span className="youth-source-badge">f Post ↗</span>
                      )}
                    </div>

                    {/* Bouton Play au centre si vidéo */}
                    {isVideo && (
                      <div className="youth-card-play-center">
                        <div className="youth-mini-play-btn">
                          <Play fill="currentColor" size={20} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Contenu texte spacieux et aéré sous la photo */}
                  <div className="youth-card-content">
                    <span className="youth-card-tag">{photo.hashtag}</span>
                    <h4 className="youth-card-title">{photo.title}</h4>
                    <p className="youth-card-role">{photo.role}</p>

                    <div className="youth-card-footer">
                      <span style={{ color: isVideo ? "var(--orange)" : "#aaa", fontWeight: 700 }}>
                        {isVideo ? "▶ Regarder la vidéo" : "Voir la publication Facebook"}
                      </span>
                      <span style={{ color: "var(--orange)" }}>↗</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODALE DE LECTURE VIDÉO DIRECTEMENT SUR LE SITE */}
      <VideoModal
        isOpen={!!activeVideo}
        videoUrl={activeVideo?.url || ""}
        title={activeVideo?.title || ""}
        badge={activeVideo?.badge}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
