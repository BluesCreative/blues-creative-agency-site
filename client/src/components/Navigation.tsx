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
        backgroundColor: 'rgba(7, 13, 26, 0.95)',
        borderColor: '#00B1E3',
        boxShadow: '0 0 20px rgba(0, 177, 227, 0.2)',
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <img
          src="https://bluescreat-z5qxfsrw.manus.space/manus-storage/blues-logo-outline_16e6773d_9bbe9948.png"
          alt="Blue's Creative Agency"
          className="h-12 w-auto transition-all duration-300 hover:scale-105"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(0, 177, 227, 0.4))',
          }}
        />

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
                color: '#FFFFFF',
                textShadow: '0 0 5px rgba(0, 177, 227, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00B1E3';
                e.currentTarget.style.textShadow = '0 0 10px rgba(0, 177, 227, 0.8), 0 0 20px rgba(0, 177, 227, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.textShadow = '0 0 5px rgba(0, 177, 227, 0.4)';
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
              border: '2px solid #00B1E3',
              backgroundColor: 'rgba(0, 177, 227, 0.1)',
              boxShadow: '0 0 10px rgba(0, 177, 227, 0.3)',
            }}
          >
            {['es', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as 'es' | 'en')}
                className="px-3 py-1 text-xs font-bold rounded transition-all duration-300"
                style={{
                  backgroundColor: language === lang ? '#00B1E3' : 'transparent',
                  color: language === lang ? '#070D1A' : '#00B1E3',
                  textShadow: language === lang ? 'none' : '0 0 5px rgba(0, 177, 227, 0.4)',
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
              backgroundColor: '#00B1E3',
              color: '#070D1A',
              border: '2px solid #00B1E3',
              boxShadow: '0 0 20px rgba(0, 177, 227, 0.6)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 177, 227, 0.8), 0 0 60px rgba(0, 177, 227, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 177, 227, 0.6)';
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
              border: '2px solid #00B1E3',
              backgroundColor: 'rgba(0, 177, 227, 0.1)',
            }}
          >
            {['es', 'en'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang as 'es' | 'en')}
                className="px-2 py-1 text-xs font-bold rounded transition-all duration-300"
                style={{
                  backgroundColor: language === lang ? '#00B1E3' : 'transparent',
                  color: language === lang ? '#070D1A' : '#00B1E3',
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
              color: '#00B1E3',
              filter: 'drop-shadow(0 0 5px rgba(0, 177, 227, 0.6))',
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
            backgroundColor: 'rgba(7, 13, 26, 0.98)',
            borderTop: '2px solid #00B1E3',
            boxShadow: '0 0 20px rgba(0, 177, 227, 0.2)',
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
                  color: '#00B1E3',
                  textShadow: '0 0 10px rgba(0, 177, 227, 0.5)',
                }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full font-bold mt-2 rounded-full"
              style={{
                backgroundColor: '#00B1E3',
                color: '#070D1A',
                border: '2px solid #00B1E3',
                boxShadow: '0 0 20px rgba(0, 177, 227, 0.6)',
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
