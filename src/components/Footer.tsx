import { useLanguage } from '@/context/LanguageContext';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-german-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Guten<span className="text-german-amber">Eats</span></h3>
            <p className="text-gray-300 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/kabilesh-c20" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-german-amber transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/nneptunussz._.89?igsh=eXF0OW52dzMyMzVp" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-german-amber transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/kabilesh-c" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-german-amber transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-german-amber transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-german-amber transition-colors">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-german-amber transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-german-amber transition-colors">
                  {t('nav.cart')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Details</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Srm University, Kattankulathur</p>
              <p>Chennai - 603203</p>
              <p>Email: kabileshc.dev@gmail.com</p>
              <p>Phone: +91 9487350709</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p className="mb-2">{t('footer.cookedBy')}</p>
          <p>&copy; {currentYear} GutenEats. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
