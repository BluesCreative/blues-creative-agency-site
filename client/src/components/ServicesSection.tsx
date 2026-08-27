import { Code, Globe, Palette, Sparkles, Zap, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

export const translations = {
  es: {
    title: 'Nuestros Servicios',
    subtitle: 'Soluciones creativas y tecnológicas para tu marca',
    processLabel: 'Nuestro proceso',
    processHint: 'Haz clic en cada servicio para conocer el paso a paso',
    close: 'Cerrar proceso',
    services: [
      {
        id: 'branding',
        title: 'Branding',
        description: 'Identidad visual única que representa los valores de tu marca y conecta con tu audiencia',
        icon: Palette,
        process: [
          { title: 'Descubrimiento', text: 'Conocemos tu negocio, audiencia, objetivos y el territorio que quieres conquistar.' },
          { title: 'Estrategia de marca', text: 'Definimos el posicionamiento, personalidad, tono y los atributos que harán memorable a tu marca.' },
          { title: 'Identidad visual', text: 'Creamos logotipo, colorimetría, tipografía y un sistema gráfico coherente y escalable.' },
          { title: 'Aplicaciones', text: 'Llevamos la identidad a piezas digitales, empaques, redes sociales y puntos de contacto.' },
          { title: 'Entrega y evolución', text: 'Organizamos los archivos y lineamientos para que tu marca crezca con consistencia.' },
        ],
      },
      {
        id: 'web-design',
        title: 'Diseño Web',
        description: 'Interfaces modernas y atractivas que ofrecen experiencias visuales excepcionales',
        icon: Globe,
        process: [
          { title: 'Arquitectura', text: 'Organizamos el contenido, las páginas y los recorridos que necesita tu audiencia.' },
          { title: 'Dirección visual', text: 'Definimos estilo, jerarquía, componentes y una interfaz alineada con tu identidad.' },
          { title: 'Prototipo', text: 'Diseñamos las pantallas clave y validamos la experiencia antes de construirla.' },
          { title: 'Responsive design', text: 'Adaptamos cada interacción para móvil, tablet y escritorio sin perder claridad.' },
          { title: 'Optimización', text: 'Revisamos accesibilidad, velocidad, SEO visual y detalles que mejoran la conversión.' },
        ],
      },
      {
        id: 'development',
        title: 'Desarrollo Digital',
        description: 'Soluciones web y aplicaciones robustas construidas con tecnología de punta',
        icon: Code,
        process: [
          { title: 'Alcance técnico', text: 'Convertimos tus objetivos de negocio en funcionalidades, flujos y prioridades concretas.' },
          { title: 'Arquitectura', text: 'Seleccionamos la estructura tecnológica adecuada para crear una solución segura y escalable.' },
          { title: 'Construcción', text: 'Desarrollamos la plataforma con código limpio, componentes reutilizables e integraciones.' },
          { title: 'Pruebas', text: 'Probamos navegación, formularios, automatizaciones y comportamiento en distintos dispositivos.' },
          { title: 'Lanzamiento', text: 'Publicamos, documentamos y dejamos la base lista para futuras mejoras y crecimiento.' },
        ],
      },
      {
        id: 'content',
        title: 'Contenido Digital',
        description: 'Estrategias de contenido que generan engagement y potencian tu presencia online',
        icon: Sparkles,
        process: [
          { title: 'Concepto', text: 'Definimos el objetivo de comunicación, la audiencia y la idea central de cada pieza.' },
          { title: 'Guion y dirección', text: 'Construimos el mensaje, la narrativa y la dirección visual para que cada contenido tenga intención.' },
          { title: 'Producción', text: 'Diseñamos, editamos y desarrollamos piezas gráficas, videos y recursos para tus canales.' },
          { title: 'Adaptaciones', text: 'Optimizamos formatos y proporciones para redes sociales, e-commerce y campañas digitales.' },
          { title: 'Publicación y análisis', text: 'Entregamos contenido listo para publicar y recomendaciones para mejorar su rendimiento.' },
        ],
      },
      {
        id: 'ai',
        title: 'Soluciones de IA',
        description: 'Inteligencia artificial integrada para automatizar y optimizar tus procesos',
        icon: Zap,
        process: [
          { title: 'Diagnóstico', text: 'Detectamos tareas repetitivas, puntos de fricción y oportunidades reales de automatización.' },
          { title: 'Diseño de solución', text: 'Definimos el rol de la IA, sus límites, el contexto de marca y los canales donde actuará.' },
          { title: 'Integración', text: 'Conectamos el agente o flujo inteligente con tus herramientas, formularios, WhatsApp o sitio web.' },
          { title: 'Entrenamiento', text: 'Ajustamos respuestas, tono, reglas y escenarios para que la experiencia sea útil y coherente.' },
          { title: 'Medición', text: 'Monitoreamos resultados y proponemos mejoras para que la solución evolucione contigo.' },
        ],
      },
    ],
  },
  en: {
    title: 'Our Services',
    subtitle: 'Creative and technological solutions for your brand',
    processLabel: 'Our process',
    processHint: 'Click each service to explore the step-by-step process',
    close: 'Close process',
    services: [
      {
        id: 'branding',
        title: 'Branding',
        description: 'Unique visual identity that represents your brand values and connects with your audience',
        icon: Palette,
        process: [
          { title: 'Discovery', text: 'We learn about your business, audience, goals and the territory you want to own.' },
          { title: 'Brand strategy', text: 'We define positioning, personality, tone and the attributes that make your brand memorable.' },
          { title: 'Visual identity', text: 'We create the logo, color system, typography and a coherent, scalable graphic system.' },
          { title: 'Applications', text: 'We bring the identity to digital pieces, packaging, social media and every touchpoint.' },
          { title: 'Delivery and growth', text: 'We organize files and guidelines so your brand can evolve with consistency.' },
        ],
      },
      {
        id: 'web-design',
        title: 'Web Design',
        description: 'Modern and attractive interfaces that offer exceptional visual experiences',
        icon: Globe,
        process: [
          { title: 'Architecture', text: 'We organize the content, pages and journeys your audience needs.' },
          { title: 'Visual direction', text: 'We define style, hierarchy, components and an interface aligned with your identity.' },
          { title: 'Prototype', text: 'We design key screens and validate the experience before building it.' },
          { title: 'Responsive design', text: 'We adapt every interaction to mobile, tablet and desktop without losing clarity.' },
          { title: 'Optimization', text: 'We review accessibility, speed, visual SEO and details that improve conversion.' },
        ],
      },
      {
        id: 'development',
        title: 'Digital Development',
        description: 'Robust web solutions and applications built with cutting-edge technology',
        icon: Code,
        process: [
          { title: 'Technical scope', text: 'We turn your business goals into concrete features, flows and priorities.' },
          { title: 'Architecture', text: 'We choose the right technology structure for a secure and scalable solution.' },
          { title: 'Build', text: 'We develop with clean code, reusable components and the integrations you need.' },
          { title: 'Testing', text: 'We test navigation, forms, automations and behavior across devices.' },
          { title: 'Launch', text: 'We publish, document and leave the foundation ready for future growth.' },
        ],
      },
      {
        id: 'content',
        title: 'Digital Content',
        description: 'Content strategies that generate engagement and boost your online presence',
        icon: Sparkles,
        process: [
          { title: 'Concept', text: 'We define the communication goal, audience and central idea for each piece.' },
          { title: 'Script and direction', text: 'We build the message, narrative and visual direction so every asset has intent.' },
          { title: 'Production', text: 'We design, edit and develop graphics, videos and resources for your channels.' },
          { title: 'Adaptations', text: 'We optimize formats and proportions for social media, e-commerce and digital campaigns.' },
          { title: 'Publishing and insights', text: 'We deliver content ready to publish and recommendations to improve performance.' },
        ],
      },
      {
        id: 'ai',
        title: 'AI Solutions',
        description: 'Artificial intelligence integrated to automate and optimize your processes',
        icon: Zap,
        process: [
          { title: 'Diagnosis', text: 'We identify repetitive tasks, friction points and real automation opportunities.' },
          { title: 'Solution design', text: 'We define the AI role, its boundaries, brand context and operating channels.' },
          { title: 'Integration', text: 'We connect the intelligent agent or workflow with tools, forms, WhatsApp or your website.' },
          { title: 'Training', text: 'We refine answers, tone, rules and scenarios for a useful, consistent experience.' },
          { title: 'Measurement', text: 'We monitor results and propose improvements so the solution evolves with you.' },
        ],
      },
    ],
  },
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

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

  const selectedService = t.services.find((service) => service.id === activeService);

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#070D1A' }}>
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 177, 227, 0.05) 25%, rgba(0, 177, 227, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 177, 227, 0.05) 75%, rgba(0, 177, 227, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 177, 227, 0.05) 25%, rgba(0, 177, 227, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 177, 227, 0.05) 75%, rgba(0, 177, 227, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="container relative z-10 px-4">
        <div className="text-center mb-12 md:mb-16">
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
            className={`font-black text-2xl md:text-5xl font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animationDelay: '0.1s',
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(0, 177, 227, 0.5), 0 0 40px rgba(0, 177, 227, 0.3)',
            }}
          >
            {t.title}
          </h2>
          <p className={`text-sm md:text-lg text-[#F4F4F4] max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>

          <div className={`flex items-center justify-center gap-4 mt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #00B1E3)' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00B1E3', boxShadow: '0 0 10px rgba(0, 177, 227, 0.6)' }}></div>
            <div className="h-1 w-12 rounded-full" style={{ background: 'linear-gradient(to left, transparent, #00B1E3)' }}></div>
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[#00B1E3]/70">{t.processHint}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {t.services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            return (
              <button
                type="button"
                key={service.id}
                aria-expanded={isActive}
                aria-controls={`service-process-${service.id}`}
                onClick={() => setActiveService(isActive ? null : service.id)}
                className={`group relative w-full p-6 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer text-left appearance-none ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${0.4 + index * 0.1}s` : '0s',
                  backgroundColor: isActive ? 'rgba(0, 177, 227, 0.14)' : '#081421',
                  border: `2px solid ${isActive ? '#FFFFFF' : '#00B1E3'}`,
                  boxShadow: isActive ? '0 0 40px rgba(0, 177, 227, 0.65), inset 0 0 24px rgba(0, 177, 227, 0.16)' : '0 0 20px rgba(0, 177, 227, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.6), 0 0 60px rgba(0, 177, 227, 0.4), inset 0 0 20px rgba(0, 177, 227, 0.2)';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isActive ? '0 0 40px rgba(0, 177, 227, 0.65), inset 0 0 24px rgba(0, 177, 227, 0.16)' : '0 0 20px rgba(0, 177, 227, 0.3)';
                  e.currentTarget.style.borderColor = isActive ? '#FFFFFF' : '#00B1E3';
                }}
              >
                <div className="relative z-10 space-y-4">
                  <div
                    className="inline-flex p-3 rounded-lg transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      backgroundColor: 'rgba(0, 177, 227, 0.2)',
                      boxShadow: '0 0 15px rgba(0, 177, 227, 0.3)',
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: '#00B1E3', filter: 'drop-shadow(0 0 5px rgba(0, 177, 227, 0.5))' }} />
                  </div>

                  <h3 className="font-bold text-xl transition-colors duration-300" style={{ color: '#FFFFFF', textShadow: '0 0 10px rgba(0, 177, 227, 0.4)' }}>
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#F4F4F4] leading-relaxed group-hover:text-[#F4F4F4] transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 transition-all duration-300" style={{ color: '#00B1E3' }}>
                    <span className="text-xs font-semibold">{isActive ? t.close : language === 'es' ? 'Ver proceso' : 'View process'}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {selectedService && (
          <div
            id={`service-process-${selectedService.id}`}
            className="mt-8 rounded-2xl border-2 p-5 md:p-8 animate-fade-in-up"
            style={{
              borderColor: '#00B1E3',
              background: 'linear-gradient(135deg, rgba(8, 20, 33, 0.98), rgba(0, 177, 227, 0.12))',
              boxShadow: '0 0 35px rgba(0, 177, 227, 0.35), inset 0 0 28px rgba(0, 177, 227, 0.08)',
            }}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em]" style={{ color: '#00B1E3' }}>{t.processLabel}</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#FFFFFF]" style={{ textShadow: '0 0 16px rgba(0, 177, 227, 0.45)' }}>
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="inline-flex items-center gap-2 self-start rounded-full border border-[#00B1E3]/70 px-3 py-2 text-xs font-semibold text-[#00B1E3] transition hover:bg-[#00B1E3]/10"
              >
                <X className="h-4 w-4" />
                {t.close}
              </button>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-5">
              {selectedService.process.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-xl border border-[#00B1E3]/30 bg-[#081421]/80 p-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 70}ms`, boxShadow: '0 0 18px rgba(0, 177, 227, 0.12)' }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00B1E3]/70 text-sm font-bold text-[#00B1E3]">{index + 1}</span>
                    <CheckCircle2 className="h-4 w-4 text-[#00B1E3]" />
                  </div>
                  <h4 className="text-sm font-bold text-[#FFFFFF]">{step.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#F4F4F4]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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
