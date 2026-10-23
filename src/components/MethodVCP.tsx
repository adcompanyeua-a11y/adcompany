import { Eye, Magnet, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const icons = [Eye, Magnet, TrendingUp];

const MethodVCP = () => {
  const { t } = useLanguage();
  const listRef = useScrollReveal();

  return (
    <section id="metodo" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Faint dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(46 100% 52%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      <div className="absolute -right-20 top-1/3 h-[500px] w-[300px] rounded-full bg-yellow-400/4 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* ── Sticky left ── */}
          <div className="lg:sticky lg:top-28 space-y-8">
            <div>
              <div className="section-label mb-5">{t.method.tag}</div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
                {t.method.titleStart}
                <span className="text-gradient-yellow block">
                  {t.method.titleHighlight}
                </span>
                {t.method.titleEnd}
              </h2>
            </div>

            {/* VCP badges */}
            <div className="flex items-center gap-4">
              {["V", "C", "P"].map((letter, i) => (
                <div key={letter} className="flex flex-col items-center gap-2">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-grad text-brand-navy font-black text-2xl shadow-yellow-soft">
                    {letter}
                  </span>
                  <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">
                    {["VISIB.", "CONV.", "PERF."][i]}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="divider-gold" />

            <p className="text-white/45 text-sm leading-relaxed">
              Metodologia exclusiva criada a partir de mais de {" "}
              <span className="text-yellow-400 font-semibold">100+ campanhas</span>{" "}
              para empresas brasileiras nos EUA.
            </p>
          </div>

          {/* ── Timeline right ── */}
          <div ref={listRef} className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-yellow-400/40 via-yellow-400/20 to-transparent" />

            <div className="space-y-4">
              {t.method.pillars.map((p, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={p.letter}
                    className="stagger-item group relative pl-14 pr-6 py-6 rounded-2xl bg-background border border-white/5 hover:border-yellow-400/20 transition-all duration-200 hover:shadow-[0_4px_32px_-4px_hsl(46_100%_52%/0.1)]"
                  >
                    {/* Circle on line */}
                    <div className="absolute left-2 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-grad text-brand-navy shadow-yellow-soft">
                      <Icon className="h-3 w-3" strokeWidth={2.5} />
                    </div>

                    {/* Content */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-xl font-bold text-yellow-400">{p.name}</h3>
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/30">{p.qualifier}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{p.text}</p>

                    {/* Big ghost letter */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-5 bottom-3 text-7xl font-black text-yellow-400/6 leading-none select-none"
                    >
                      {p.letter}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodVCP;
