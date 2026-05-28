import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem('jdf-language') === 'hi' ? 'hi' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('jdf-language', language);
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
