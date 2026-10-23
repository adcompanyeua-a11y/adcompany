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
  { src: premium,        alt: "Premium Home Service" },
  { src: broom,          alt: "Broom Broom Cleaning" },
  { src: beautyByJanete, alt: "Beauty by Janete" },
  { src: borges,         alt: "Borges Services" },
  { src: cariocas,       alt: "Carioca's Cleaning" },
  { src: excellence,     alt: "Excellence Cleaning" },
  { src: medeiros,       alt: "Medeiros Floorings" },
  { src: prime,          alt: "Prime Cleaning" },
  { src: servCleaning,   alt: "Serv Cleaning" },
  { src: smilean,        alt: "Smilean Cleaning" },
  { src: souza,          alt: "Souza Construction" },
];

const DESKTOP_CARD_WIDTH = 200;
const MOBILE_CARD_WIDTH  = 130;
const GAP = 16;

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
  const STEP = CARD_WIDTH + GAP;
  const VISIBLE = isMobile ? 3 : 5;

  useEffect(() => {
    let start: number | null = null;
    const duration = 600;
    const interval = 2600;

    const animateSlide = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
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
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 mb-10 text-center">
        <p
          className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3"
          style={{ color: "var(--text-dim)" }}
        >
          {t.partners.title}
        </p>
        <div className="rule-gold max-w-xs mx-auto" />
      </div>

      {/* Carousel */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{ width: `${VISIBLE * CARD_WIDTH + (VISIBLE - 1) * GAP}px`, maxWidth: "calc(100% - 40px)" }}
        onMouseEnter={() => { pauseRef.current = true; }}
        onMouseLeave={() => { pauseRef.current = false; }}
      >
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 h-full w-12 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--surface), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-12 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--surface), transparent)" }}
        />

        <div className="flex" style={{ gap: `${GAP}px`, transform: `translateX(-${offset}px)` }}>
          {items.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 rounded-xl"
              style={{
                width: `${CARD_WIDTH}px`,
                height: isMobile ? "64px" : "80px",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-12 max-w-[75%] object-contain"
                style={{ opacity: 0.45 }}
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
