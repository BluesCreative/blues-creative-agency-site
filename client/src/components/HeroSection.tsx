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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Tagline with neon effect */}
        <div className="mb-6 inline-block">
          <div
            className="px-6 py-2 rounded-full border-2 border-green-500 animate-pulse"
            style={{
              borderColor: '#00ff00',
              boxShadow: '0 0 20px #00ff0066, inset 0 0 20px #00ff0033',
            }}
          >
            <span className="text-sm font-bold" style={{ color: '#00ff00', textShadow: '0 0 10px #00ff00' }}>
              ✨ {t.tagline}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className="text-5xl md:text-7xl font-black mb-6 leading-tight max-w-4xl"
          style={{
            color: '#ffffff',
            textShadow: `
              0 0 20px #00ff00,
              0 0 40px #00ffff,
              0 0 60px #00ff00,
              2px 2px 4px rgba(0, 255, 0, 0.5)
            `,
          }}
        >
          {t.headline}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-12 flex-wrap justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="px-8 py-6 text-lg font-bold rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#00ff00',
              color: '#000000',
              borderColor: '#00ff00',
              boxShadow: '0 0 20px #00ff00, inset 0 0 10px #00ff0066',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px #00ff00, inset 0 0 20px #00ff0099';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px #00ff00, inset 0 0 10px #00ff0066';
            }}
          >
            {t.cta}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-bold rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: '#00ffff',
              color: '#00ffff',
              backgroundColor: 'transparent',
              boxShadow: '0 0 20px #00ffff66',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px #00ffff, inset 0 0 20px #00ffff66';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px #00ffff66';
            }}
          >
            Hablemos
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm" style={{ color: '#00ffff', textShadow: '0 0 10px #00ffff' }}>
            {t.scrollText}
          </span>
          <svg
            className="w-6 h-6 animate-bounce"
            style={{ color: '#00ff00', filter: 'drop-shadow(0 0 10px #00ff00)' }}
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
