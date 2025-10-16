import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import opusLogo from '@/assets/opus-logo.png';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={opusLogo} alt="Opus Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold">
                {i18n.language === 'ka' ? 'ოპუსი' : 'OPUS'}
              </span>
            </div>
            <p className="text-white/80">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-white/80 hover:text-accent transition-colors">
                {t('nav.about')}
              </Link>
              <Link to="/courses" className="block text-white/80 hover:text-accent transition-colors">
                {t('nav.courses')}
              </Link>
              <Link to="/teachers" className="block text-white/80 hover:text-accent transition-colors">
                {t('nav.teachers')}
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-accent transition-colors">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:info@opus-edu.ge" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-white/80">21 Merab Kostava St, Tbilisi</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
