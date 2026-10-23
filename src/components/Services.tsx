import { Target, Megaphone, Globe, Search, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="currentColor" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="currentColor" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="currentColor" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const icons = [Target, Megaphone, Search, Users, GoogleIcon, Globe];

const Services = () => {
  const { t } = useLanguage();
  const gridRef = useScrollReveal();

  return (
    <section id="servicos" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute top-1/2 right-[-10%] h-[400px] w-[400px] rounded-full bg-yellow-400/4 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <div className="section-label mx-auto mb-5">{t.services.tag}</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-5">
            {t.services.titleStart}
            <span className="text-gradient-yellow block sm:inline"> {t.services.titleHighlight}</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">{t.services.subtitle}</p>
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="stagger-item group relative p-7 rounded-2xl bg-card-grad border border-white/6 hover:border-yellow-400/25 transition-all duration-200 hover:shadow-[0_8px_40px_-8px_hsl(46_100%_52%/0.12)] cursor-default"
              >
                {/* Number */}
                <span className="absolute top-5 right-6 text-[11px] font-bold text-white/15 tracking-widest tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/8 border border-yellow-400/12 text-yellow-400 group-hover:bg-yellow-400/12 transition-colors duration-200">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
