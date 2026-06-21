import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with gradient and glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Tagline */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/30">
          <p className="text-sm font-medium text-primary-blue">{t.tagline}</p>
        </div>

        {/* Main Headline */}
        <h1 className="font-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">{t.headline}</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          {t.description}
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToContact}
          className="bg-primary-blue hover:bg-primary-blue/90 text-background font-semibold px-8 py-6 text-lg rounded-lg glow-blue-lg transition-smooth group"
        >
          {t.cta}
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground">{t.scrollText}</p>
            <div className="w-6 h-10 border-2 border-primary-blue/30 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-primary-blue rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
