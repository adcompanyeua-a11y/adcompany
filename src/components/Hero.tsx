import { useEffect } from "react";
import { ArrowRight, TrendingUp, Users, Star } from "lucide-react";
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
    { icon: TrendingUp, num: t.hero.statNum1, label: t.hero.stat1 },
    { icon: Users,      num: t.hero.statNum2, label: t.hero.stat2 },
    { icon: Star,       num: t.hero.statNum3, label: t.hero.stat3 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-8%] h-[500px] w-[500px] rounded-full bg-amber-500/8 blur-[120px] animate-glow" />
        <div className="absolute bottom-[10%] left-[-6%]  h-[400px] w-[400px] rounded-full bg-blue-900/20  blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] h-[300px] w-[300px] rounded-full bg-yellow-400/4 blur-[80px]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative mx-auto px-4 md:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ── Left column ── */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            Agência de Performance Digital · USA
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05]">
              <span className="block text-white">
                {t.hero.titleStart}
              </span>
              <span className="block text-gradient-yellow mt-1">
                {t.hero.titleHighlight}
              </span>
              <span className="block text-white">
                {t.hero.titleEnd}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-white/55 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-brand-navy bg-yellow-grad shadow-yellow-soft hover:brightness-105 active:scale-[0.97] transition-transform duration-150 text-base"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#depoimentos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white/80 border border-white/10 hover:bg-white/5 active:scale-[0.97] transition-all duration-150 text-base"
            >
              Ver depoimentos
            </a>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {stats.map(({ icon: Icon, num, label }) => (
              <div
                key={label}
                className="hero-stat flex flex-col gap-1 p-4 rounded-xl border border-white/6 bg-white/[0.03]"
              >
                <Icon className="h-4 w-4 text-yellow-400/60 mb-1" />
                <span className="text-2xl font-bold text-white leading-none">{num}</span>
                <span className="text-xs text-white/45 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column — Hero image ── */}
        <div className="relative animate-float order-first lg:order-last">
          {/* Glow halo */}
          <div className="absolute inset-[-5%] rounded-[2rem] bg-yellow-400/10 blur-3xl" />

          {/* Frame */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/8 shadow-[0_32px_80px_-8px_hsl(220_28%_4%/0.8)]">
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
            {/* Bottom tint */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-card-grad border border-white/10 rounded-2xl px-4 py-3 shadow-card-soft backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <div>
                <p className="text-xs font-bold text-white leading-none">Leads ao vivo</p>
                <p className="text-[10px] text-white/50 mt-0.5">Automação ativa</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
