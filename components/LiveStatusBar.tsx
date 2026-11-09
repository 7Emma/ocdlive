"use client";

import { useEffect, useState } from "react";
import { YoutubeIcon } from "@/components/SocialIcons";
import { Radio, Sparkles } from "lucide-react";
import { WHATSAPP_RESERVATION_URL } from "@/lib/data";

interface LiveState {
  isLive: boolean;
  streamTitle: string;
  platform: string;
  streamUrl: string;
  viewersCount: number;
  channelName: string;
}

const DEFAULT_STATE: LiveState = {
  isLive: true,
  streamTitle: "Direct Régie OCD Live · Plateau Talk-Show #LesOpportunitesCestDehors",
  platform: "youtube",
  streamUrl: "https://www.youtube.com/@BovannYT/live",
  viewersCount: 1420,
  channelName: "@BovannYT",
};

export default function LiveStatusBar() {
  const [live, setLive] = useState<LiveState>(DEFAULT_STATE);

  useEffect(() => {
    let isMounted = true;

    async function fetchLiveStatus() {
      try {
        const res = await fetch("/api/live-status", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setLive(data);
          }
        }
      } catch {
        // Fallback silently to default state
      }
    }

    fetchLiveStatus();
    const interval = setInterval(fetchLiveStatus, 15000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <aside className="live-status-bar" aria-label="Statut de diffusion en direct">
      <div className="nav-container live-status-container">
        {live.isLive ? (
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
                <strong>{live.streamTitle}</strong>
              </span>
            </div>

            <div className="live-actions-group">
              <span className="live-viewers-count">
                <Radio className="w-3.5 h-3.5 text-[#f36b0b] animate-pulse" />
                <span>{live.viewersCount.toLocaleString("fr-FR")} connectés</span>
              </span>

              <div className="live-channels">
                <a
                  href={live.streamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-channel-pill yt"
                  title={`Suivre en direct sur ${live.platform}`}
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                  <span style={{ textTransform: "capitalize" }}>{live.platform} ↗</span>
                </a>

                <a
                  href="https://tiktok.com/@bovan_officiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-channel-pill tt"
                  title="Suivre en direct sur TikTok"
                >
                  <span>TikTok ↗</span>
                </a>
              </div>
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
                Prochain direct aujourd&apos;hui à <strong>19h00 GMT</strong> · <em>Capacité stricte : 4 lives/jour max</em>
              </span>
            </div>

            <div className="live-idle-actions">
              <a
                href={WHATSAPP_RESERVATION_URL}
                target="_blank"
                rel="noreferrer"
                className="live-reserve-link"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Réserver sur WhatsApp →</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
