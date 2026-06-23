import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import rocket from "@/assets/hero-rocket.webp";
import { useLanguage } from "@/i18n/LanguageContext";

declare global {
  interface Window {
    Cal?: any;
  }
}

const Hero = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const loadCal = () => {
      (function (C: any, A: string, L: string) {
        const p = function (a: any, ar: any) { a.q.push(ar); };
        const d = C.document;
        C.Cal = C.Cal || function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
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

  return (
    <section className="relative overflow-hidden bg-hero pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-yellow/20 blur-[120px] animate-glow" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-royal/40 blur-[120px]" />
      <div className="container relative mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05]">
            {t.hero.titleStart}<span className="text-gradient-yellow">{t.hero.titleHighlight}</span>{t.hero.titleEnd}
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="hero"
              size="xl"
              data-cal-link="adcompany.eua-gmail.com/45min"
              data-cal-namespace="45min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              <Calendar className="mr-2 h-5 w-5" /> {t.hero.cta}
            </Button>

          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
            <div><span className="text-brand-yellow font-bold text-2xl font-display">{t.hero.statNum1}</span><br />{t.hero.stat1}</div>
            <div><span className="text-brand-yellow font-bold text-2xl font-display">{t.hero.statNum2}</span><br />{t.hero.stat2}</div>
            <div><span className="text-brand-yellow font-bold text-2xl font-display">{t.hero.statNum3}</span><br />{t.hero.stat3}</div>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute inset-0 rounded-full bg-brand-yellow/30 blur-3xl" />
          <img
            src={rocket}
            alt="AD Company"
            className="relative w-full h-auto rounded-3xl shadow-glow"
            width={1024}
            height={1024}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
