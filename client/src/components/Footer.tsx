import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
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
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-logo text-lg font-semibold text-white mb-4">{t.company}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-title font-bold text-foreground mb-4">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { label: t.services, id: 'services' },
                { label: t.portfolio, id: 'portfolio' },
                { label: t.about, id: 'about' },
                { label: t.contact, id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-title font-bold text-foreground mb-4">{t.contactInfo}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary-blue" />
                <a href={`mailto:${t.email}`} className="hover:text-primary-blue transition-smooth">
                  {t.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary-blue" />
                <a href={`tel:${t.phone}`} className="hover:text-primary-blue transition-smooth">
                  {t.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary-blue" />
                <span>{t.location}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-title font-bold text-foreground mb-4">{t.followUs}</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/bluescreativeagency"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue transition-smooth"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">{t.copyright}</div>
      </div>
    </footer>
  );
}
