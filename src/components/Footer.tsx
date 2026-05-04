import { Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/ad-company-logo.webp";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-navy border-t border-brand-yellow/10 pt-16 pb-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="AD Company logo" className="h-14 w-14 object-contain" width={56} height={56} loading="lazy" decoding="async" />
            <span className="font-display text-xl font-black text-brand-yellow">AD COMPANY</span>
          </div>
          <p className="text-muted-foreground">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">{t.footer.contact}</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-yellow" /> <a href="mailto:adcompany.eua@gmail.com" className="hover:text-brand-yellow transition-smooth">adcompany.eua@gmail.com</a></li>
            <li className="flex items-center gap-3"><svg className="h-4 w-4 text-brand-yellow shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.42 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/></svg> <a href="https://wa.me/5548994952650?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20saber%20mais%20da%20AD%20Company." target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-smooth">+55 48 9949-5265</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-brand-yellow">{t.footer.social}</h4>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/adcompany.ads/", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/adcompany.assessoria", label: "Facebook" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-brand-yellow/10 hover:bg-brand-yellow hover:text-brand-navy text-brand-yellow flex items-center justify-center transition-smooth" aria-label={label}>
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AD Company — {t.footer.rights}
      </div>
    </footer>
  );
};
export default Footer;
