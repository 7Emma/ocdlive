import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  onClick?: () => void;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  className = "",
  onClick,
  variant = "light",
  size = "md",
}: BrandLogoProps) {
  const heights = {
    sm: 32,
    md: 40,
    lg: 52,
  };

  const h = heights[size];
  const w = Math.round(h * (951 / 489));

  const src =
    variant === "dark"
      ? "/images/logo-ocd-live-dark.png"
      : "/images/logo-ocd-live.png";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`brand-logo ${className}`}
      aria-label="OCD Live — Accueil"
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        lineHeight: 1,
      }}
    >
      <Image
        src={src}
        alt="OCD Live — Opportunités C'est Dehors"
        width={w}
        height={h}
        priority
        style={{
          height: `${h}px`,
          width: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
    </Link>
  );
}
