import { Eye, Magnet, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Eye, Magnet, TrendingUp];

const MethodVCP = () => {
  const { t } = useLanguage();
  return (
    <section id="metodo" className="py-16 md:py-24 bg-royal relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(hsl(var(--brand-yellow)) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />
      <div className="container relative mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">
              {t.method.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5 md:mb-6">
              {t.method.titleStart}
              <span className="text-gradient-yellow">{t.method.titleHighlight}</span>
              {t.method.titleEnd}
            </h2>
            <div className="flex items-center gap-3 mt-8">
              <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-yellow-grad text-brand-navy font-black text-lg shadow-yellow-soft">
                V
              </span>
              <span className="text-foreground/60 font-bold text-lg">·</span>
              <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-yellow-grad text-brand-navy font-black text-lg shadow-yellow-soft">
                C
              </span>
              <span className="text-foreground/60 font-bold text-lg">·</span>
              <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-yellow-grad text-brand-navy font-black text-lg shadow-yellow-soft">
                P
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-brand-yellow/50 via-brand-yellow/30 to-brand-yellow/15" />
            <div className="space-y-5 md:space-y-6">
              {t.method.pillars.map((p, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={p.letter}
                    className="relative pl-16 md:pl-20 pr-14 md:pr-20 py-5 md:py-7 rounded-2xl bg-card-grad border border-border hover:border-brand-yellow/50 transition-smooth shadow-card-soft"
                  >
                    <div className="absolute left-2 md:left-4 top-5 md:top-7 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-grad text-brand-navy shadow-yellow-soft">
                      <Icon className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                    <div className="relative flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2 md:mb-3">
                      <h3 className="text-xl md:text-2xl font-black text-brand-yellow">{p.name}</h3>
                      <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-foreground/50">
                        {p.qualifier}
                      </span>
                    </div>
                    <p className="relative text-muted-foreground text-sm md:text-base leading-relaxed">{p.text}</p>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 md:right-5 bottom-2 text-4xl md:text-6xl font-black text-brand-yellow/10 leading-none"
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
