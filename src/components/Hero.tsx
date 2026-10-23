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
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-16" style={{ background: "var(--bg)" }}>

      {/* ── Noise grain overlay ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Subtle top glow ─────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(245,196,0,0.18), transparent)" }}
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,196,0,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto w-full px-5 md:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* ── Left ─────────────────────────────────────────────────── */}
          <div className="space-y-9">

            {/* Eyebrow */}
            <div className="label">
              Agência de Performance Digital · EUA
            </div>

            {/* Headline — grande, editorial */}
            <div>
              <h1
                className="text-[clamp(2.8rem,7vw,5.4rem)] leading-[1.03] tracking-[-0.035em]"
                style={{ color: "var(--text)" }}
              >
                <span style={{ color: "var(--text-muted)" }}>{t.hero.titleStart} </span>
                <br className="hidden sm:block" />
                <span>{t.hero.titleHighlight}</span>
                <br className="hidden sm:block" />
                <span className="text-gradient-yellow">{t.hero.titleEnd}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="text-[15px] leading-relaxed max-w-[520px]"
              style={{ color: "var(--text-muted)" }}
            >
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-semibold text-[#09090f] bg-yellow-grad active:scale-[0.97] transition-transform duration-150"
                style={{ boxShadow: "0 4px 20px rgba(245,196,0,0.25)" }}
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
              <a
                href="#depoimentos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-medium active:scale-[0.97] transition-all duration-150"
                style={{
                  color: "var(--text-muted)",
                  border: "1px solid var(--border-2)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                Ver depoimentos
              </a>
            </div>

            {/* Stats row — horizontal, limpo */}
            <div className="pt-2 flex flex-wrap gap-x-8 gap-y-4">
              {stats.map(({ num, label }, i) => (
                <div key={label} className="hero-stat flex items-baseline gap-2.5" style={{ animationDelay: `${i * 70}ms` }}>
                  <span
                    className="text-[2rem] font-black leading-none tracking-tight"
                    style={{ fontFamily: 'Syne, sans-serif', color: "var(--text)" }}
                  >
                    {num}
                  </span>
                  <span className="text-[12px] leading-tight max-w-[80px]" style={{ color: "var(--text-dim)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — imagem com moldura editorial ─────────────────── */}
          <div className="relative order-first lg:order-last">

            {/* Glow atrás */}
            <div
              className="absolute -inset-8 rounded-[2rem] pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(245,196,0,0.06) 0%, transparent 70%)" }}
            />

            {/* Moldura */}
            <div
              className="relative rounded-2xl overflow-hidden animate-float"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
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
              {/* Grade overlay na imagem */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 50%, rgba(9,9,15,0.5) 100%)" }}
              />
            </div>

            {/* Badge flutuante — live */}
            <div
              className="absolute -bottom-5 -left-4 lg:-left-6 rounded-xl px-4 py-3 flex items-center gap-3"
              style={{
                background: "var(--surface-2)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "#22c55e", animation: "ping-slow 1.4s cubic-bezier(0,0,0.2,1) infinite" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#22c55e" }} />
              </span>
              <div>
                <p className="text-[12px] font-semibold" style={{ color: "var(--text)", lineHeight: 1 }}>Leads ao vivo</p>
                <p className="text-[10px] mt-0.5" style={{ color: "var(--text-dim)" }}>Automação ativa</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
      />
    </section>
  );
};

export default Hero;
