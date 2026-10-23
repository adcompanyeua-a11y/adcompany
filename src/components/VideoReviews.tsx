import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const videos = [
  { name: "Juliana", segment: "House Cleaning", id: "Fjujm8dqZlM" },
  { name: "Gabriela", segment: "House Cleaning", id: "bSgF-_oNpEA" },
];

const VideoReviews = () => {
  const { lang } = useLanguage();
  const gridRef = useScrollReveal();

  const tag         = lang === "pt" ? "DEPOIMENTOS" : "TESTIMONIOS";
  const titleStart  = lang === "pt" ? "O que nossos " : "Lo que nuestros ";
  const titleHigh   = lang === "pt" ? "clientes dizem" : "clientes dicen";
  const subtitle    = lang === "pt"
    ? "Histórias reais de quem confiou na AD Company para escalar seu negócio."
    : "Historias reales de quienes confiaron en AD Company para escalar su negocio.";
  const ctaLabel    = lang === "pt" ? "AGENDAR MINHA REUNIÃO" : "AGENDAR MI REUNIÓN";

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute -left-20 top-1/3 h-[500px] w-[300px] rounded-full bg-yellow-400/4 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <div className="section-label mx-auto mb-5">{tag}</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-5">
            {titleStart}
            <span className="text-gradient-yellow block sm:inline">{titleHigh}</span>
          </h2>
          <p className="text-white/50 text-lg">{subtitle}</p>
        </div>

        {/* Video grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {videos.map((v) => (
            <div
              key={v.name}
              className="stagger-item group relative rounded-2xl overflow-hidden border border-white/6 bg-background hover:border-yellow-400/25 transition-all duration-200 hover:shadow-[0_8px_40px_-8px_hsl(46_100%_52%/0.12)]"
            >
              {/* Quote icon decoration */}
              <div className="absolute top-4 right-4 z-10 opacity-30">
                <Quote className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              </div>

              {/* Video */}
              <div className="w-full aspect-square bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={`Depoimento ${v.name}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* Caption */}
              <div className="px-5 py-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-400">{v.name[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{v.name}</p>
                  <p className="text-xs text-white/40">{v.segment} · Cliente AD Company</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-brand-navy bg-yellow-grad shadow-yellow-soft hover:brightness-105 active:scale-[0.97] transition-transform duration-150"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
