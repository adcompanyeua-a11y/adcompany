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

const DESKTOP_CARD_WIDTH = 280;
const MOBILE_CARD_WIDTH = 180;
const GAP = 24;

const PartnersMarquee = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [offset, setOffset] = useState(0);
  const indexRef = useRef(0);
  const animRef = useRef<number | null>(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const CARD_WIDTH = isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;
  const STEP = CARD_WIDTH + GAP;
  const VISIBLE = isMobile ? 2 : 4;

  useEffect(() => {
    let start: number | null = null;
    const duration = 600; // ms per slide
    const interval = 2800; // ms between slides

    const animateSlide = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      const from = indexRef.current * STEP;
      const to = (indexRef.current + 1) * STEP;
      setOffset(from + (to - from) * eased);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animateSlide);
      } else {
        indexRef.current = (indexRef.current + 1) % partners.length;
        // Reset silencioso quando chega no fim
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
  }, []);

  // Duplica para o loop visual funcionar suavemente
  const items = [...partners, ...partners];

  return (
    <section className="py-12 bg-brand-navy border-t border-brand-yellow/10 overflow-hidden relative">
      {/* Luz amarela de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-40 rounded-full bg-brand-yellow/10 blur-[80px]" />
      </div>

      <div className="container mx-auto mb-8 text-center relative">
        <h3 className="text-lg md:text-xl font-bold text-brand-yellow tracking-wide">
          {t.partners.title}
        </h3>
      </div>

      {/* Wrapper com máscara nas bordas */}
      <div
        className="relative mx-auto overflow-hidden"
        style={{ width: `${4 * CARD_WIDTH + 3 * GAP}px`, maxWidth: "100%" }}
        onMouseEnter={() => { pauseRef.current = true; }}
        onMouseLeave={() => { pauseRef.current = false; }}
      >
        {/* Gradiente esquerda */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--brand-navy, #0a1628), transparent)" }} />
        {/* Gradiente direita */}
        <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--brand-navy, #0a1628), transparent)" }} />

        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${offset}px)`,
            transition: animRef.current ? "none" : undefined,
          }}
        >
          {items.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 hover:bg-white/20 transition-colors duration-300"
              style={{ width: `${CARD_WIDTH}px`, height: "128px" }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-24 max-w-full object-contain"
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
