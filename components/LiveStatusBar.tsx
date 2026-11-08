"use client";

import { useState } from "react";
import Link from "next/link";
import { YoutubeIcon, FacebookIcon } from "@/components/SocialIcons";
import { Radio, Sparkles } from "lucide-react";

export default function LiveStatusBar() {
  // Mode en direct (activé par défaut pour la démo, commutable en un clic)
  const [isLive, setIsLive] = useState(true);

  return (
    <aside className="live-status-bar" aria-label="Statut de diffusion en direct">
      <div className="nav-container live-status-container">
        {isLive ? (
          /* =========================================================================
             1. ÉTAT ACTIF : LIVE EN COURS
          ========================================================================= */
          <div className="live-active-wrapper">
            <div className="live-badge-group">
              <span className="live-pulse-badge">
                <span className="live-pulse-dot" />
                EN DIRECT MAINTENANT
              </span>
              <span className="live-stream-title">
                <strong>Plateau Tech Horizon Africa</strong> · Émission spéciale en direct d&apos;Abidjan
              </span>
            </div>

            <div className="live-actions-group">
              <span className="live-viewers-count">
                <Radio className="w-3.5 h-3.5 text-[#f36b0b] animate-pulse" />
                <span>1 850 connectés</span>
              </span>

              <div className="live-channels">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-channel-pill yt"
                  title="Suivre en direct sur YouTube"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span>YouTube ↗</span>
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-channel-pill tt"
                  title="Suivre en direct sur TikTok"
                >
                  <span>TikTok ↗</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-channel-pill fb"
                  title="Suivre en direct sur Facebook"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                  <span>Facebook ↗</span>
                </a>
              </div>

              {/* Bouton pour tester l'état hors antenne */}
              <button
                type="button"
                className="live-state-toggle"
                onClick={() => setIsLive(false)}
                title="Basculer vers l'état Hors Antenne pour tester"
              >
                Tester Hors Antenne
              </button>
            </div>
          </div>
        ) : (
          /* =========================================================================
             2. ÉTAT HORS ANTENNE : PROCHAIN DIRECT & QUOTA
          ========================================================================= */
          <div className="live-idle-wrapper">
            <div className="live-idle-info">
              <span className="live-idle-badge">
                <span className="live-idle-dot" />
                RÉGIE MOBILE DISPONIBLE
              </span>
              <span className="live-idle-text">
                Prochain direct aujourd&apos;hui à <strong>17h00</strong> (Créneau 4/4) · <em>Capacité stricte : 4 lives/jour max</em>
              </span>
            </div>

            <div className="live-idle-actions">
              <Link href="/reservation" className="live-reserve-link">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Réserver un créneau direct →</span>
              </Link>

              {/* Bouton pour réactiver le direct */}
              <button
                type="button"
                className="live-state-toggle active"
                onClick={() => setIsLive(true)}
                title="Basculer vers l'état En Direct"
              >
                Simuler le Live 🔴
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
