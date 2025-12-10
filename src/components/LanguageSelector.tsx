import React, { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages, Language } from '@/i18n/translations';
import { ChevronDown } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 border border-primary/30 rounded-lg bg-background/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all duration-300"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="text-sm font-medium text-foreground">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-card/95 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-xl z-50 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as Language);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/20 transition-colors duration-200 ${
                language === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
