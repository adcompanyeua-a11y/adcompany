import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

declare global {
  interface Window { Cal?: any; }
}

const Hero = () => {
  const { t } = useLanguage();

  // ── Cal.com — diferido até idle ──────────────────────────────────────
  useEffect(() => {
    const loadCal = () => {
      (function (C: any, A: string, L: string) {
        const p = (a: any, ar: any) => { a.q.push(ar); };
        const d = C.document;
        C.Cal = C.Cal || function () {
          const cal = C.Cal; const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://adcompany-calcom.8qr4sb.easypanel.host/embed/embed.js", "init");
      window.Cal("init", "45min", { origin: "https://adcompany-calcom.8qr4sb.easypanel.host" });
      window.Cal.ns["45min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    };
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(loadCal, { timeout: 3000 });
    } else {
      setTimeout(loadCal, 2000);
    }
  }, []);

  const stats = [
    { num: t.hero.statNum1, label: t.hero.stat1 },
    { num: t.hero.statNum2, label: t.hero.stat2 },
    { num: t.hero.statNum3, label: t.hero.stat3 },
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20" style={{ background: "var(--bg)" }}>
      {/* Glow estático e leve (sem blur/animação) */}
      <div
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(245,196,0,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">

          {/* Texto */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5 text-[12px] font-medium"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)", color: "var(--text-muted)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#22c55e" }} />
              Agência de Performance Digital · EUA
            </div>

            <h1 className="text-[clamp(1.85rem,5.2vw,3.25rem)] leading-[1.12] tracking-[-0.025em]">
              {t.hero.titleStart} {t.hero.titleHighlight}{" "}
              <span className="text-gradient-yellow">{t.hero.titleEnd}</span>
            </h1>

            <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed max-w-[540px]" style={{ color: "var(--text-muted)" }}>
              {t.hero.subtitle}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-semibold text-[#09090f] bg-yellow-grad active:scale-[0.97] transition-transform duration-150"
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href="#depoimentos"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-[14px] font-medium active:scale-[0.97] transition-transform duration-150"
                style={{ color: "var(--text)", border: "1px solid var(--border-2)" }}
              >
                Ver depoimentos
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border-2)", boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}
            >
              <img
                src="/hero-mockup.webp"
                alt="Resultados AD Company"
                className="w-full h-auto block"
                width={960}
                height={720}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Stats em grade com divisórias */}
        <div
          className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{ background: "var(--border)", border: "1px solid var(--border)" }}
        >
          {stats.map(({ num, label }) => (
            <div key={label} className="flex items-center gap-4 px-5 py-4 md:px-6 md:py-5" style={{ background: "var(--surface)" }}>
              <span className="text-[1.6rem] md:text-[1.9rem] font-extrabold leading-none" style={{ fontFamily: "Syne, sans-serif", color: "var(--gold)" }}>
                {num}
              </span>
              <span className="text-[12px] md:text-[13px] leading-snug" style={{ color: "var(--text-muted)" }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
