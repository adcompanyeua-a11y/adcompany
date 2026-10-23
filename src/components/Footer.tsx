import { Mail, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import logo from "@/assets/ad-company-logo.webp";
import { useLanguage } from "@/i18n/LanguageContext";

const WhatsAppIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.42 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: "Serviços",      href: "#servicos" },
    { label: "Método VCP",   href: "#metodo" },
    { label: "Depoimentos",  href: "#depoimentos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato",      href: "#contato" },
  ];

  return (
    <footer className="bg-card border-t border-white/5">
      {/* CTA band */}
      <div className="bg-yellow-grad">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-brand-navy text-xl md:text-2xl font-bold leading-tight">
              Pronto para escalar sua empresa nos EUA?
            </p>
            <p className="text-brand-navy/70 text-sm mt-1">Agende uma reunião gratuita hoje.</p>
          </div>
          <a
            href="#contato"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-yellow-400 font-bold text-sm hover:bg-brand-navy/90 active:scale-[0.97] transition-all duration-150"
          >
            Falar com especialista
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 md:px-6 py-14 grid md:grid-cols-3 gap-10 md:gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AD Company logo" className="h-10 w-auto" loading="lazy" decoding="async" />
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            {t.footer.tagline}
          </p>
          {/* Social */}
          <div className="flex gap-2 pt-1">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/adcompany.ads/", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/adcompany.assessoria", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-9 w-9 rounded-lg bg-white/[0.04] border border-white/6 hover:border-yellow-400/25 hover:text-yellow-400 text-white/40 flex items-center justify-center transition-all duration-150"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white/30 mb-4">Navegação</h4>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.12em] uppercase text-white/30 mb-4">{t.footer.contact}</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:adcompany.eua@gmail.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-150"
              >
                <Mail className="h-4 w-4 text-yellow-400/60 shrink-0" />
                adcompany.eua@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5548994952650?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20saber%20mais%20da%20AD%20Company."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-150"
              >
                <span className="text-yellow-400/60 shrink-0"><WhatsAppIcon /></span>
                +55 48 9949-5265
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} AD Company. {t.footer.rights}
          </p>
          <p className="text-xs text-white/20">
            agenciaadcompany.com.br
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
