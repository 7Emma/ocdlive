import Link from "next/link";
import { ArrowLeft, Radio, Calendar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#09090b] text-[#f4f4f5] pt-20">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#ff6600]/10 border border-[#ff6600]/30 flex items-center justify-center mx-auto text-[#ff6600]">
          <Radio className="w-10 h-10 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff6600]">
            Erreur 404 · Signal non détecté
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Cette page n'est pas en direct
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Le lien que vous avez suivi est introuvable ou a été déplacé.
            Revenez sur le plateau principal ou réservez votre créneau live.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff6600] hover:bg-[#ff771a] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-[#ff6600]/25 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>

          <Link
            href="/tarifs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/10 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Voir nos tarifs & packs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
