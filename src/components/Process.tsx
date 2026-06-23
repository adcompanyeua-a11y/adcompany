import { useLanguage } from "@/i18n/LanguageContext";

const Process = () => {
  const { t } = useLanguage();
  return (
    <section id="processo" className="py-16 md:py-24 bg-royal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(hsl(var(--brand-yellow)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="container relative mx-auto">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">{t.process.tag}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            {t.process.titleStart}<span className="text-gradient-yellow">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">{t.process.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.process.steps.map((step, i) => (
            <div key={step.t} className="relative p-6 md:p-8 rounded-2xl bg-brand-navy/60 backdrop-blur border border-brand-yellow/20 hover:border-brand-yellow transition-smooth">
              <div className="text-5xl md:text-6xl font-black text-gradient-yellow font-display mb-3 leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{step.t}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
