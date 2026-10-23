import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6.5" stroke="rgba(245,196,0,0.2)" />
    <path d="M4.5 7l1.8 1.8L9.5 5.5" stroke="#f5c400" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Differentials = () => {
  const { t } = useLanguage();
  const gridRef = useScrollReveal();

  return (
    <section id="diferenciais" className="py-28 md:py-36 relative" style={{ background: "var(--surface)" }}>
      <div className="rule-gold" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="label mb-6">{t.differentials.tag}</div>
          <h2 className="text-[clamp(2.2rem,5vw,3.8rem)]" style={{ color: "var(--text)" }}>
            {t.differentials.titleStart}
            <span className="text-gradient-yellow"> {t.differentials.titleHighlight}</span>
            {t.differentials.titleEnd && <span> {t.differentials.titleEnd}</span>}
          </h2>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {t.differentials.blocks.map((b) => (
            <div
              key={b.title}
              className="stagger-item group relative px-7 py-9 md:px-8 md:py-10"
              style={{ background: "var(--surface)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--surface-2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--surface)")}
            >
              {/* Título do bloco */}
              <h3
                className="text-[13px] font-semibold tracking-wider uppercase mb-6"
                style={{ color: "var(--gold)" }}
              >
                {b.title}
              </h3>

              {/* Itens */}
              <ul className="space-y-3.5">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0"><Check /></span>
                    <span className="text-[13px] leading-snug" style={{ color: "var(--text-muted)" }}>
                      {it}
                    </span>
                  </li>
                ))}
              </ul>

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

export default Differentials;
