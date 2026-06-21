import { Lightbulb, Target, Heart, Zap, TrendingUp, Shield, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  es: {
    title: 'Sobre Nosotros',
    purpose: {
      title: 'Propósito',
      text: 'Transformar ideas en experiencias visuales y digitales que ayuden a las marcas a crecer, diferenciarse y conectar con su audiencia.',
    },
    mission: {
      title: 'Misión',
      text: 'Crear soluciones de diseño, branding, desarrollo web y contenido digital que combinen creatividad, estrategia e innovación tecnológica.',
    },
    vision: {
      title: 'Visión',
      text: 'Convertirse en una agencia creativa reconocida internacionalmente por fusionar diseño visual, inteligencia artificial y desarrollo digital para impulsar negocios modernos.',
    },
    values: [
      {
        title: 'Innovación',
        description: 'Exploramos constantemente nuevas herramientas, tendencias y tecnologías.',
        icon: Lightbulb,
      },
      {
        title: 'Creatividad',
        description: 'Cada proyecto es una oportunidad para crear algo único y memorable.',
        icon: Zap,
      },
      {
        title: 'Profesionalismo',
        description: 'Cuidamos cada detalle para entregar resultados de alta calidad.',
        icon: Shield,
      },
      {
        title: 'Estrategia',
        description: 'No diseñamos solo para que se vea bien; diseñamos para generar resultados.',
        icon: Target,
      },
      {
        title: 'Evolución',
        description: 'Las marcas crecen y nosotros evolucionamos junto a ellas.',
        icon: TrendingUp,
      },
      {
        title: 'Confianza',
        description: 'Construimos relaciones duraderas con nuestros clientes.',
        icon: Heart,
      },
    ],
  },
  en: {
    title: 'About Us',
    purpose: {
      title: 'Purpose',
      text: 'Transform ideas into visual and digital experiences that help brands grow, differentiate, and connect with their audience.',
    },
    mission: {
      title: 'Mission',
      text: 'Create design, branding, web development and digital content solutions that combine creativity, strategy and technological innovation.',
    },
    vision: {
      title: 'Vision',
      text: 'Become an internationally recognized creative agency by merging visual design, artificial intelligence and digital development to drive modern businesses.',
    },
    values: [
      {
        title: 'Innovation',
        description: 'We constantly explore new tools, trends and technologies.',
        icon: Lightbulb,
      },
      {
        title: 'Creativity',
        description: 'Every project is an opportunity to create something unique and memorable.',
        icon: Zap,
      },
      {
        title: 'Professionalism',
        description: 'We care about every detail to deliver high-quality results.',
        icon: Shield,
      },
      {
        title: 'Strategy',
        description: 'We design not just to look good; we design to generate results.',
        icon: Target,
      },
      {
        title: 'Evolution',
        description: 'Brands grow and we evolve with them.',
        icon: TrendingUp,
      },
      {
        title: 'Trust',
        description: 'We build lasting relationships with our clients.',
        icon: Heart,
      },
    ],
  },
};

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t.title}</span>
          </h2>
        </div>

        {/* Purpose, Mission, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Purpose */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary-blue/50 transition-smooth">
            <h3 className="font-title text-2xl font-bold mb-4 text-primary-blue">{t.purpose.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.purpose.text}</p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary-blue/50 transition-smooth">
            <h3 className="font-title text-2xl font-bold mb-4 text-primary-blue">{t.mission.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.mission.text}</p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-xl bg-card border border-border hover:border-primary-blue/50 transition-smooth">
            <h3 className="font-title text-2xl font-bold mb-4 text-primary-blue">{t.vision.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.vision.text}</p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-title text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">{language === 'es' ? 'Valores de Marca' : 'Brand Values'}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary-blue/50 transition-smooth hover:glow-blue overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4 inline-block p-3 rounded-lg bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-smooth">
                      <Icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <h4 className="font-title text-xl font-bold mb-2 text-foreground group-hover:text-primary-blue transition-smooth">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
