"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LiveStatusBar from "@/components/LiveStatusBar";
import { WHATSAPP_RESERVATION_URL } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/vendeurs-live", label: "🔴 Vendeurs en Live" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Nos services" },
  { href: "/tarifs", label: "Tarifs & Packs" },
  { href: "/opportunites", label: "Opportunités" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  const handleHomeClick = () => {
    close();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isSolid = !isHome || scrolled || isOpen;

  return (
    <header
      className="header"
      style={{
        position: isHome ? (scrolled ? "fixed" : "absolute") : "sticky",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 50,
        background: isSolid ? "rgba(9, 9, 9, 0.98)" : "rgba(8, 8, 8, 0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "background 0.25s ease, border-color 0.25s ease",
      }}
    >
      {/* 1. Bandeau Live Broadcast intégré dans le header — aucun chevauchement possible */}
      <LiveStatusBar />

      {/* 2. Barre de Navigation Principale */}
      <div className="nav-container nav">
        {/* Brand Logo */}
        <Link
          className="logo"
          href="/"
          onClick={handleHomeClick}
          aria-label="OCD Live"
          style={{ minWidth: "95px" }}
        >
          <img
            src="/images/logo-ocd-live.png"
            alt="OCD Live"
            style={{
              height: "32px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Link>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="hamb"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <i />
          <i />
          <i />
        </button>

        {/* Navigation Links */}
        <nav style={isOpen ? { display: "flex", flexDirection: "column" } : {}}>
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.href === "/" ? handleHomeClick : close}
                style={isActive ? { color: "var(--orange)", fontWeight: 700 } : {}}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            className="btn orange mobile-cta"
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            Réserver sur WhatsApp ↗
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          className="btn orange desktop-cta"
          href={WHATSAPP_RESERVATION_URL}
          target="_blank"
          rel="noreferrer"
        >
          Réserver sur WhatsApp ↗
        </a>
      </div>
    </header>
  );
}
