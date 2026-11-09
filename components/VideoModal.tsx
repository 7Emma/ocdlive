"use client";

import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  badge?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  badge,
}: VideoModalProps) {
  // Gestion de la touche Échap pour fermer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // URL standard d'embed vidéo de Facebook
  const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    videoUrl
  )}&show_text=false&autoplay=true`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(5, 5, 5, 0.92)",
        backdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "videoModalFadeIn 0.25s ease-out",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "460px",
          background: "#111111",
          border: "1px solid rgba(243, 107, 11, 0.4)",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow:
            "0 25px 70px rgba(0, 0, 0, 0.95), 0 0 40px rgba(243, 107, 11, 0.25)",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header de la modale */}
        <div
          style={{
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(20, 20, 20, 0.9)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#f36b0b",
                boxShadow: "0 0 10px #f36b0b",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "#ff8a24",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
              }}
            >
              {badge || "LECTURE EN DIRECT · OCD LIVE"}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Fermer la vidéo"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#fff",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f36b0b";
              e.currentTarget.style.color = "#111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.color = "#fff";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Cadre vidéo Facebook Embed (format vertical 9:16) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "9 / 16",
            maxHeight: "72vh",
            background: "#000000",
          }}
        >
          <iframe
            src={embedUrl}
            title={title}
            width="100%"
            height="100%"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              display: "block",
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        {/* Footer de la modale */}
        <div
          style={{
            padding: "16px 20px",
            background: "#0d0d0d",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h4
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.4,
            }}
          >
            {title}
          </h4>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "11px", color: "#888" }}>
              Diffusé sur les canaux officiels OCD Live / Bovann
            </span>

            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "11px",
                fontWeight: 700,
                color: "#ff8a24",
                textDecoration: "none",
                padding: "6px 12px",
                borderRadius: "50px",
                background: "rgba(243, 107, 11, 0.12)",
                border: "1px solid rgba(243, 107, 11, 0.4)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f36b0b";
                e.currentTarget.style.color = "#111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(243, 107, 11, 0.12)";
                e.currentTarget.style.color = "#ff8a24";
              }}
            >
              <span>Voir sur Facebook</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
