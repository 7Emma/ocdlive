"use client";

import React from "react";
import AfricaMapGraphic from "./AfricaMapGraphic";

export default function PageBackgroundGraphics() {
  return (
    <div className="bg-graphics-layer" aria-hidden="true">
      {/* Vague fluide orange côté gauche */}
      <svg
        className="bg-graphic-left"
        viewBox="0 0 240 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-40,20 C80,80 140,190 90,300 C65,355 5,390 -40,400"
          stroke="url(#bgOrangeGradL)"
          strokeWidth="38"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M-40,20 C80,80 140,190 90,300 C65,355 5,390 -40,400"
          stroke="#ff801a"
          strokeWidth="10"
          strokeLinecap="round"
          className="bg-graphic-stroke"
        />
        <defs>
          <linearGradient
            id="bgOrangeGradL"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f36b0b" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ff8522" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f36b0b" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>

      {/* Silhouette de la carte d'Afrique côté droit */}
      <div className="bg-graphic-right">
        <AfricaMapGraphic variant="flank" showRays={false} />
      </div>
    </div>
  );
}
