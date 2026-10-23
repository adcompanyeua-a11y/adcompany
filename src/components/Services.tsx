import { Target, Megaphone, Globe, Search, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="currentColor" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="currentColor" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="currentColor" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const icons = [Target, Megaphone, Search, Users, GoogleIcon, Globe];

const Services = () => {
  const { t } = useLanguage();
  const gridRef = useScrollReveal();

  return (
    <section id="servicos" className="py-16 md:py-28 relative" style={{ background: "var(--bg)" }}>
      {/* Separator top */}
      <div className="rule-gold mb-0 mx-auto max-w-6xl px-5 md:px-8" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20">

        {/* Header — assimétrico */}
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end mb-10 md:mb-16">
          <div>
            <div className="label mb-6">{t.services.tag}</div>
            <h2
              className="text-[clamp(1.75rem,4.2vw,2.9rem)]"
              style={{ color: "var(--text)" }}
            >
              {t.services.titleStart}
              <span className="text-gradient-yellow"> {t.services.titleHighlight}</span>
            </h2>
          </div>
          <p
            className="text-[14px] leading-relaxed max-w-xs pb-1 hidden md:block"
            style={{ color: "var(--text-muted)" }}
          >
            {t.services.subtitle}
          </p>
        </div>

        <p
          className="text-[14px] leading-relaxed mb-12 md:hidden"
          style={{ color: "var(--text-muted)" }}
        >
          {t.services.subtitle}
        </p>

        {/* Cards */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--border)" }}>
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="stagger-item group relative p-7 md:p-8 cursor-default"
                style={{
                  background: "var(--bg)",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--surface)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
              >
                {/* Número */}
                <span
                  className="absolute top-6 right-7 text-[11px] font-medium tabular-nums tracking-widest"
                  style={{ color: "var(--text-dim)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Ícone */}
                <div
                  className="mb-7 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(245,196,0,0.07)",
                    border: "1px solid rgba(245,196,0,0.1)",
                    color: "var(--gold)",
                  }}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>

                <h3
                  className="text-[15px] font-semibold mb-3 leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.text}
                </p>

                {/* Linha hover no topo */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left"
                  style={{
                    background: "var(--gold)",
                    transition: "transform 0.3s var(--ease)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
