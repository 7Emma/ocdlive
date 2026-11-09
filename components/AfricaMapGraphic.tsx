"use client";

import React from "react";
import AfricaMap, {
  type AfricaMapProps,
  AFRICA_MAP_THEME,
  MAIN_HUB_LOME,
  PANAFRICAN_CITIES,
  GEOGRAPHY_URL,
  AFRICAN_COUNTRIES,
} from "./AfricaMap";

export interface AfricaMapGraphicProps extends AfricaMapProps {
  interactive?: boolean;
}

/**
 * Composant de compatibilité qui redirige vers le nouveau composant spécial retouches :
 * @see "@/components/AfricaMap.tsx" pour faire vos retouches personnelles.
 */
export default function AfricaMapGraphic({
  variant = "default",
  ...props
}: AfricaMapGraphicProps) {
  return <AfricaMap {...props} variant={variant} />;
}

export {
  AfricaMap,
  AFRICA_MAP_THEME,
  MAIN_HUB_LOME,
  PANAFRICAN_CITIES,
  GEOGRAPHY_URL,
  AFRICAN_COUNTRIES,
};
