import { useLanguage } from "@/i18n/LanguageContext";
import cristianes from "@/assets/partners/cristianes.png";
import evolve from "@/assets/partners/evolve.png";
import broom from "@/assets/partners/broom.png";
import premium from "@/assets/partners/premium.png";

const partners = [
  { src: cristianes, alt: "Cristiane's Cleaning Services" },
  { src: evolve, alt: "Evolve Skin and Wax" },
  { src: broom, alt: "Broom Broom House Cleaning" },
  { src: premium, alt: "Premium Home Service Contractors LLC" },
];

const PartnersMarquee = () => {
  const { t } = useLanguage();
  const items = [...partners, ...partners];
  return (
    <section className="py-12 bg-brand-navy border-t border-brand-yellow/10 overflow-hidden">
      <div className="container mx-auto mb-6 text-center">
        <h3 className="text-lg md:text-xl font-bold text-brand-yellow tracking-wide">
          {t.partners.title}
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 w-max animate-marquee">
          {items.map((p, i) => (
            <div key={i} className="flex items-center justify-center h-24 w-40 shrink-0">
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
