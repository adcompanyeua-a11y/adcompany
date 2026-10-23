import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Process = () => {
  const { t } = useLanguage();
  const gridRef = useScrollReveal();

  return (
    <section id="processo" className="py-28 md:py-36 relative" style={{ background: "var(--bg)" }}>
      <div className="rule-gold" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 md:mb-20 items-end">
          <div>
            <div className="label mb-6">{t.process.tag}</div>
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)]" style={{ color: "var(--text)" }}>
              {t.process.titleStart}
              <span className="text-gradient-yellow"> {t.process.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed md:pb-1 hidden md:block" style={{ color: "var(--text-muted)" }}>
            {t.process.subtitle}
          </p>
        </div>
        <p className="text-[14px] leading-relaxed mb-12 md:hidden" style={{ color: "var(--text-muted)" }}>
          {t.process.subtitle}
        </p>

        {/* Steps — lista horizontal limpa */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {t.process.steps.map((step, i) => (
            <div
              key={step.t}
              className="stagger-item group relative px-7 py-9 md:px-8 md:py-10"
              style={{ background: "var(--bg)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--surface)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
            >
              {/* Número grande fantasma */}
              <span
                aria-hidden="true"
                className="absolute right-6 bottom-4 text-[5rem] font-black leading-none select-none pointer-events-none"
                style={{ fontFamily: "Syne, sans-serif", color: "rgba(245,196,0,0.04)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Step index */}
              <div
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-bold mb-6 tabular-nums"
                style={{
                  background: "rgba(245,196,0,0.08)",
                  color: "var(--gold)",
                  border: "1px solid rgba(245,196,0,0.12)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 className="text-[15px] font-semibold mb-2 leading-snug" style={{ color: "var(--text)" }}>
                {step.t}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {step.d}
              </p>

              {/* Linha top hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left"
                style={{ background: "var(--gold)", transition: "transform 0.3s var(--ease)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
