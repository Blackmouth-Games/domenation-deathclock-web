import { useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const seoData = {
  es: {
    title: 'Domenation - Lucha, Saquea y Sobrevive al Pulso | Shooter Multijugador',
    description: 'Domenation: El shooter frenético definitivo. Lucha en equipos 3v3, saquea armas épicas y sobrevive al pulso mortal. ¡Próximamente!',
    keywords: 'Domenation, shooter, videojuego, battle royale, multijugador, pulso, domo, loot, 3v3, acción'
  },
  en: {
    title: 'Domenation - Fight, Loot and Survive the Pulse | Multiplayer Shooter',
    description: 'Domenation: The ultimate frantic shooter. Fight in 3v3 teams, loot epic weapons and survive the deadly pulse. Coming soon!',
    keywords: 'Domenation, shooter, game, battle royale, multiplayer, pulse, dome, loot, 3v3, action'
  },
  fr: {
    title: 'Domenation - Combats, Pille et Survis au Pulse | Shooter Multijoueur',
    description: 'Domenation: Le shooter frénétique ultime. Combats en équipes 3v3, pille des armes épiques et survis au pulse mortel. Bientôt!',
    keywords: 'Domenation, shooter, jeu, battle royale, multijoueur, pulse, dôme, loot, 3v3, action'
  },
  zh: {
    title: 'Domenation - 战斗、掠夺、生存脉冲 | 多人射击游戏',
    description: 'Domenation：终极疯狂射击游戏。3v3团队作战，掠夺史诗武器，在致命脉冲中生存。即将推出！',
    keywords: 'Domenation, 射击游戏, 大逃杀, 多人游戏, 脉冲, 穹顶, 战利品, 3v3, 动作'
  },
  hi: {
    title: 'Domenation - लड़ो, लूटो और पल्स से बचो | मल्टीप्लेयर शूटर',
    description: 'Domenation: अंतिम उन्मत्त शूटर। 3v3 टीमों में लड़ें, महाकाव्य हथियार लूटें और घातक पल्स से बचें। जल्द आ रहा है!',
    keywords: 'Domenation, शूटर, गेम, बैटल रॉयल, मल्टीप्लेयर, पल्स, डोम, लूट, 3v3, एक्शन'
  },
  ja: {
    title: 'Domenation - 戦い、略奪し、パルスを生き延びろ | マルチプレイヤーシューター',
    description: 'Domenation：究極のフレネティックシューター。3v3チームで戦い、エピックな武器を略奪し、致命的なパルスを生き延びろ。近日公開！',
    keywords: 'Domenation, シューター, ゲーム, バトルロイヤル, マルチプレイヤー, パルス, ドーム, ルート, 3v3, アクション'
  },
  ko: {
    title: 'Domenation - 싸우고, 약탈하고, 펄스에서 살아남아라 | 멀티플레이어 슈터',
    description: 'Domenation: 궁극의 광란 슈터. 3v3 팀으로 싸우고, 에픽 무기를 약탈하고, 치명적인 펄스에서 살아남아라. 곧 출시!',
    keywords: 'Domenation, 슈터, 게임, 배틀로얄, 멀티플레이어, 펄스, 돔, 루트, 3v3, 액션'
  },
  pt: {
    title: 'Domenation - Lute, Saqueie e Sobreviva ao Pulso | Shooter Multijogador',
    description: 'Domenation: O shooter frenético definitivo. Lute em equipes 3v3, saqueie armas épicas e sobreviva ao pulso mortal. Em breve!',
    keywords: 'Domenation, shooter, jogo, battle royale, multijogador, pulso, domo, loot, 3v3, ação'
  }
};

const SEOHead: React.FC = () => {
  const { language } = useLanguage();
  const seo = seoData[language];

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seo.keywords);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', seo.description);

    // Update html lang attribute
    document.documentElement.lang = language;

    // Add/update hreflang links
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach(link => link.remove());

    const languages = ['es', 'en', 'fr', 'zh', 'hi', 'ja', 'ko', 'pt'];
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `https://domenation.io/?lang=${lang}`;
      document.head.appendChild(link);
    });

    // Add x-default
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = 'https://domenation.io/';
    document.head.appendChild(defaultLink);

    // Add JSON-LD structured data
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) existingJsonLd.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://domenation.io/#organization",
          "name": "Blackmouth Games",
          "url": "https://blackmouthgames.com/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://domenation.io/og-image.png"
          },
          "sameAs": [
            "https://x.com/Domenation_Game",
            "https://www.instagram.com/domenation_game/",
            "https://www.linkedin.com/company/11251833",
            "https://discord.com/invite/9KcaNgdUAC"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://domenation.io/#website",
          "url": "https://domenation.io/",
          "name": "Domenation",
          "description": seo.description,
          "publisher": {
            "@id": "https://domenation.io/#organization"
          },
          "inLanguage": language
        },
        {
          "@type": "VideoGame",
          "@id": "https://domenation.io/#game",
          "name": "Domenation",
          "description": seo.description,
          "genre": ["Shooter", "Battle Royale", "Multiplayer"],
          "gamePlatform": "PC",
          "applicationCategory": "Game",
          "author": {
            "@id": "https://domenation.io/#organization"
          },
          "trailer": {
            "@type": "VideoObject",
            "name": "Domenation Official Trailer",
            "description": "Official gameplay trailer for Domenation",
            "thumbnailUrl": "https://domenation.io/og-image.png",
            "uploadDate": "2024-01-01",
            "embedUrl": "https://www.youtube.com/embed/b3okGz-6lgk"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://domenation.io/#webpage",
          "url": "https://domenation.io/",
          "name": seo.title,
          "description": seo.description,
          "isPartOf": {
            "@id": "https://domenation.io/#website"
          },
          "about": {
            "@id": "https://domenation.io/#game"
          },
          "inLanguage": language
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [language, seo]);

  return null;
};

export default SEOHead;
