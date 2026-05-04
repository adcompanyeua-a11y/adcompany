import { useLanguage } from "@/i18n/LanguageContext";
import premium from "@/assets/partners/premium.png";
import broom from "@/assets/partners/broom.png";
import beautyByJanete from "@/assets/partners/Beauty byjanete.png";
import borges from "@/assets/partners/Borges Cleaning services.png";
import cariocas from "@/assets/partners/Carioca's Cleaning.png";
import excellence from "@/assets/partners/Excellence cleaning.png";
import medeiros from "@/assets/partners/Medeiros Flooring.png";
import prime from "@/assets/partners/Prime cleaning.png";
import servCleaning from "@/assets/partners/servcleaning.jpg";
import smilean from "@/assets/partners/Smilean cleaning.png";
import souza from "@/assets/partners/Souza construction.png";

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

const PartnersMarquee = () => {
  const { t } = useLanguage();
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

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 w-max animate-marquee">
          {items.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-20 w-40 shrink-0 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-3 hover:bg-white/20 transition-all duration-300"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-16 max-w-full object-contain"
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
