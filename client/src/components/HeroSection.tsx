import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Background with Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary-blue/5"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-primary-blue/15 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Radial gradient from center */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/50"></div>

        {/* Mouse-following glow effect */}
        <div
          className="absolute w-96 h-96 bg-primary-blue/20 rounded-full mix-blend-screen filter blur-3xl opacity-0 pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            opacity: 0.3,
          }}
        ></div>

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-blue" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary-blue/30 rounded-lg animate-float opacity-20"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 border-2 border-primary-blue/20 rounded-full animate-float opacity-15" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary-blue/25 rounded-lg animate-float opacity-20" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Tagline with animation */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-blue/30 bg-primary-blue/5 backdrop-blur-sm animate-fade-in">
            <Sparkles size={16} className="text-primary-blue animate-pulse" />
            <span className="text-sm font-semibold text-primary-blue">{t.tagline}</span>
          </div>

          {/* Main Headline with staggered animation */}
          <h1 className="font-title text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text block">{t.headline}</span>
          </h1>

          {/* Description with animation */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.description}
          </p>

          {/* CTA Button with animation */}
          <Button
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-primary-blue to-primary-blue/80 hover:from-primary-blue/90 hover:to-primary-blue text-background font-semibold py-6 px-8 rounded-lg glow-blue-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up shadow-2xl"
            style={{ animationDelay: '0.3s' }}
          >
            {t.cta}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>

          {/* Secondary CTA */}
          <Button
            onClick={() => scrollToSection('services')}
            variant="outline"
            className="border-primary-blue/50 text-primary-blue hover:bg-primary-blue/10 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Explorar Servicios
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground">{t.scrollText}</p>
            <div className="w-6 h-10 border-2 border-primary-blue/30 rounded-full flex items-center justify-center group hover:border-primary-blue/60 transition-colors">
              <div className="w-1 h-2 bg-primary-blue rounded-full animate-pulse group-hover:animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-primary-blue/50 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-1 h-32 bg-gradient-to-t from-primary-blue/50 to-transparent"></div>
    </section>
  );
}
