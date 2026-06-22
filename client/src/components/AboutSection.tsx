import { Lightbulb, Zap, Shield, Target, TrendingUp, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80"></div>
      </div>

      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-blue/30 bg-primary-blue/5 backdrop-blur-sm mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></div>
            <span className="text-xs font-semibold text-primary-blue">{language === 'es' ? 'Quiénes Somos' : 'Who We Are'}</span>
          </div>

          <h2 className={`font-title text-2xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">{t.title}</span>
          </h2>
        </div>

        {/* Purpose, Mission, Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
          {/* Purpose */}
          <div className={`group relative p-6 md:p-8 rounded-xl bg-card/50 backdrop-blur-md border border-primary-blue/20 hover:border-primary-blue/60 transition-all duration-500 hover:bg-card/80 hover-lift overflow-hidden ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-xl border border-primary-blue/0 group-hover:border-primary-blue/50 group-hover:shadow-[0_0_20px_rgba(0,177,227,0.3)] transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="font-title text-lg md:text-2xl font-bold mb-4 text-primary-blue group-hover:text-primary-blue/80 transition-colors">{t.purpose.title}</h3>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{t.purpose.text}</p>
            </div>
          </div>

          {/* Mission */}
          <div className={`group relative p-6 md:p-8 rounded-xl bg-card/50 backdrop-blur-md border border-primary-blue/20 hover:border-primary-blue/60 transition-all duration-500 hover:bg-card/80 hover-lift overflow-hidden ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-xl border border-primary-blue/0 group-hover:border-primary-blue/50 group-hover:shadow-[0_0_20px_rgba(0,177,227,0.3)] transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="font-title text-lg md:text-2xl font-bold mb-4 text-primary-blue group-hover:text-primary-blue/80 transition-colors">{t.mission.title}</h3>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{t.mission.text}</p>
            </div>
          </div>

          {/* Vision */}
          <div className={`group relative p-6 md:p-8 rounded-xl bg-card/50 backdrop-blur-md border border-primary-blue/20 hover:border-primary-blue/60 transition-all duration-500 hover:bg-card/80 hover-lift overflow-hidden ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-xl border border-primary-blue/0 group-hover:border-primary-blue/50 group-hover:shadow-[0_0_20px_rgba(0,177,227,0.3)] transition-all duration-500"></div>
            <div className="relative z-10">
              <h3 className="font-title text-lg md:text-2xl font-bold mb-4 text-primary-blue group-hover:text-primary-blue/80 transition-colors">{t.vision.title}</h3>
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{t.vision.text}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`flex items-center justify-center gap-4 my-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary-blue rounded-full"></div>
          <div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></div>
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-primary-blue rounded-full"></div>
        </div>

        {/* Values */}
        <div>
          <h3 className={`font-title text-xl md:text-3xl font-bold mb-8 md:mb-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <span className="gradient-text">{language === 'es' ? 'Valores de Marca' : 'Brand Values'}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {t.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-6 rounded-xl bg-card/50 backdrop-blur-md border border-primary-blue/20 hover:border-primary-blue/60 transition-all duration-500 hover:bg-card/80 hover-lift overflow-hidden ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: isVisible ? `${0.7 + index * 0.1}s` : '0s',
                  }}
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl border border-primary-blue/0 group-hover:border-primary-blue/50 group-hover:shadow-[0_0_20px_rgba(0,177,227,0.3)] transition-all duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary-blue/10 group-hover:bg-primary-blue/20 transition-all duration-500 transform group-hover:scale-110">
                      <Icon className="w-6 h-6 text-primary-blue group-hover:text-primary-blue/80 transition-colors" />
                    </div>
                    <h4 className="font-title text-xl font-bold mb-2 text-foreground group-hover:text-primary-blue transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
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
