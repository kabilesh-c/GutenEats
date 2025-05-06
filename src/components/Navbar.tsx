import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Globe, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Language } from '@/types';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-fluid mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-german-brown ml-2">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcSY_MDb6DkalVC58kMUXUg6A4nH--OxOur6B5Klkj1QxIpNQaBm_5ofqTdOPvjy4OY0&usqp=CAU" 
            alt="Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="flex items-center whitespace-nowrap">Guten<span className="text-german-amber">Eats</span></span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-german-brown"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-german-brown hover:text-german-amber transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/menu" className="text-german-brown hover:text-german-amber transition-colors">
            {t('nav.menu')}
          </Link>
          <Link to="/about" className="text-german-brown hover:text-german-amber transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/members" className="text-german-brown hover:text-german-amber transition-colors">
            {t('nav.team')}
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">{t('language')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as Language)}
                  className={`cursor-pointer ${language === lang.code ? 'bg-accent font-medium' : ''}`}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-3">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-german-brown hover:text-german-amber transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-german-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLSq0Pt3GJlO_1OlG5a_vpXiBaywFJbQbFAg&s"
              alt="Cart Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 z-50 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-german-brown hover:text-german-amber transition-colors" onClick={toggleMenu}>
                {t('nav.home')}
              </Link>
              <Link to="/menu" className="text-german-brown hover:text-german-amber transition-colors" onClick={toggleMenu}>
                {t('nav.menu')}
              </Link>
              <Link to="/about" className="text-german-brown hover:text-german-amber transition-colors" onClick={toggleMenu}>
                {t('nav.about')}
              </Link>
              <Link to="/members" className="text-german-brown hover:text-german-amber transition-colors" onClick={toggleMenu}>
                {t('nav.team')}
              </Link>
              <Link to="/cart" className="text-german-brown hover:text-german-amber transition-colors flex items-center gap-2" onClick={toggleMenu}>
                <ShoppingCart className="h-5 w-5" />
                {t('nav.cart')}
                {totalItems > 0 && (
                  <span className="bg-german-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              
              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground mb-2">{t('language')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        toggleMenu();
                      }}
                      className={`py-2 px-3 rounded-md text-sm ${
                        language === lang.code 
                          ? 'bg-german-amber text-white' 
                          : 'bg-gray-100 text-german-brown'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
