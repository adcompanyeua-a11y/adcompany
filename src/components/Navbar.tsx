import { Button } from "@/components/ui/button";
import logo from "@/assets/ad-company-logo.webp";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const { t } = useLanguage();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-brand-navy/70 border-b border-brand-yellow/10">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2 sm:gap-3">
          <img src={logo} alt="AD Company logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" width={48} height={48} fetchPriority="high" decoding="async" />
          <span className="font-display text-base sm:text-lg font-extrabold text-brand-yellow tracking-tight">AD COMPANY</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#servicos" className="hover:text-brand-yellow transition-smooth">{t.nav.services}</a>
          <a href="#processo" className="hover:text-brand-yellow transition-smooth">{t.nav.process}</a>
          <a href="#diferenciais" className="hover:text-brand-yellow transition-smooth">{t.nav.differentials}</a>
          <a href="#contato" className="hover:text-brand-yellow transition-smooth">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href="#contato">{t.nav.cta}</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
