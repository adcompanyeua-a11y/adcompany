import { Target, Megaphone, Globe, Search, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

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
  return (
    <section id="servicos" className="py-24 bg-brand-navy relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-widest mb-4">{t.services.tag}</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t.services.titleStart}<span className="text-gradient-yellow">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t.services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="group relative p-8 rounded-2xl bg-card-grad border border-border hover:border-brand-yellow/50 transition-smooth shadow-card-soft hover:-translate-y-1">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl mb-5 shadow-yellow-soft group-hover:scale-110 transition-smooth bg-yellow-grad text-brand-navy">
                  <Icon className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
