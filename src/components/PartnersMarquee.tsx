import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect, useRef, useState } from "react";
import premium from "@/assets/partners/premium.webp";
import broom from "@/assets/partners/broom.webp";
import beautyByJanete from "@/assets/partners/beauty-by-janete.webp";
import borges from "@/assets/partners/borges.webp";
import cariocas from "@/assets/partners/cariocas.webp";
import excellence from "@/assets/partners/excellence.webp";
import medeiros from "@/assets/partners/medeiros.webp";
import prime from "@/assets/partners/prime.webp";
import servCleaning from "@/assets/partners/servcleaning.webp";
import smilean from "@/assets/partners/smilean.webp";
import souza from "@/assets/partners/souza.webp";

const partners = [
  { src: premium,        alt: "Premium Home Service Contractors LLC" },
  { src: broom,          alt: "Broom Broom House Cleaning" },
  { src: beautyByJanete, alt: "Beauty by Janete" },
  { src: borges,         alt: "Borges Services LLC" },
  { src: cariocas,       alt: "Carioca's Cleaning" },
  { src: excellence,     alt: "Excellence Cleaning Services" },
  { src: medeiros,       alt: "Medeiros Floorings" },
  { src: prime,          alt: "Prime Cleaning Services" },
  { src: servCleaning,   alt: "Serv Cleaning Professional Cleaning" },
  { src: smilean,        alt: "Smilean All Purpose Cleaning" },
  { src: souza,          alt: "Souza Construction" },
];

const DESKTOP_CARD_WIDTH = 260;
const MOBILE_CARD_WIDTH  = 160;
const GAP = 20;

const PartnersMarquee = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [offset, setOffset] = useState(0);
  const indexRef  = useRef(0);
  const animRef   = useRef<number | null>(null);
  const pauseRef  = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const CARD_WIDTH = isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;
  const STEP    = CARD_WIDTH + GAP;
  const VISIBLE = isMobile ? 2 : 4;

  useEffect(() => {
    let start: number | null = null;
    const duration = 600;
    const interval = 2800;

    const animateSlide = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      const from = indexRef.current * STEP;
      const to   = (indexRef.current + 1) * STEP;
      setOffset(from + (to - from) * eased);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animateSlide);
      } else {
        indexRef.current = (indexRef.current + 1) % partners.length;
        if (indexRef.current === 0) setOffset(0);
        start = null;
        animRef.current = null;
      }
    };

    const tick = setInterval(() => {
      if (!pauseRef.current && !animRef.current) {
        animRef.current = requestAnimationFrame(animateSlide);
      }
    }, interval);

    return () => {
      clearInterval(tick);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [STEP]);

  const items = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 bg-background border-t border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-gradient-to-r from-transparent via-yellow-400/3 to-transparent" />
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 mb-10 text-center relative">
        <p className="text-xs font-bold tracking-[0.18em] text-white/30 uppercase mb-3">
          {t.partners.title}
        </p>
        <div className="divider-gold max-w-xs mx-auto" />
      </div>

      {/* Carousel */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{ width: `${VISIBLE * CARD_WIDTH + (VISIBLE - 1) * GAP}px`, maxWidth: "100%" }}
        onMouseEnter={() => { pauseRef.current = true; }}
        onMouseLeave={() => { pauseRef.current = false; }}
      >
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(220 25% 6%), transparent)" }} />
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, hsl(220 25% 6%), transparent)" }} />

        <div
          className="flex"
          style={{ gap: `${GAP}px`, transform: `translateX(-${offset}px)` }}
        >
          {items.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 rounded-xl border border-white/6 bg-white/[0.03] px-5 hover:bg-white/[0.06] transition-colors duration-300"
              style={{ width: `${CARD_WIDTH}px`, height: isMobile ? "80px" : "100px" }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-16 max-w-full object-contain opacity-50 hover:opacity-80 transition-opacity duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
