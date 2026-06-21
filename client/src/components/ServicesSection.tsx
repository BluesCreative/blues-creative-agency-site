import { Palette, Globe, Code, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const translations = {
  es: {
    title: 'Nuestros Servicios',
    subtitle: 'Soluciones creativas y tecnológicas para tu marca',
    services: [
      {
        id: 'branding',
        title: 'Branding',
        description: 'Identidad visual única que representa los valores de tu marca y conecta con tu audiencia',
        icon: Palette,
      },
      {
        id: 'web-design',
        title: 'Diseño Web',
        description: 'Interfaces modernas y atractivas que ofrecen experiencias visuales excepcionales',
        icon: Globe,
      },
      {
        id: 'development',
        title: 'Desarrollo Digital',
        description: 'Soluciones web y aplicaciones robustas construidas con tecnología de punta',
        icon: Code,
      },
      {
        id: 'content',
        title: 'Contenido Digital',
        description: 'Estrategias de contenido que generan engagement y potencian tu presencia online',
        icon: Sparkles,
      },
      {
        id: 'ai',
        title: 'Soluciones de IA',
        description: 'Inteligencia artificial integrada para automatizar y optimizar tus procesos',
        icon: Zap,
      },
    ],
  },
  en: {
    title: 'Our Services',
    subtitle: 'Creative and technological solutions for your brand',
    services: [
      {
        id: 'branding',
        title: 'Branding',
        description: 'Unique visual identity that represents your brand values and connects with your audience',
        icon: Palette,
      },
      {
        id: 'web-design',
        title: 'Web Design',
        description: 'Modern and attractive interfaces that offer exceptional visual experiences',
        icon: Globe,
      },
      {
        id: 'development',
        title: 'Digital Development',
        description: 'Robust web solutions and applications built with cutting-edge technology',
        icon: Code,
      },
      {
        id: 'content',
        title: 'Digital Content',
        description: 'Content strategies that generate engagement and boost your online presence',
        icon: Sparkles,
      },
      {
        id: 'ai',
        title: 'AI Solutions',
        description: 'Artificial intelligence integrated to automate and optimize your processes',
        icon: Zap,
      },
    ],
  },
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-blue/30 bg-primary-blue/5 backdrop-blur-sm mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></div>
            <span className="text-xs font-semibold text-primary-blue">{language === 'es' ? 'Servicios Profesionales' : 'Professional Services'}</span>
          </div>

          <h2 className={`font-title text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>

          {/* Decorative line */}
          <div className={`flex items-center justify-center gap-4 mt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary-blue rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></div>
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary-blue rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative p-6 rounded-xl bg-card/50 backdrop-blur-md border border-primary-blue/20 hover:border-primary-blue/60 transition-all duration-500 hover:bg-card/80 hover-lift overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${0.4 + index * 0.1}s` : '0s',
                }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl border border-primary-blue/0 group-hover:border-primary-blue/50 group-hover:shadow-[0_0_20px_rgba(0,177,227,0.3)] transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon with animation */}
                  <div className="inline-flex p-3 rounded-lg bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-6 h-6 text-primary-blue group-hover:text-primary-blue/80 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-title text-xl font-bold text-foreground group-hover:text-primary-blue transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-primary-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <span className="text-xs font-semibold">{language === 'es' ? 'Explorar' : 'Explore'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 flex justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-blue/30 bg-primary-blue/5 backdrop-blur-sm hover:border-primary-blue/60 hover:bg-primary-blue/10 transition-all duration-300 cursor-pointer group">
            <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></div>
            <span className="text-sm text-muted-foreground group-hover:text-primary-blue transition-colors">
              {language === 'es' ? 'Más de 50 proyectos completados' : 'More than 50 completed projects'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
