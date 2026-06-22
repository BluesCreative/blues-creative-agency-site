import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const translations = {
  es: {
    services: 'Servicios',
    portfolio: 'Portafolio',
    about: 'Nosotros',
    contact: 'Contacto',
    contactBtn: 'Contacta con nosotros',
  },
  en: {
    services: 'Services',
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    contactBtn: 'Contact Us',
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'rgba(10, 14, 39, 0.95)',
        borderColor: '#00ff00',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div
          className="font-black text-xl font-semibold"
          style={{
            color: '#ffffff',
            textShadow: '0 0 15px #00ff00, 0 0 30px #00ffff',
          }}
        >
          Blue's Creative Agency
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: t.services, id: 'services' },
            { label: t.portfolio, id: 'portfolio' },
            { label: t.about, id: 'about' },
            { label: t.contact, id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium transition-all duration-300 hover:scale-110"
              style={{
                color: '#ffffff',
                textShadow: '0 0 5px #00ffff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00ff00';
                e.currentTarget.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.textShadow = '0 0 5px #00ffff';
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div
            className="flex gap-2 rounded-lg p-1"
            style={{
              border: '2px solid #00ff00',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            {['es', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as 'es' | 'en')}
                className="px-3 py-1 text-xs font-bold rounded transition-all duration-300"
                style={{
                  backgroundColor: language === lang ? '#00ff00' : 'transparent',
                  color: language === lang ? '#000000' : '#00ff00',
                  textShadow: language === lang ? 'none' : '0 0 5px #00ff00',
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            className="font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: '#00ff00',
              color: '#000000',
              border: '2px solid #00ff00',
              boxShadow: '0 0 20px #00ff00',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px #00ff00, 0 0 60px #00ffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px #00ff00';
            }}
          >
            {t.contactBtn}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Language Switcher Mobile */}
          <div
            className="flex gap-1 rounded p-1"
            style={{
              border: '2px solid #00ff00',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
            }}
          >
            {['es', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as 'es' | 'en')}
                className="px-2 py-1 text-xs font-bold rounded transition-all duration-300"
                style={{
                  backgroundColor: language === lang ? '#00ff00' : 'transparent',
                  color: language === lang ? '#000000' : '#00ff00',
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transition-all duration-300"
            style={{
              color: '#00ff00',
              filter: 'drop-shadow(0 0 5px #00ff00)',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            backgroundColor: 'rgba(10, 14, 39, 0.98)',
            borderTop: '2px solid #00ff00',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
          }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {[
              { label: t.services, id: 'services' },
              { label: t.portfolio, id: 'portfolio' },
              { label: t.about, id: 'about' },
              { label: t.contact, id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-medium transition-all duration-300"
                style={{
                  color: '#00ff00',
                  textShadow: '0 0 10px #00ff00',
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full font-bold mt-2 rounded-full"
              style={{
                backgroundColor: '#00ff00',
                color: '#000000',
                border: '2px solid #00ff00',
                boxShadow: '0 0 20px #00ff00',
              }}
            >
              {t.contactBtn}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
