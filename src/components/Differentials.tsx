import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Differentials = () => {
  const { t } = useLanguage();
  const gridRef = useScrollReveal();

  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute -right-20 bottom-1/3 h-[500px] w-[300px] rounded-full bg-yellow-400/4 blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <div className="section-label mx-auto mb-5">{t.differentials.tag}</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl">
            {t.differentials.titleStart}
            <span className="text-gradient-yellow block sm:inline"> {t.differentials.titleHighlight}</span>
            {t.differentials.titleEnd}
          </h2>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.differentials.blocks.map((b) => (
            <div
              key={b.title}
              className="stagger-item group p-7 rounded-2xl bg-background border border-white/5 hover:border-yellow-400/20 transition-all duration-200 hover:shadow-[0_4px_32px_-4px_hsl(46_100%_52%/0.1)]"
            >
              <h3 className="text-base font-bold mb-5 text-yellow-400">{b.title}</h3>
              <ul className="space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-4 w-4 text-yellow-400/70 shrink-0 mt-0.5" />
                    <span className="text-white/55 text-sm leading-snug">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
