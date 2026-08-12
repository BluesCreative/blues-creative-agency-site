import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';

const translations = {
  es: {
    title: 'Portafolio de Proyectos',
    subtitle: 'Trabajos destacados que demuestran nuestra creatividad y expertise',
    projects: [
      {
        id: 1,
        title: 'GasBone Mango Energy',
        category: 'Branding & Design',
        description: 'Identidad visual completa para marca de bebidas energéticas',
        fullDescription: 'Para el proyecto GasBone Mango Energy, recreamos una identidad visual profesional y audaz para la nueva línea de bebidas energizantes de GasBone. Nuestro equipo desarrolló un packaging innovador que captura la esencia energética de la marca, combinando elementos visuales vibrantes con tipografía impactante.\n\nEl proyecto incluyó:\n\n• Diseño de packaging profesional con elementos 3D y efectos visuales\n• Creación de video de marketing de alta calidad para promoción en redes sociales\n• Desarrollo de posters publicitarios para exhibición en puntos de venta\n• Identidad visual consistente en todos los materiales\n• Estrategia de branding que refleja la energía y dinamismo de la marca\n\nCada elemento fue cuidadosamente diseñado para destacar en el mercado y generar conexión emocional con el público objetivo. El resultado es una marca memorable que transmite potencia, frescura y modernidad.',
        image: '/manus-storage/gasbone-mango-energy_00b8dbed.png',
        softwares: [
          { name: 'Photoshop', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png' },
          { name: 'Illustrator', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968502.png' },
          { name: 'Premiere Pro', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png' },
        ],
        color: 'from-orange-500 to-red-500',
      },
      {
        id: 2,
        title: 'Waku Energy Drink',
        category: 'Branding, Video & E-commerce',
        description: 'Identidad visual completa, logotipo, paleta de colores, tipografía y video personalizado para e-commerce',
        fullDescription: 'Para el proyecto Waku Energy Drink, desarrollamos una estrategia integral de branding y contenido audiovisual enfocada en potenciar su presencia en e-commerce y redes sociales.\n\nEl proyecto abarcó:\n\n• Creación de un video totalmente personalizado para e-commerce con alto impacto visual y dinámicas de conversión\n• Desarrollo completo de su identidad visual corporativa\n• Diseño de logotipo exclusivo y memorable\n• Definición estratégica de la paleta de colores corporativa orientada a transmitir energía y naturalidad\n• Selección y adaptación de tipografía exclusiva para packaging y comunicación digital\n\nEl resultado es una marca vibrante, lista para dominar el mercado digital y cautivar a los consumidores más exigentes con un estándar visual de primer nivel.',
        image: '/manus-storage/waku-energy-drink_486fc6b5.png',
        softwares: [
          { name: 'Illustrator', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968502.png' },
          { name: 'Photoshop', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png' },
          { name: 'CapCut', icon: 'https://cdn-icons-png.flaticon.com/512/888/888857.png' },
        ],
        color: 'from-emerald-500 to-cyan-500',
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
        fullDescription: 'For the GasBone Mango Energy project, we created a professional and bold visual identity for the new line of energy drinks. Our team developed innovative packaging that captures the energetic essence of the brand, combining vibrant visual elements with impactful typography.\n\nThe project included:\n\n• Professional packaging design with 3D elements and visual effects\n• High-quality marketing video creation for social media promotion\n• Development of advertising posters for point-of-sale displays\n• Consistent visual identity across all materials\n• Branding strategy that reflects the energy and dynamism of the brand\n\nEach element was carefully designed to stand out in the market and create emotional connection with the target audience. The result is a memorable brand that conveys power, freshness, and modernity.',
        image: '/manus-storage/gasbone-mango-energy_00b8dbed.png',
        softwares: [
          { name: 'Photoshop', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png' },
          { name: 'Illustrator', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968502.png' },
          { name: 'Premiere Pro', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png' },
        ],
        color: 'from-orange-500 to-red-500',
      },
      {
        id: 2,
        title: 'Waku Energy Drink',
        category: 'Branding, Video & E-commerce',
        description: 'Complete visual identity, logo, color palette, typography and custom e-commerce video',
        fullDescription: 'For the Waku Energy Drink project, we developed a comprehensive branding and audiovisual content strategy focused on boosting its presence in e-commerce and social media.\n\nThe project included:\n\n• Creation of a fully customized e-commerce video with high visual impact and conversion dynamics\n• Complete development of corporate visual identity\n• Exclusive and memorable logo design\n• Strategic definition of corporate color palette aimed at conveying energy and naturalness\n• Selection and adaptation of exclusive typography for packaging and digital communication\n\nThe result is a vibrant brand, ready to dominate the digital market and captivate the most demanding consumers with top-tier visual standards.',
        image: '/manus-storage/waku-energy-drink_486fc6b5.png',
        softwares: [
          { name: 'Illustrator', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968502.png' },
          { name: 'Photoshop', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png' },
          { name: 'CapCut', icon: 'https://cdn-icons-png.flaticon.com/512/888/888857.png' },
        ],
        color: 'from-emerald-500 to-cyan-500',
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
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
    <>
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
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Icon/Number */}
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-blue/20 group-hover:bg-primary-blue/40 transition-all duration-300">
                    <span className="text-lg font-bold text-primary-blue">{String(project.id).padStart(2, '0')}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-title text-xl font-bold mb-2 text-foreground group-hover:text-primary-blue transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Category */}
                  <p className="text-xs font-semibold text-primary-blue/70 mb-3">{project.category}</p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-4">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary-blue text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>{language === 'es' ? 'Ver Detalles' : 'View Details'}</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Border Animation */}
                <div className="absolute inset-0 rounded-xl border border-primary-blue/0 group-hover:border-primary-blue/50 group-hover:shadow-[0_0_20px_rgba(0,177,227,0.3)] transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </>
  );
}
