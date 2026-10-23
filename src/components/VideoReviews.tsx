import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const videos = [
  { name: "Juliana", segment: "House Cleaning", id: "Fjujm8dqZlM" },
  { name: "Gabriela", segment: "House Cleaning", id: "bSgF-_oNpEA" },
];

const VideoCard = ({ v }: { v: typeof videos[0] }) => {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

  return (
    <div
      className="stagger-item group relative rounded-2xl overflow-hidden"
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        transition: "border-color 0.2s ease",
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(245,196,0,0.2)")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
    >
      {/* Vídeo ou thumbnail */}
      <div className="w-full aspect-square bg-black">
        {active ? (
          <iframe
            src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1&autoplay=1`}
            title={`Depoimento ${v.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button
            onClick={() => setActive(true)}
            className="relative w-full h-full block group/play focus:outline-none"
            aria-label={`Assistir depoimento de ${v.name}`}
          >
            <img
              src={thumb}
              alt={`Depoimento ${v.name}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {/* Overlay escuro */}
            <div
              className="absolute inset-0 group-hover/play:opacity-60 transition-opacity duration-200"
              style={{ background: "rgba(9,9,15,0.45)" }}
            />
            {/* Botão play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full group-hover/play:scale-110 transition-transform duration-200"
                style={{
                  background: "linear-gradient(135deg, #f5c400 0%, #e09200 100%)",
                  boxShadow: "0 4px 20px rgba(245,196,0,0.4)",
                }}
              >
                <Play className="h-5 w-5 ml-0.5" style={{ color: "#09090f" }} fill="#09090f" />
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Legenda */}
      <div className="px-5 py-4 flex items-center gap-3" style={{ borderTop: "1px solid var(--border)" }}>
        <div
          className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-[12px] font-bold"
          style={{ background: "rgba(245,196,0,0.1)", color: "var(--gold)" }}
        >
          {v.name[0]}
        </div>
        <div>
          <p className="text-[13px] font-semibold" style={{ color: "var(--text)", lineHeight: 1 }}>{v.name}</p>
          <p className="text-[11px] mt-0.5" style={{ color: "var(--text-dim)" }}>{v.segment} · Cliente AD Company</p>
        </div>
      </div>
    </div>
  );
};

const VideoReviews = () => {
  const { lang } = useLanguage();
  const gridRef = useScrollReveal();

  const tag        = lang === "pt" ? "DEPOIMENTOS" : "TESTIMONIOS";
  const titleStart = lang === "pt" ? "O que nossos " : "Lo que nuestros ";
  const titleHigh  = lang === "pt" ? "clientes dizem" : "clientes dicen";
  const subtitle   = lang === "pt"
    ? "Histórias reais de quem confiou na AD Company para escalar seu negócio."
    : "Historias reales de quienes confiaron en AD Company para escalar su negocio.";
  const ctaLabel   = lang === "pt" ? "AGENDAR MINHA REUNIÃO" : "AGENDAR MI REUNIÓN";

  return (
    <section id="depoimentos" className="py-28 md:py-36 relative" style={{ background: "var(--bg)" }}>
      <div className="rule-gold" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="label mb-6">{tag}</div>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] mb-5" style={{ color: "var(--text)" }}>
            {titleStart}
            <span className="text-gradient-yellow">{titleHigh}</span>
          </h2>
          <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{subtitle}</p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl">
          {videos.map((v) => <VideoCard key={v.id} v={v} />)}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-semibold text-[#09090f] bg-yellow-grad active:scale-[0.97] transition-transform duration-150"
            style={{ boxShadow: "0 4px 20px rgba(245,196,0,0.25)" }}
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
