import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Language, translations } from './translations';

const supportedLanguages: Language[] = ['es', 'en', 'fr', 'zh', 'hi', 'ja', 'ko', 'pt'];

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage || 'es';
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Map browser language codes to supported languages
  const langMap: Record<string, Language> = {
    es: 'es',
    en: 'en',
    fr: 'fr',
    zh: 'zh',
    hi: 'hi',
    ja: 'ja',
    ko: 'ko',
    pt: 'pt',
  };
  
  return langMap[langCode] || 'es';
};

const getInitialLanguage = (): Language => {
  // Check localStorage first
  const stored = localStorage.getItem('language') as Language;
  if (stored && supportedLanguages.includes(stored)) {
    return stored;
  }
  // Otherwise detect from browser
  return detectBrowserLanguage();
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
