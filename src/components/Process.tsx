import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Process = () => {
  const { t } = useLanguage();
  const gridRef = useScrollReveal();

  return (
    <section id="processo" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Gradient top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-yellow-400/4 blur-[150px] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <div className="section-label mx-auto mb-5">{t.process.tag}</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-5">
            {t.process.titleStart}
            <span className="text-gradient-yellow block sm:inline"> {t.process.titleHighlight}</span>
          </h2>
          <p className="text-white/50 text-lg">{t.process.subtitle}</p>
        </div>

        {/* Steps */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.process.steps.map((step, i) => (
            <div
              key={step.t}
              className="stagger-item group relative p-7 rounded-2xl bg-card-grad border border-white/5 hover:border-yellow-400/20 transition-all duration-200 overflow-hidden"
            >
              {/* Step number — ghost */}
              <span
                aria-hidden="true"
                className="absolute -right-2 -bottom-4 text-[96px] font-black leading-none text-white/[0.025] select-none pointer-events-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Step badge */}
              <div className="flex items-center gap-3 mb-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400/8 border border-yellow-400/15 text-yellow-400 text-xs font-bold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < t.process.steps.length - 1 && (
                  <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/15 to-transparent" />
                )}
              </div>

              <h3 className="text-base font-bold mb-2 text-white">{step.t}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
