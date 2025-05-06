
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-german-cream/30">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-serif font-bold text-german-brown mb-6">404</h1>
        <p className="text-xl text-german-brown/80 mb-8">
          Oops! The page you're looking for seems to have wandered off the menu.
        </p>
        <Link to="/">
          <Button className="bg-german-amber hover:bg-german-amber/90">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
