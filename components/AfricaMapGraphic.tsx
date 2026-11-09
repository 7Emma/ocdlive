"use client";

import React from "react";

export interface AfricaMapGraphicProps {
  variant?: "hero" | "community" | "flank" | "about" | "footer" | "admin";
  className?: string;
  style?: React.CSSProperties;
  showRays?: boolean;
  showLomeBeacon?: boolean;
  interactive?: boolean;
}

export default function AfricaMapGraphic({
  variant = "hero",
  className = "",
  style,
  showRays = true,
  showLomeBeacon = true,
}: AfricaMapGraphicProps) {
  // Coordonnées clés projetées sur le canevas 500 x 560
  // Lomé (Togo) : x=172, y=282
  const lome = { x: 172, y: 282, label: "Lomé (Togo)", sub: "Studio & Régie Centrale OCD Live" };

  // Villes connectées pour le réseau panafricain
  const nodes = [
    { id: "abidjan", x: 105, y: 276, name: "Abidjan" },
    { id: "dakar", x: 26, y: 198, name: "Dakar" },
    { id: "lagos", x: 202, y: 284, name: "Lagos / Cotonou" },
    { id: "douala", x: 242, y: 310, name: "Douala" },
    { id: "kinshasa", x: 258, y: 375, name: "Kinshasa" },
    { id: "nairobi", x: 418, y: 315, name: "Nairobi" },
    { id: "johannesburg", x: 325, y: 495, name: "Johannesburg" },
    { id: "casablanca", x: 135, y: 70, name: "Casablanca" },
  ];

  // Tracé précis du continent Africain (viewBox 0 0 500 560)
  const africaPath =
    "M 155, 38 " +
    "C 175, 36 215, 30 240, 22 " +
    "C 255, 18 268, 25 275, 42 " +
    "C 285, 68 290, 85 320, 85 " +
    "C 345, 85 365, 78 390, 82 " +
    "C 405, 85 415, 95 410, 115 " +
    "C 402, 140 405, 175 425, 205 " +
    "C 440, 215 478, 225 492, 248 " +
    "C 475, 275 450, 310 435, 345 " +
    "C 420, 375 405, 415 390, 450 " +
    "C 370, 485 350, 515 325, 538 " +
    "C 310, 548 295, 550 280, 545 " +
    "C 265, 535 245, 500 238, 465 " +
    "C 230, 430 225, 395 220, 360 " +
    "C 218, 335 225, 315 245, 305 " +
    "C 245, 305 220, 290 195, 288 " +
    "C 175, 285 145, 282 120, 280 " +
    "C 95, 278 70, 275 50, 260 " +
    "C 35, 245 28, 225 25, 198 " +
    "C 24, 180 40, 155 60, 130 " +
    "C 85, 100 115, 70 135, 52 " +
    "C 145, 42 150, 40 155, 38 Z";

  // Tracé de Madagascar
  const madagascarPath =
    "M 430, 405 " +
    "C 445, 395 460, 415 462, 445 " +
    "C 465, 475 450, 498 438, 495 " +
    "C 428, 490 422, 465 422, 440 " +
    "C 422, 420 425, 410 430, 405 Z";

  if (variant === "footer") {
    return (
      <div
        className={`africa-map-footer ${className}`}
        style={{
          position: "absolute",
          right: "2%",
          bottom: "10px",
          width: "360px",
          height: "380px",
          pointerEvents: "none",
          opacity: 0.18,
          zIndex: 0,
          ...style,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 500 560" fill="none" style={{ width: "100%", height: "100%" }}>
          <path
            d={africaPath}
            stroke="#f36b0b"
            strokeWidth="3"
            fill="rgba(243, 107, 11, 0.04)"
            strokeDasharray="6 4"
          />
          <path
            d={madagascarPath}
            stroke="#f36b0b"
            strokeWidth="2.5"
            fill="rgba(243, 107, 11, 0.04)"
            strokeDasharray="4 4"
          />
          <circle cx={lome.x} cy={lome.y} r="8" fill="#f36b0b" />
          <circle cx={lome.x} cy={lome.y} r="18" stroke="#f36b0b" strokeWidth="2" opacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === "flank") {
    return (
      <div
        className={`africa-map-flank ${className}`}
        style={{
          position: "absolute",
          right: "-40px",
          top: "480px",
          width: "min(420px, 45vw)",
          height: "500px",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.65,
          filter: "drop-shadow(0 0 35px rgba(243,107,11,0.45))",
          ...style,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 500 560" fill="none" style={{ width: "100%", height: "100%" }}>
          <defs>
            <linearGradient id="africaFlankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f36b0b" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#ff8a24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f36b0b" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d={africaPath}
            stroke="url(#africaFlankGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="rgba(243, 107, 11, 0.03)"
          />
          <path
            d={africaPath}
            stroke="#ff9436"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d={madagascarPath}
            stroke="url(#africaFlankGrad)"
            strokeWidth="4"
            fill="rgba(243, 107, 11, 0.03)"
          />
          {/* Balise Lomé Togo */}
          <circle cx={lome.x} cy={lome.y} r="6" fill="#f36b0b" />
          <circle cx={lome.x} cy={lome.y} r="18" stroke="#f36b0b" strokeWidth="2" strokeDasharray="3 3">
            <animate attributeName="r" values="6;26" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    );
  }

  if (variant === "admin") {
    return (
      <div
        className={`africa-map-admin ${className}`}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "340px",
          height: "240px",
          background: "linear-gradient(145deg, rgba(20,16,14,0.95), rgba(12,12,12,0.98))",
          border: "1px solid rgba(243, 107, 11, 0.25)",
          borderRadius: "16px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          ...style,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", color: "var(--adm-orange)", letterSpacing: "1px" }}>
            🌍 Signal Broadcast Panafricain
          </span>
          <span style={{ fontSize: "10.5px", background: "rgba(34, 197, 94, 0.15)", color: "#4ade80", border: "1px solid rgba(34, 197, 94, 0.3)", padding: "2px 8px", borderRadius: "50px", fontWeight: 700 }}>
            LOMÉ · HUB ACTIF
          </span>
        </div>

        <div style={{ position: "relative", height: "150px", display: "grid", placeItems: "center" }}>
          <svg viewBox="0 0 500 560" fill="none" style={{ height: "100%", maxWidth: "100%", filter: "drop-shadow(0 0 14px rgba(243, 107, 11, 0.35))" }}>
            <path
              d={africaPath}
              stroke="rgba(243, 107, 11, 0.75)"
              strokeWidth="4"
              fill="rgba(243, 107, 11, 0.08)"
            />
            <path
              d={madagascarPath}
              stroke="rgba(243, 107, 11, 0.75)"
              strokeWidth="3"
              fill="rgba(243, 107, 11, 0.08)"
            />
            {/* Lignes vers les capitales */}
            {nodes.slice(0, 4).map((node) => (
              <line
                key={node.id}
                x1={lome.x}
                y1={lome.y}
                x2={node.x}
                y2={node.y}
                stroke="#f36b0b"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                opacity="0.6"
              />
            ))}
            {/* Point Lomé */}
            <circle cx={lome.x} cy={lome.y} r="8" fill="#f36b0b" />
            <circle cx={lome.x} cy={lome.y} r="18" stroke="#f36b0b" strokeWidth="2.5">
              <animate attributeName="r" values="8;24" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <div style={{ fontSize: "11px", color: "#aaa", textAlign: "center" }}>
          Émission régie direct depuis le <strong>Studio OCD Live (Lomé, Togo)</strong>
        </div>
      </div>
    );
  }

  // Variant "hero", "community", "about"
  return (
    <div
      className={`africa-map-graphic ${variant} ${className}`}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: variant === "about" ? "520px" : variant === "community" ? "480px" : "460px",
        height: "auto",
        aspectRatio: "500 / 560",
        margin: "0 auto",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 500 560"
        fill="none"
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(0 0 35px rgba(243, 107, 11, 0.45))",
        }}
      >
        <defs>
          <linearGradient id="africaStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9436" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#f36b0b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#d15200" stopOpacity="0.75" />
          </linearGradient>

          <radialGradient id="africaFillGrad" cx="35%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#f36b0b" stopOpacity="0.14" />
            <stop offset="60%" stopColor="#f36b0b" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#111111" stopOpacity="0.25" />
          </radialGradient>

          <filter id="africaGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Lignes de latitude / longitude stylisées en arrière-plan */}
        <g opacity="0.12" stroke="#ffffff">
          <circle cx="250" cy="280" r="230" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="20" y1="280" x2="480" y2="280" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="250" y1="20" x2="250" y2="540" strokeWidth="0.8" strokeDasharray="4 4" />
        </g>

        {/* Silhouette principale de l'Afrique */}
        <path
          d={africaPath}
          fill="url(#africaFillGrad)"
          stroke="url(#africaStrokeGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#africaGlow)"
        />

        {/* Tracé fin intérieur néon */}
        <path
          d={africaPath}
          fill="none"
          stroke="#ffaa5c"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Madagascar */}
        <path
          d={madagascarPath}
          fill="url(#africaFillGrad)"
          stroke="url(#africaStrokeGrad)"
          strokeWidth="2.5"
          filter="url(#africaGlow)"
        />

        {/* Rayons de diffusion broadcast depuis Lomé (Togo) */}
        {showRays && (
          <g className="broadcast-rays" opacity="0.65">
            {nodes.map((node) => (
              <g key={node.id}>
                <line
                  x1={lome.x}
                  y1={lome.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="#f36b0b"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-16"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </line>
                {/* Petit point de relais satellite */}
                <circle cx={node.x} cy={node.y} r="3" fill="#ffffff" opacity="0.8" />
                <text
                  x={node.x + 6}
                  y={node.y + 3}
                  fill="#ccc"
                  fontSize="8.5"
                  fontWeight="600"
                  fontFamily="system-ui, sans-serif"
                  opacity="0.85"
                >
                  {node.name}
                </text>
              </g>
            ))}
          </g>
        )}

        {/* BALISE MAÎTRESSE : LOMÉ (TOGO) */}
        {showLomeBeacon && (
          <g className="lome-beacon" filter="drop-shadow(0 0 16px #f36b0b)">
            {/* Onde pulsante 1 */}
            <circle cx={lome.x} cy={lome.y} r="10" stroke="#f36b0b" strokeWidth="2.5" fill="none">
              <animate attributeName="r" values="8;36" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Onde pulsante 2 */}
            <circle cx={lome.x} cy={lome.y} r="18" stroke="#ff8a24" strokeWidth="1.8" fill="none">
              <animate attributeName="r" values="12;50" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.85;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            </circle>

            {/* Point central éclatant */}
            <circle cx={lome.x} cy={lome.y} r="6.5" fill="#ffffff" />
            <circle cx={lome.x} cy={lome.y} r="4.5" fill="#f36b0b" />

            {/* Badge étiquette Lomé */}
            <g transform={`translate(${lome.x + 14}, ${lome.y - 18})`}>
              <rect
                x="0"
                y="0"
                width="140"
                height="34"
                rx="8"
                fill="rgba(18, 14, 12, 0.92)"
                stroke="#f36b0b"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="17" r="4" fill="#22c55e" />
              <text
                x="22"
                y="15"
                fill="#ffffff"
                fontSize="10"
                fontWeight="800"
                fontFamily="system-ui, sans-serif"
              >
                LOMÉ (TOGO)
              </text>
              <text
                x="22"
                y="26"
                fill="#ff8a24"
                fontSize="8"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                QG STUDIO OCD LIVE ◉
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
