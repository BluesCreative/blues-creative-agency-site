import { Palette, Globe, Code, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-xl bg-card/50 border border-border hover:border-primary-blue/50 transition-smooth hover:glow-blue cursor-pointer overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 inline-block p-3 rounded-lg bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-smooth">
                    <Icon className="w-6 h-6 text-primary-blue" />
                  </div>

                  {/* Title */}
                  <h3 className="font-title text-xl font-bold mb-3 text-foreground group-hover:text-primary-blue transition-smooth">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
