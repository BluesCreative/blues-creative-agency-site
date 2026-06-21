import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="font-logo text-xl font-semibold text-white">
          Blue's Creative Agency
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
          >
            {t.services}
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
          >
            {t.portfolio}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
          >
            {t.about}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
          >
            {t.contact}
          </button>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex gap-2 border border-border rounded-lg p-1">
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 text-xs font-medium rounded transition-smooth ${
                language === 'es'
                  ? 'bg-primary-blue text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-medium rounded transition-smooth ${
                language === 'en'
                  ? 'bg-primary-blue text-background'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-primary-blue hover:bg-primary-blue/90 text-background font-medium glow-blue transition-smooth"
          >
            {t.contactBtn}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Language Switcher Mobile */}
          <div className="flex gap-1 border border-border rounded p-1">
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 text-xs font-medium rounded transition-smooth ${
                language === 'es'
                  ? 'bg-primary-blue text-background'
                  : 'text-muted-foreground'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-xs font-medium rounded transition-smooth ${
                language === 'en'
                  ? 'bg-primary-blue text-background'
                  : 'text-muted-foreground'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-blue hover:text-primary-blue/80 transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
            >
              {t.portfolio}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-sm text-muted-foreground hover:text-primary-blue transition-smooth"
            >
              {t.contact}
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary-blue hover:bg-primary-blue/90 text-background font-medium mt-2"
            >
              {t.contactBtn}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
