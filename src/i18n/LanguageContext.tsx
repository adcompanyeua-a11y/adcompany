import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Lang, type Translation } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Translation };

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "pt";
    const stored = localStorage.getItem("lang");
    return stored === "es" || stored === "pt" ? stored : "pt";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "es";
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
