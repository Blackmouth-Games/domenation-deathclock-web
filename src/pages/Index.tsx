import React from 'react';
import { LanguageProvider } from '@/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <SEOHead />
      <div className="min-h-screen bg-background overflow-x-hidden">
        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Navigation */}
        <header>
          <Navbar />
        </header>
        
        {/* Main content */}
        <main id="main-content" role="main">
          <HeroSection />
          <section aria-labelledby="features-title">
            <FeaturesSection />
          </section>
          <section aria-labelledby="about-title">
            <AboutSection />
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
