import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

declare global {
  interface Window { Cal?: any; }
}

const Hero = () => {
  const { t } = useLanguage();

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
    <section className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container relative mx-auto px-4 md:px-6 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        {/* ── Texto ── */}
        <div>
          <div className="section-label mb-6">Agência de Performance Digital · USA</div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
            {t.hero.titleStart}
            <span className="text-gradient-yellow">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd}
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/60 max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-brand-navy bg-yellow-grad hover:brightness-105 active:scale-[0.97] transition-transform duration-150 text-base"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#depoimentos"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-white/80 border border-white/15 hover:bg-white/5 active:scale-[0.97] transition-all duration-150 text-base"
            >
              Ver depoimentos
            </a>
          </div>

          {/* Números simples, separados por linha */}
          <dl className="mt-12 grid grid-cols-3 border-t border-white/10">
            {stats.map(({ num, label }, i) => (
              <div
                key={label}
                className={`hero-stat pt-5 ${i > 0 ? "pl-4 md:pl-6 border-l border-white/10" : ""}`}
              >
                <dt className="text-xl md:text-2xl font-bold text-white leading-none">{num}</dt>
                <dd className="mt-2 text-xs md:text-sm text-white/50 leading-snug">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Imagem ── */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <img
              src="/hero-mockup.webp"
              alt="Resultados AD Company no Google e WhatsApp"
              className="w-full h-auto block"
              width={1448}
              height={1086}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
