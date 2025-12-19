import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import opusLogo from '@/assets/opus-logo.png';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ka' ? 'en' : 'ka';
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute('lang', newLang);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/courses', label: t('nav.courses') },
    { to: '/cefr', label: t('nav.cefr') },
    { to: '/teachers', label: t('nav.teachers') },
    { to: '/contact', label: t('nav.contact') },
    { to: '/faq', label: t('nav.faq') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover-lift">
            <img src={opusLogo} alt="Opus Logo" className="h-10 w-10" loading="eager" />
            <span className="text-xl font-bold text-primary">
              {i18n.language === 'ka' ? 'ოპუსი' : 'OPUS'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 min-w-[44px] min-h-[44px]"
              aria-label={`Switch to ${i18n.language === 'ka' ? 'English' : 'Georgian'} language`}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {i18n.language === 'ka' ? 'EN' : 'KA'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors min-w-[44px] min-h-[44px]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-accent transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="gap-2 w-full min-h-[44px]"
              aria-label={`Switch to ${i18n.language === 'ka' ? 'English' : 'Georgian'} language`}
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              {i18n.language === 'ka' ? 'EN' : 'KA'}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
