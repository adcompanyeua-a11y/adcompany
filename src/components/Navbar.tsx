import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/ad-company-logo.webp";

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: scrolled ? "rgba(9,9,15,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src={logo}
              alt="AD Company"
              className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-[13px] font-medium text-white/55 hover:text-white transition-colors duration-150 rounded-md hover:bg-white/[0.04]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "pt" ? "es" : "pt")}
              className="text-[11px] font-semibold text-white/35 hover:text-white/70 transition-colors duration-150 tracking-widest"
            >
              {lang === "pt" ? "ES" : "PT"}
            </button>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold text-[#09090f] bg-yellow-grad active:scale-[0.97] transition-transform duration-150"
              style={{ boxShadow: "0 2px 12px rgba(245,196,0,0.2)" }}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        />
        <div
          className="absolute top-0 right-0 h-full w-72 flex flex-col"
          style={{
            background: "var(--surface)",
            borderLeft: "1px solid var(--border)",
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
          }}
        >
          <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid var(--border)" }}>
            <img src={logo} alt="AD Company" className="h-7 w-auto" />
            <button onClick={close} className="p-1.5 text-white/50 hover:text-white rounded-md hover:bg-white/5">
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-0.5 p-3 mt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="px-4 py-3 rounded-lg text-[15px] font-medium text-white/65 hover:text-white hover:bg-white/[0.04] transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="p-4 flex flex-col gap-3" style={{ borderTop: "1px solid var(--border)" }}>
            <button
              onClick={() => { setLang(lang === "pt" ? "es" : "pt"); close(); }}
              className="text-[12px] font-semibold text-white/40 hover:text-white/70 transition-colors self-start px-4 tracking-wider"
            >
              {lang === "pt" ? "Ver em Español" : "Ver em Português"}
            </button>
            <a
              href="#contato"
              onClick={close}
              className="w-full text-center py-3 rounded-xl text-[14px] font-bold text-[#09090f] bg-yellow-grad active:scale-[0.97] transition-transform duration-150"
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
