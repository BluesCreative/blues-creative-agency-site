import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary-blue/50 transition-smooth hover:glow-blue cursor-pointer"
            >
              {/* Image Placeholder with Gradient */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                    {project.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs font-semibold text-primary-blue uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-title text-lg font-bold text-foreground group-hover:text-primary-blue transition-smooth">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
