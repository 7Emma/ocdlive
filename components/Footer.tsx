"use client";

import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";
import AfricaMapGraphic from "@/components/AfricaMapGraphic";
import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* Accentuation orange en arrière-plan en bas à droite ("deux couleurs en bas") */}
      <div className="footer-dual-bg" aria-hidden="true">
        <svg
          className="footer-orange-wave-svg"
          viewBox="0 0 520 220"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,220 C140,215 260,170 370,85 C420,45 470,15 520,0 L520,220 Z"
            fill="url(#footerDualOrangeGrad)"
          />
          <path
            d="M0,220 C140,215 260,170 370,85 C420,45 470,15 520,0"
            stroke="#ff9a3d"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="footerDualOrangeGrad"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#c74f00" />
              <stop offset="40%" stopColor="#f36b0b" />
              <stop offset="85%" stopColor="#ff7e1d" />
              <stop offset="100%" stopColor="#ffa048" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Carte noire asymétrique :
          - À gauche l'arrondi en haut (border-top-left-radius)
          - À droite l'arrondi en bas (border-bottom-right-radius)
      */}
      <div className="footer-card">
        {/* Carte d'Afrique en arrière-plan avec couleur orange signature éclatante */}
        <AfricaMapGraphic
          variant="footer"
          width="500px"
          height="450px"
          showHubBadge={false}
          showRays={false}
          showLomeBeacon={true}
        />

        <div className="footer-main">
          {/* Colonne 1 : Logo & Slogan */}
          <div className="footer-about">
            <Link
              className="logo"
              href="/"
              aria-label="OCD Live"
              style={{
                minWidth: "125px",
                marginBottom: "12px",
                display: "inline-block",
              }}
            >
              <img
                src="/images/logo-ocd-live.png"
                alt="OCD Live"
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-tagline">
              Donnez vie à vos idées
            </p>
            <p className="footer-subtext">
              <strong>Opportunités C'est Dehors.</strong>
              <br />
              L’expérience du live, pensée autrement.
            </p>
            <Link href="/reservation" className="footer-cta">
              Parlons de votre projet ↗
            </Link>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div className="footer-column">
            <h3>Liens rapides</h3>
            <Link href="/">Accueil</Link>
            <Link href="/a-propos">À propos & Bovan</Link>
            <Link href="/services">Nos services & Lives</Link>
            <Link href="/tarifs">Tarifs & Packs FCFA</Link>
            <Link href="/realisations">Nos réalisations</Link>
            <Link href="/reservation">Réserver un créneau</Link>
          </div>

          {/* Colonne 3 : Informations */}
          <div className="footer-column">
            <h3>Informations</h3>
            <Link href="/actualites">Actualités</Link>
            <Link href="/opportunites">Opportunités (Jobs)</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link href="/cgv">CGV</Link>
          </div>

          {/* Colonne 4 : Réseaux sociaux & Contact */}
          <div className="footer-column">
            <h3>Suivez-nous</h3>
            <div className="socials">
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>

            <p className="footer-contact">
              Contact professionnel
              <br />
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              <br />
              <span style={{ color: "var(--orange)", fontWeight: 700 }}>
                Capacité : 4 lives / jour max
              </span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 <strong>OCD Live</strong>. Tous droits réservés.</p>
          <p>Créé avec passion pour vos projets audiovisuels.</p>
        </div>
      </div>
    </footer>
  );
}
