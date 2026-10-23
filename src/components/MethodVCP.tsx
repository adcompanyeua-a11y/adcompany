import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const MethodVCP = () => {
  const { t } = useLanguage();
  const listRef = useScrollReveal();

  return (
    <section id="metodo" className="py-28 md:py-36 relative" style={{ background: "var(--surface)" }}>
      {/* Sep */}
      <div className="rule-gold" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 md:mb-24 items-end">
          <div>
            <div className="label mb-6">{t.method.tag}</div>
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)]" style={{ color: "var(--text)" }}>
              {t.method.titleStart}
              <span className="text-gradient-yellow"> {t.method.titleHighlight}</span>
              {t.method.titleEnd && <span> {t.method.titleEnd}</span>}
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed md:pb-1" style={{ color: "var(--text-muted)" }}>
            Metodologia exclusiva criada a partir de{" "}
            <span style={{ color: "var(--gold)", fontWeight: 600 }}>100+ campanhas</span>{" "}
            para empresas brasileiras nos EUA.
          </p>
        </div>

        {/* Pillars — horizontal em desktop, vertical no mobile */}
        <div ref={listRef} className="grid md:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {t.method.pillars.map((p, i) => (
            <div
              key={p.letter}
              className="stagger-item group relative px-8 py-10 md:px-10 md:py-12"
              style={{ background: "var(--surface)" }}
            >
              {/* Letra grande — não ostensiva */}
              <span
                aria-hidden="true"
                className="absolute right-7 bottom-6 text-[8rem] leading-none font-black select-none pointer-events-none"
                style={{
                  fontFamily: "Syne, sans-serif",
                  color: "rgba(245,196,0,0.04)",
                  transition: "color 0.3s ease",
                }}
              >
                {p.letter}
              </span>

              {/* Número sequencial */}
              <span
                className="block text-[11px] font-semibold tracking-widest mb-6"
                style={{ color: "var(--text-dim)" }}
              >
                0{i + 1}
              </span>

              {/* Letra destaque */}
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl font-black"
                style={{
                  fontFamily: "Syne, sans-serif",
                  background: "linear-gradient(135deg, #f5c400 0%, #e09200 100%)",
                  color: "#09090f",
                }}
              >
                {p.letter}
              </div>

              <h3
                className="text-[18px] font-bold mb-1 leading-tight"
                style={{ color: "var(--text)" }}
              >
                {p.name}
              </h3>
              <p
                className="text-[11px] font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--text-dim)" }}
              >
                {p.qualifier}
              </p>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {p.text}
              </p>

              {/* Linha top hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left"
                style={{
                  background: "var(--gold)",
                  transition: "transform 0.3s var(--ease)",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MethodVCP;
