"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

export const AFRICA_MAP_THEME = {
  primaryOrange: "#F36B0B",
  brightOrange: "#FF963D",
  vibrantOrange: "#FF7A00",
  glowOrange: "rgba(243,107,11,0.50)",
  landFill: "rgba(243,107,11,0.28)",
  rayLineColor: "#FF8A24",
  beaconColor: "#FF7100",
  textColor: "#FFFFFF",
  textMuted: "#A0A0A0",
};

export const MAIN_HUB_LOME = {
  id: "lome-hub",
  name: "Lomé",
  sub: "Studio Central & Régie Fixe OCD Live",
  coordinates: [1.2228, 6.1319] as [number, number],
  flag: "🇹🇬",
};

export interface PanafricanCity {
  id: string;
  name: string;
  coordinates: [number, number];
  country: string;
  textAnchor?: "start" | "middle" | "end";
  dx?: number;
  dy?: number;
  active?: boolean;
}

/**
 * Villes panafricaines avec coordonnées GPS et décalages optiques précis
 * pour éviter tout chevauchement de texte sur la côte du Golfe de Guinée.
 */
export const PANAFRICAN_CITIES: PanafricanCity[] = [
  {
    id: "dakar",
    name: "Dakar",
    country: "Sénégal",
    coordinates: [-17.45, 14.69],
    textAnchor: "end",
    dx: -10,
    dy: 4,
    active: true,
  },
  {
    id: "abidjan",
    name: "Abidjan",
    country: "Côte d'Ivoire",
    coordinates: [-4.0083, 5.36],
    textAnchor: "end",
    dx: -8,
    dy: -8,
    active: true,
  },
  {
    id: "accra",
    name: "Accra",
    country: "Ghana",
    coordinates: [-0.187, 5.6037],
    textAnchor: "end",
    dx: -8,
    dy: 16,
    active: true,
  },
  {
    id: "cotonou",
    name: "Cotonou",
    country: "Bénin",
    coordinates: [2.43, 6.37],
    textAnchor: "start",
    dx: 8,
    dy: 16,
    active: true,
  },
  {
    id: "lagos",
    name: "Lagos",
    country: "Nigéria",
    coordinates: [3.3792, 6.5244],
    textAnchor: "start",
    dx: 10,
    dy: -6,
    active: true,
  },
  {
    id: "douala",
    name: "Douala",
    country: "Cameroun",
    coordinates: [9.7043, 4.0511],
    textAnchor: "start",
    dx: 10,
    dy: 12,
    active: true,
  },
  {
    id: "kinshasa",
    name: "Kinshasa",
    country: "RDC",
    coordinates: [15.2663, -4.4419],
    textAnchor: "start",
    dx: 12,
    dy: 6,
    active: true,
  },
  {
    id: "kigali",
    name: "Kigali",
    country: "Rwanda",
    coordinates: [29.8739, -1.9403],
    textAnchor: "end",
    dx: -10,
    dy: -4,
    active: true,
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    coordinates: [36.8219, -1.2921],
    textAnchor: "start",
    dx: 12,
    dy: 4,
    active: true,
  },
  {
    id: "addis-ababa",
    name: "Addis-Abeba",
    country: "Éthiopie",
    coordinates: [38.7578, 8.9806],
    textAnchor: "start",
    dx: 12,
    dy: -4,
    active: true,
  },
  {
    id: "casablanca",
    name: "Casablanca",
    country: "Maroc",
    coordinates: [-7.5898, 33.5731],
    textAnchor: "end",
    dx: -10,
    dy: -4,
    active: true,
  },
  {
    id: "johannesburg",
    name: "Johannesburg",
    country: "Afrique du Sud",
    coordinates: [28.0473, -26.2041],
    textAnchor: "start",
    dx: 12,
    dy: 4,
    active: true,
  },
];

// Fichier TopoJSON hébergé localement dans /public/data pour une vitesse maximale et fonctionnement offline
export const LOCAL_GEOGRAPHY_URL = "/data/world-countries-110m.json";
export const CDN_GEOGRAPHY_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const GEOGRAPHY_URL = LOCAL_GEOGRAPHY_URL;

export const AFRICAN_COUNTRIES = new Set([
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cameroon",
  "Cape Verde",
  "Central African Rep.",
  "Chad",
  "Comoros",
  "Congo",
  "Côte d'Ivoire",
  "Dem. Rep. Congo",
  "Djibouti",
  "Egypt",
  "Eq. Guinea",
  "Eritrea",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Senegal",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "S. Sudan",
  "Sudan",
  "eSwatini",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "W. Sahara",
  "Zambia",
  "Zimbabwe",
]);

export interface AfricaMapProps {
  variant?:
    | "default"
    | "hero"
    | "community"
    | "about"
    | "flank"
    | "footer"
    | "admin"
    | "minimal";

  accentColor?: string;
  showRays?: boolean;
  showLomeBeacon?: boolean;
  showCityDots?: boolean;
  showCityNames?: boolean;
  showHubBadge?: boolean;
  pulseSpeed?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function AfricaMap({
  variant = "default",
  accentColor = AFRICA_MAP_THEME.primaryOrange,
  showRays = true,
  showLomeBeacon = true,
  showCityDots = true,
  showCityNames = false,
  showHubBadge = true,
  width = "100%",
  height = "auto",
  className = "",
  style,
  children,
}: AfricaMapProps) {
  const isFooter = variant === "footer";
  const isFlank = variant === "flank";
  const isMinimal = variant === "minimal";

  const cities =
    variant === "minimal" || variant === "footer"
      ? []
      : PANAFRICAN_CITIES;

  // En arrière-plan absolu pour le footer et le flanc (sans impacter la hauteur ni le flux du document)
  const containerStyle: React.CSSProperties = isFooter
    ? {
        position: "absolute",
        right: "-15px",
        bottom: "-20px",
        width: width || "560px",
        maxWidth: "52vw",
        height: height || "480px",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.95,
        background: "transparent",
        overflow: "hidden",
        filter: `drop-shadow(0 0 35px rgba(243, 107, 11, 0.55))`,
        ...style,
      }
    : isFlank
    ? {
        position: "absolute",
        right: "-30px",
        top: "400px",
        width: width || "min(520px, 48vw)",
        height: height || "540px",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.85,
        background: "transparent",
        overflow: "visible",
        filter: `drop-shadow(0 0 35px ${AFRICA_MAP_THEME.glowOrange})`,
        ...style,
      }
    : {
        position: "relative",
        width,
        height,
        aspectRatio: "740 / 760",
        background: "transparent",
        overflow: "visible",
        filter: `drop-shadow(0 0 35px rgba(243, 107, 11, 0.35))`,
        ...style,
      };

  return (
    <div
      className={`africa-map ${variant} ${className}`}
      style={containerStyle}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [18, 2],
          scale: 540,
        }}
        width={740}
        height={760}
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
          background: "transparent",
        }}
      >
        <defs>
          <filter id="africa-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dégradé orange riche, chaleureux et vibrant pour le continent */}
          <radialGradient id="africa-land" cx="35%" cy="38%" r="75%">
            <stop offset="0%" stopColor="#ffa048" stopOpacity="0.46" />
            <stop offset="35%" stopColor="#f36b0b" stopOpacity="0.32" />
            <stop offset="75%" stopColor="#d95400" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#a83a00" stopOpacity="0.14" />
          </radialGradient>

          {/* Dégradé spécifique pour le footer : couleur orange vive, chaude et parfaitement visible */}
          <linearGradient id="africa-land-footer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb366" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#f36b0b" stopOpacity="0.42" />
            <stop offset="80%" stopColor="#d95400" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#a83a00" stopOpacity="0.20" />
          </linearGradient>
        </defs>

        {/* Carte géographique réelle avec frontières nationales fines */}
        <Geographies geography={GEOGRAPHY_URL}>
          {({ geographies }) =>
            geographies
              .filter(
                (geo) =>
                  geo.properties?.name &&
                  AFRICAN_COUNTRIES.has(geo.properties.name)
              )
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isMinimal ? "transparent" : isFooter ? "url(#africa-land-footer)" : "url(#africa-land)"}
                  stroke={isFooter ? "#ffa34d" : accentColor}
                  strokeWidth={isFooter ? 1.5 : 1.25}
                  strokeOpacity={isFooter ? 0.98 : 0.88}
                  style={{
                    outline: "none",
                  }}
                />
              ))
          }
        </Geographies>

        {/* Connexions optiques entre Lomé et les métropoles africaines */}
        {!isMinimal &&
          !isFooter &&
          showRays &&
          cities.map((city) => (
            <React.Fragment key={`ray-group-${city.id}`}>
              {/* Lueur externe pour effet fibre optique néon */}
              <Line
                from={MAIN_HUB_LOME.coordinates}
                to={city.coordinates}
                stroke="#ff6600"
                strokeWidth={4.5}
                strokeOpacity={0.25}
              />
              {/* Ligne pointillée centrale vive */}
              <Line
                from={MAIN_HUB_LOME.coordinates}
                to={city.coordinates}
                stroke={AFRICA_MAP_THEME.rayLineColor}
                strokeWidth={1.8}
                strokeOpacity={0.85}
                strokeDasharray="4 4"
              />
            </React.Fragment>
          ))}

        {/* Villes connectées */}
        {showCityDots &&
          cities.map((city) => (
            <Marker
              key={city.id}
              coordinates={city.coordinates}
            >
              {/* Halo néon du point de ville */}
              <circle
                r={6}
                fill="#f36b0b"
                opacity={0.4}
              />
              <circle
                r={3.8}
                fill="#ff7a00"
                stroke="#ffffff"
                strokeWidth={1}
                filter="url(#africa-glow)"
              />
              <circle
                r={1.8}
                fill="#ffffff"
              />

              {showCityNames && (
                <text
                  x={city.dx ?? 0}
                  y={city.dy ?? -10}
                  textAnchor={city.textAnchor ?? "middle"}
                  fill="#ffffff"
                  fontSize={12}
                  fontWeight={800}
                  fontFamily="system-ui, sans-serif"
                  style={{
                    textShadow: "0 2px 5px rgba(0,0,0,0.98), 0 0 10px rgba(0,0,0,0.9), 0 0 2px #000",
                    pointerEvents: "none",
                  }}
                >
                  {city.name}
                </text>
              )}
            </Marker>
          ))}

        {/* Hub principal : Lomé (avec signal broadcast rayonnant) */}
        {showLomeBeacon && (
          <Marker coordinates={MAIN_HUB_LOME.coordinates}>
            {/* Onde pulsante 1 */}
            <circle
              r={18}
              fill="none"
              stroke="#ff7a00"
              strokeWidth={2.8}
              opacity={0.85}
            >
              <animate
                attributeName="r"
                values="8;45"
                dur="2.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.95;0"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Onde pulsante 2 */}
            <circle
              r={26}
              fill="none"
              stroke="#ffa048"
              strokeWidth={2}
              opacity={0.6}
            >
              <animate
                attributeName="r"
                values="8;70"
                dur="2.4s"
                begin="0.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.7;0"
                dur="2.4s"
                begin="0.8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Point central éclatant du studio Lomé */}
            <circle r={8} fill={AFRICA_MAP_THEME.beaconColor} filter="url(#africa-glow)" />
            <circle r={3.5} fill="#ffffff" />

            {/* Label Hub Lomé au-dessus du point */}
            {!isFooter && showCityNames && (
              <text
                y={-14}
                textAnchor="middle"
                fill="#ff9a3d"
                fontSize={12.5}
                fontWeight={900}
                fontFamily="system-ui, sans-serif"
                style={{
                  textShadow: "0 2px 6px rgba(0,0,0,1), 0 0 12px rgba(0,0,0,0.95)",
                  pointerEvents: "none",
                }}
              >
                ★ Lomé (Hub)
              </text>
            )}
          </Marker>
        )}

        {children}
      </ComposableMap>

      {/* Badge Lomé : fond transparent élégant avec flou et lueur */}
      {!isFooter && !isMinimal && showHubBadge && (
        <div className="africa-hub-badge">
          <span className="hub-indicator" />
          <span>LOMÉ · HUB CENTRAL OCD LIVE</span>
          <span>🇹🇬</span>
        </div>
      )}
    </div>
  );
}
