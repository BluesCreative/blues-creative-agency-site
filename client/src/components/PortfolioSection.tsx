import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const translations = {
  es: {
    title: 'Portafolio de Proyectos',
    subtitle: 'Trabajos destacados que demuestran nuestra creatividad y expertise',
    projects: [
      {
        id: 1,
        title: 'GasBone Mango Energy',
        category: 'Branding & Design',
        description: 'Identidad visual completa para marca de bebidas energéticas con diseño audaz y moderno',
        color: 'from-orange-500 to-red-500',
      },
      {
        id: 2,
        title: 'Waku Energy Drink',
        category: 'Visual Design',
        description: 'Experiencia visual única con elementos 3D y animaciones para marca de bebidas',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        id: 3,
        title: 'Blue\'s Creative Agency',
        category: 'Web Design',
        description: 'Sitio web corporativo moderno con diseño minimalista y experiencia de usuario optimizada',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        id: 4,
        title: 'Proyecto Corporativo',
        category: 'Branding',
        description: 'Estrategia de branding completa incluyendo identidad visual y guía de marca',
        color: 'from-purple-500 to-pink-500',
      },
      {
        id: 5,
        title: 'Desarrollo Digital',
        category: 'Web Development',
        description: 'Aplicación web robusta con tecnología de punta y arquitectura escalable',
        color: 'from-green-500 to-emerald-500',
      },
      {
        id: 6,
        title: 'Contenido Multimedia',
        category: 'Digital Content',
        description: 'Estrategia de contenido digital con videos, gráficos y copywriting profesional',
        color: 'from-yellow-500 to-orange-500',
      },
    ],
  },
  en: {
    title: 'Project Portfolio',
    subtitle: 'Featured works that demonstrate our creativity and expertise',
    projects: [
      {
        id: 1,
        title: 'GasBone Mango Energy',
        category: 'Branding & Design',
        description: 'Complete visual identity for energy drink brand with bold and modern design',
        color: 'from-orange-500 to-red-500',
      },
      {
        id: 2,
        title: 'Waku Energy Drink',
        category: 'Visual Design',
        description: 'Unique visual experience with 3D elements and animations for beverage brand',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        id: 3,
        title: 'Blue\'s Creative Agency',
        category: 'Web Design',
        description: 'Modern corporate website with minimalist design and optimized user experience',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        id: 4,
        title: 'Corporate Project',
        category: 'Branding',
        description: 'Complete branding strategy including visual identity and brand guidelines',
        color: 'from-purple-500 to-pink-500',
      },
      {
        id: 5,
        title: 'Digital Development',
        category: 'Web Development',
        description: 'Robust web application with cutting-edge technology and scalable architecture',
        color: 'from-green-500 to-emerald-500',
      },
      {
        id: 6,
        title: 'Multimedia Content',
        category: 'Digital Content',
        description: 'Digital content strategy with videos, graphics and professional copywriting',
        color: 'from-yellow-500 to-orange-500',
      },
    ],
  },
};

export default function PortfolioSection() {
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

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80"></div>
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-blue/30 bg-primary-blue/5 backdrop-blur-sm mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></div>
            <span className="text-xs font-semibold text-primary-blue">{language === 'es' ? 'Casos de Éxito' : 'Success Stories'}</span>
          </div>

          <h2 className={`font-title text-2xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className={`text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>

          {/* Decorative line */}
          <div className={`flex items-center justify-center gap-4 mt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary-blue rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></div>
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary-blue rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden bg-card/50 backdrop-blur-md border border-primary-blue/20 hover:border-primary-blue/60 transition-all duration-500 hover:bg-card/80 hover-lift cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${0.4 + index * 0.1}s` : '0s',
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl border border-primary-blue/0 group-hover:border-primary-blue/50 group-hover:shadow-[0_0_20px_rgba(0,177,227,0.3)] transition-all duration-500"></div>

              {/* Image Placeholder with Gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center overflow-hidden`}>
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project number */}
                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold text-white/20 group-hover:text-white/40 transition-all duration-500 transform group-hover:scale-110">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-primary-blue uppercase tracking-wider mb-2 group-hover:text-primary-blue/80 transition-colors">
                      {project.category}
                    </p>
                    <h3 className="font-title text-lg font-bold text-foreground group-hover:text-primary-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="ml-4 p-2 rounded-lg bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                    <ExternalLink className="w-5 h-5 text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-primary-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 mt-4">
                  <span className="text-xs font-semibold">{language === 'es' ? 'Ver proyecto' : 'View project'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 flex justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary-blue to-primary-blue/80 hover:from-primary-blue/90 hover:to-primary-blue text-background font-semibold transition-all duration-300 transform hover:scale-105 glow-blue-lg shadow-2xl">
            {language === 'es' ? 'Ver todos los proyectos' : 'View all projects'}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
