import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import gameplay1 from '@/assets/gameplay-1.png';
import gameplay2 from '@/assets/gameplay-2.png';
import environment from '@/assets/environment.png';
import gameplay3 from '@/assets/gameplay-3.png';
import gameplay4 from '@/assets/gameplay-4.png';
import gameplay5 from '@/assets/gameplay-5.png';
import gameplay6 from '@/assets/gameplay-6.png';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [gameplay1, gameplay2, environment, gameplay3, gameplay4, gameplay5, gameplay6];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image gallery */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            {/* Main image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 box-glow-cyan">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Domenation gameplay screenshot ${index + 1} - 3v3 multiplayer shooter action`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    activeImage === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  loading="lazy"
                />
              ))}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Thumbnail indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === index
                      ? 'border-primary scale-110'
                      : 'border-muted opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8" id="about-title">
              <span className="text-accent glow-red">{t('about.title')}</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card/50 rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">3v3</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Teams</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-xl border border-secondary/20">
                <div className="text-3xl font-bold text-secondary mb-1">∞</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Loot</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-xl border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-1">1</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Winner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
