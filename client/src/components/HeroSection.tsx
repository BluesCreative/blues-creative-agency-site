import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { NeonBackground } from './NeonBackground';

const translations = {
  es: {
    tagline: 'Transformamos ideas en experiencias digitales',
    headline: 'Where Creativity Meets Technology',
    description: 'Diseño, branding, desarrollo web y soluciones de IA para llevar tu marca al siguiente nivel',
    cta: 'Comienza tu proyecto',
    scrollText: 'Desplázate para explorar',
  },
  en: {
    tagline: 'We transform ideas into digital experiences',
    headline: 'Where Creativity Meets Technology',
    description: 'Design, branding, web development and AI solutions to take your brand to the next level',
    cta: 'Start your project',
    scrollText: 'Scroll to explore',
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: '#0a0e27' }}>
      {/* Neon Background with Particles */}
      <NeonBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)]">
        {/* Logo Section */}
        <div className="mb-8 animate-fade-in-up">
          <img
            src="/manus-storage/blues-logo-outline_16e6773d.png"
            alt="Blue's Creative Agency"
            className="h-32 w-auto mx-auto transition-all duration-300 hover:scale-110"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(0, 177, 227, 0.5))',
            }}
          />
        </div>

        {/* Tagline with brand color */}
        <div className="mb-6 inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div
            className="px-6 py-2 rounded-full border-2 animate-pulse"
            style={{
              borderColor: '#00B1E3',
              backgroundColor: 'rgba(0, 177, 227, 0.1)',
              boxShadow: '0 0 20px rgba(0, 177, 227, 0.4), inset 0 0 20px rgba(0, 177, 227, 0.2)',
            }}
          >
            <span className="text-sm font-bold" style={{ color: '#00B1E3', textShadow: '0 0 10px rgba(0, 177, 227, 0.6)' }}>
              ✨ {t.tagline}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className="text-5xl md:text-7xl font-black mb-6 leading-tight max-w-4xl animate-fade-in-up"
          style={{
            animationDelay: '0.2s',
            color: '#ffffff',
            textShadow: `
              0 0 20px rgba(0, 177, 227, 0.6),
              0 0 40px rgba(0, 177, 227, 0.4),
              0 0 60px rgba(0, 177, 227, 0.2),
              2px 2px 4px rgba(0, 177, 227, 0.3)
            `,
          }}
        >
          {t.headline}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-12 flex-wrap justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="px-8 py-6 text-lg font-bold rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#00B1E3',
              color: '#000000',
              borderColor: '#00B1E3',
              boxShadow: '0 0 20px rgba(0, 177, 227, 0.6), inset 0 0 10px rgba(0, 177, 227, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.8), inset 0 0 20px rgba(0, 177, 227, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.6), inset 0 0 10px rgba(0, 177, 227, 0.3)';
            }}
          >
            {t.cta}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-bold rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: '#00B1E3',
              color: '#00B1E3',
              backgroundColor: 'transparent',
              boxShadow: '0 0 20px rgba(0, 177, 227, 0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.8), inset 0 0 20px rgba(0, 177, 227, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.4)';
            }}
          >
            Hablemos
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm" style={{ color: '#00B1E3', textShadow: '0 0 10px rgba(0, 177, 227, 0.6)' }}>
            {t.scrollText}
          </span>
          <svg
            className="w-6 h-6 animate-bounce"
            style={{ color: '#00B1E3', filter: 'drop-shadow(0 0 10px rgba(0, 177, 227, 0.6))' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
