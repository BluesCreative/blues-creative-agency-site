import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  es: {
    company: 'Blue\'s Creative Agency',
    description: 'Transformamos ideas en experiencias digitales que impulsan tu marca hacia el futuro.',
    quickLinks: 'Enlaces Rápidos',
    services: 'Servicios',
    portfolio: 'Portafolio',
    about: 'Nosotros',
    contact: 'Contacto',
    contactInfo: 'Información de Contacto',
    email: 'contacto@bluescreativeagency.com',
    phone: '+57 313 762 1044',
    location: 'Colombia',
    followUs: 'Síguenos',
    copyright: '© 2026 Blue\'s Creative Agency. Todos los derechos reservados.',
    services_title: 'Servicios',
    branding: 'Branding',
    webDesign: 'Diseño Web',
    development: 'Desarrollo Digital',
    content: 'Contenido Digital',
    aiSolutions: 'Soluciones IA',
  },
  en: {
    company: 'Blue\'s Creative Agency',
    description: 'We transform ideas into digital experiences that drive your brand into the future.',
    quickLinks: 'Quick Links',
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    contactInfo: 'Contact Information',
    email: 'contact@bluescreativeagency.com',
    phone: '+57 313 762 1044',
    location: 'Colombia',
    followUs: 'Follow Us',
    copyright: '© 2026 Blue\'s Creative Agency. All rights reserved.',
    services_title: 'Services',
    branding: 'Branding',
    webDesign: 'Web Design',
    development: 'Digital Development',
    content: 'Digital Content',
    aiSolutions: 'AI Solutions',
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative pt-20 pb-8"
      style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #0d1a3a 50%, #0a0e27 100%)',
        borderTop: '2px solid #00B1E3',
        boxShadow: '0 -10px 40px rgba(0, 177, 227, 0.1)',
      }}
    >
      {/* Decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, transparent, #00B1E3, transparent)',
        }}
      />

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <img
                src="https://bluescreat-z5qxfsrw.manus.space/manus-storage/blues-logo-outline_16e6773d_9bbe9948.png"
                alt="Blue's Creative Agency"
                className="h-12 w-auto"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(0, 177, 227, 0.4))',
                }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.description}
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com/bluescreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(0, 177, 227, 0.1)',
                  border: '2px solid #00B1E3',
                  color: '#00B1E3',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00B1E3';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.1)';
                  e.currentTarget.style.color = '#00B1E3';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/bluescreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(0, 177, 227, 0.1)',
                  border: '2px solid #00B1E3',
                  color: '#00B1E3',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00B1E3';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.1)';
                  e.currentTarget.style.color = '#00B1E3';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://facebook.com/bluescreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(0, 177, 227, 0.1)',
                  border: '2px solid #00B1E3',
                  color: '#00B1E3',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00B1E3';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.1)';
                  e.currentTarget.style.color = '#00B1E3';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/bluescreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(0, 177, 227, 0.1)',
                  border: '2px solid #00B1E3',
                  color: '#00B1E3',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00B1E3';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 177, 227, 0.1)';
                  e.currentTarget.style.color = '#00B1E3';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6" style={{ textShadow: '0 0 10px rgba(0, 177, 227, 0.4)' }}>
              {t.quickLinks}
            </h3>
            <ul className="space-y-3">
              {[
                { label: t.services, id: 'services' },
                { label: t.portfolio, id: 'portfolio' },
                { label: t.about, id: 'about' },
                { label: t.contact, id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6" style={{ textShadow: '0 0 10px rgba(0, 177, 227, 0.4)' }}>
              {t.services_title}
            </h3>
            <ul className="space-y-3">
              {[t.branding, t.webDesign, t.development, t.content, t.aiSolutions].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6" style={{ textShadow: '0 0 10px rgba(0, 177, 227, 0.4)' }}>
              {t.contactInfo}
            </h3>
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${t.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <Mail
                  size={20}
                  style={{
                    color: '#00B1E3',
                    filter: 'drop-shadow(0 0 5px rgba(0, 177, 227, 0.4))',
                  }}
                />
                <span className="text-sm break-all">{t.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${t.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <Phone
                  size={20}
                  style={{
                    color: '#00B1E3',
                    filter: 'drop-shadow(0 0 5px rgba(0, 177, 227, 0.4))',
                  }}
                />
                <span className="text-sm">{t.phone}</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/573137621044"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <MessageCircle
                  size={20}
                  style={{
                    color: '#00B1E3',
                    filter: 'drop-shadow(0 0 5px rgba(0, 177, 227, 0.4))',
                  }}
                />
                <span className="text-sm">WhatsApp: +57 313 762 1044</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin
                  size={20}
                  style={{
                    color: '#00B1E3',
                    filter: 'drop-shadow(0 0 5px rgba(0, 177, 227, 0.4))',
                  }}
                />
                <span className="text-sm">{t.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px my-8"
          style={{
            background: 'linear-gradient(90deg, transparent, #00B1E3, transparent)',
          }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            {t.copyright}
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/573137621044"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#00B1E3',
              color: '#000000',
              border: '2px solid #00B1E3',
              boxShadow: '0 0 15px rgba(0, 177, 227, 0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 177, 227, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 177, 227, 0.5)';
            }}
          >
            💬 {language === 'es' ? 'Hablemos por WhatsApp' : 'Chat on WhatsApp'}
          </a>
        </div>
      </div>
    </footer>
  );
}
