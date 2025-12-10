import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import logoRed from '@/assets/logo-red.png';
import { Shield, Target, Trophy } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: 'cyan' | 'yellow' | 'red';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, color }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const colorClasses = {
    cyan: 'border-primary/30 hover:border-primary hover:shadow-[0_0_30px_rgba(82,223,250,0.2)]',
    yellow: 'border-secondary/30 hover:border-secondary hover:shadow-[0_0_30px_rgba(255,205,0,0.2)]',
    red: 'border-accent/30 hover:border-accent hover:shadow-[0_0_30px_rgba(196,20,49,0.2)]',
  };

  const iconColorClasses = {
    cyan: 'text-primary',
    yellow: 'text-secondary',
    red: 'text-accent',
  };

  return (
    <div
      ref={cardRef}
      className={`relative p-8 bg-card/50 backdrop-blur-sm border-2 rounded-2xl transition-all duration-700 group ${
        colorClasses[color]
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      {/* Icon */}
      <div className={`w-16 h-16 mb-6 ${iconColorClasses[color]} transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`absolute top-0 right-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-br from-${color === 'cyan' ? 'primary' : color === 'yellow' ? 'secondary' : 'accent'}/10 to-transparent`} />
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTitleVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Shield className="w-full h-full" />,
      title: t('features.domes.title'),
      description: t('features.domes.description'),
      color: 'cyan' as const,
    },
    {
      icon: <Target className="w-full h-full" />,
      title: t('features.loot.title'),
      description: t('features.loot.description'),
      color: 'yellow' as const,
    },
    {
      icon: <Trophy className="w-full h-full" />,
      title: t('features.competition.title'),
      description: t('features.competition.description'),
      color: 'red' as const,
    },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Floating logo */}
      <div className="absolute top-20 right-10 lg:right-32 w-32 opacity-10 animate-spin-slow pointer-events-none">
        <img src={logoRed} alt="" className="w-full" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">{t('features.title').split(' ')[0]}</span>{' '}
            <span className="text-primary glow-cyan">{t('features.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-secondary font-medium mb-4 glow-yellow">
            {t('features.subtitle')}
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t('features.description')}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
