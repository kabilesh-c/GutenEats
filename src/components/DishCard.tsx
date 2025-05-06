import React, { useState } from 'react';
import { Dish, Language } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { Clock, ChefHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { speak } from '@/utils/speechSynthesis';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [isPlaying, setIsPlaying] = useState(false);
  
  const translation = dish.translations[language];
  
  const handlePlayAudio = async () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    
    setIsPlaying(true);
    
    try {
      await speak({ 
        text: `${translation.name}. ${translation.description}`, 
        language,
        rate: 1.0,
        pitch: 1.0
      });
      setIsPlaying(false);
    } catch (error) {
      console.error('Speech synthesis error:', error);
      setIsPlaying(false);
    }
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language === 'es' ? 'es-ES' : 'fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  // Determine difficulty label based on preparation time
  const getDifficultyLabel = () => {
    const prepTime = dish.prepTime || 30;
    if (prepTime <= 20) return 'easy';
    if (prepTime <= 40) return 'medium';
    return 'hard';
  };

  const difficulty = getDifficultyLabel();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={dish.imageUrl} 
          alt={translation.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-2xl font-serif font-bold text-german-brown mb-2">
          {translation.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {translation.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {dish.prepTime || 30}min
          </div>
          
          <div className={`flex items-center ${
            difficulty === 'easy' ? 'text-green-600' : 
            difficulty === 'medium' ? 'text-amber-600' : 
            'text-red-600'
          }`}>
            <ChefHat className="h-4 w-4 mr-1" />
            {difficulty}
          </div>
          
          <div className="ml-auto font-bold text-lg text-german-brown">
            {formatPrice(dish.price)}
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <Link to={`/recipe/${dish.id}`} className="block flex-1">
            <Button 
              variant="default" 
              className="w-full bg-german-amber hover:bg-german-amber/90"
            >
              {t('button.viewRecipe')}
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            className="w-full border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => addToCart(dish.id)}
          >
            {t('button.addToCart')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DishCard;
