import { Code, Globe, Palette, Sparkles, Zap } from 'lucide-react';
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
    <section id="services" className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#0a0e27' }}>
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 177, 227, 0.05) 25%, rgba(0, 177, 227, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 177, 227, 0.05) 75%, rgba(0, 177, 227, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 177, 227, 0.05) 25%, rgba(0, 177, 227, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 177, 227, 0.05) 75%, rgba(0, 177, 227, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              borderColor: '#00B1E3',
              backgroundColor: 'rgba(0, 177, 227, 0.1)',
              boxShadow: '0 0 15px rgba(0, 177, 227, 0.3)',
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00B1E3', animation: 'pulse 2s infinite' }}></div>
            <span className="text-xs font-semibold" style={{ color: '#00B1E3', textShadow: '0 0 10px rgba(0, 177, 227, 0.4)' }}>
              {language === 'es' ? 'Servicios Profesionales' : 'Professional Services'}
            </span>
          </div>

          <h2
            className={`font-black text-4xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animationDelay: '0.1s',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(0, 177, 227, 0.5), 0 0 40px rgba(0, 177, 227, 0.3)',
            }}
          >
            {t.title}
          </h2>
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>

          {/* Decorative line */}
          <div className={`flex items-center justify-center gap-4 mt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #00B1E3)' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00B1E3', boxShadow: '0 0 10px rgba(0, 177, 227, 0.6)' }}></div>
            <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #00B1E3)' }}></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative p-6 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${0.4 + index * 0.1}s` : '0s',
                  backgroundColor: '#0A1525',
                  border: '2px solid #00B1E3',
                  boxShadow: '0 0 20px rgba(0, 177, 227, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.6), 0 0 60px rgba(0, 177, 227, 0.4), inset 0 0 20px rgba(0, 177, 227, 0.2)';
                  e.currentTarget.style.borderColor = '#00B1E3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.3)';
                  e.currentTarget.style.borderColor = '#00B1E3';
                }}
              >
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon with animation */}
                  <div
                    className="inline-flex p-3 rounded-lg transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      backgroundColor: 'rgba(0, 177, 227, 0.2)',
                      boxShadow: '0 0 15px rgba(0, 177, 227, 0.3)',
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#00B1E3', filter: 'drop-shadow(0 0 5px rgba(0, 177, 227, 0.5))' }} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl transition-colors duration-300" style={{ color: '#ffffff', textShadow: '0 0 10px rgba(0, 177, 227, 0.4)' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" style={{ color: '#00B1E3' }}>
                    <span className="text-xs font-semibold">{language === 'es' ? 'Explorar' : 'Explore'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 flex justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 hover:scale-105 transition-all duration-300 cursor-pointer group"
            style={{
              borderColor: '#00B1E3',
              backgroundColor: 'rgba(0, 177, 227, 0.1)',
              boxShadow: '0 0 15px rgba(0, 177, 227, 0.3)',
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00B1E3', animation: 'pulse 2s infinite' }}></div>
            <span className="text-sm transition-colors duration-300" style={{ color: '#00B1E3', textShadow: '0 0 10px rgba(0, 177, 227, 0.4)' }}>
              {language === 'es' ? 'Más de 50 proyectos completados' : 'More than 50 completed projects'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
