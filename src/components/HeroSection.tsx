import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import deathclockLogo from '@/assets/deathclock.png';
import sticker1 from '@/assets/sticker-1.png';
import sticker2 from '@/assets/sticker-2.png';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/b3okGz-6lgk?autoplay=1&mute=1&loop=1&playlist=b3okGz-6lgk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-1/2 left-1/2 min-w-[100vw] min-h-[100vh] w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-150 pointer-events-none"
          style={{ border: 'none' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 z-20 pointer-events-none scanline" />

      {/* Floating stickers with parallax */}
      <img
        src={sticker1}
        alt=""
        className="absolute left-4 lg:left-20 top-1/4 w-32 lg:w-48 opacity-90 z-20 animate-float"
        style={{
          transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)`,
        }}
      />
      <img
        src={sticker2}
        alt=""
        className="absolute right-4 lg:right-20 bottom-1/4 w-32 lg:w-48 opacity-90 z-20 animate-float"
        style={{
          transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
          animationDelay: '1s',
        }}
      />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        {/* Coming Soon Badge */}
        <div
          className={`inline-flex items-center gap-2 px-6 py-2 bg-accent/20 border border-accent rounded-full mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-accent font-bold tracking-widest text-sm">{t('hero.comingSoon')}</span>
        </div>

        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          <img
            src={deathclockLogo}
            alt="Domenation Deathclock"
            className="w-full max-w-2xl mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <h2
          className={`text-2xl md:text-4xl font-bold mb-6 glow-cyan transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-primary">{t('hero.tagline')}</span>
        </h2>

        {/* Description */}
        <p
          className={`max-w-2xl mx-auto text-lg text-muted-foreground mb-10 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {t('hero.description')}
        </p>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
