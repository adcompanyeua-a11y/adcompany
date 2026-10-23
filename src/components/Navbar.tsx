import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/ad-company-logo.webp";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.services,      href: "#servicos" },
    { label: t.nav.process,       href: "#processo" },
    { label: t.nav.differentials, href: "#diferenciais" },
  ];

  const close = () => setOpen(false);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "hsl(220 25% 6% / 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid hsl(220 15% 14% / 0.8)"
            : "1px solid transparent",
        }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a href="#" className="shrink-0 group">
            <img
              src={logo}
              alt="AD Company"
              className="h-9 w-auto transition-opacity duration-200 group-hover:opacity-80"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-150 rounded-md hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right — lang + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "pt" ? "es" : "pt")}
              className="text-xs font-bold text-white/50 hover:text-white/80 transition-colors duration-150 tracking-wider"
            >
              {lang === "pt" ? "ES" : "PT"}
            </button>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-brand-navy bg-yellow-grad shadow-yellow-soft hover:brightness-105 active:scale-[0.97] transition-transform duration-150"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-card-grad border-l border-border flex flex-col transition-transform duration-300`}
          style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <img src={logo} alt="AD Company" className="h-8 w-auto" />
            <button onClick={close} className="p-1 text-white/60 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-1 p-4 mt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="px-4 py-3 rounded-lg text-base font-medium text-white/75 hover:text-white hover:bg-white/5 transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-border flex flex-col gap-3">
            <button
              onClick={() => { setLang(lang === "pt" ? "es" : "pt"); close(); }}
              className="text-sm font-semibold text-white/50 hover:text-white/80 transition-colors self-start px-4"
            >
              {lang === "pt" ? "Ver em Español" : "Ver em Português"}
            </button>
            <a
              href="#contato"
              onClick={close}
              className="w-full text-center py-3 rounded-xl text-sm font-bold text-brand-navy bg-yellow-grad shadow-yellow-soft active:scale-[0.97] transition-transform duration-150"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
