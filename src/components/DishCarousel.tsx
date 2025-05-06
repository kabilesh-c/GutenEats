
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { dishes } from '@/data/dishes';
import { ArrowRight } from 'lucide-react';
import { Dish } from '@/types';
import { motion } from 'framer-motion';

const DishCarousel = () => {
  const { language } = useLanguage();
  const [hoveredDish, setHoveredDish] = useState<string | null>(null);
  const featuredDishes = dishes.slice(0, 5);

  const dishVariants = {
    hover: {
      y: -15,
      rotate: 5,
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    normal: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const renderDish = (dish: Dish) => {
    const translation = dish.translations[language];
    const isHovered = hoveredDish === dish.id;
    
    return (
      <CarouselItem key={dish.id} className="md:basis-1/2 lg:basis-1/3">
        <Link to={`/recipe/${dish.id}`} className="block">
          <motion.div 
            className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all"
            variants={dishVariants}
            animate={isHovered ? 'hover' : 'normal'}
            onMouseEnter={() => setHoveredDish(dish.id)}
            onMouseLeave={() => setHoveredDish(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <motion.img 
                src={dish.imageUrl} 
                alt={translation.name}
                className="h-full w-full object-cover transition duration-300"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                <h3 className="font-serif text-xl font-bold">{translation.name}</h3>
                <p className="text-sm text-white/80">{translation.region}</p>
              </div>
            </div>
            
            <div className="p-4">
              <p className="line-clamp-2 text-sm text-gray-600">{translation.description}</p>
              <motion.div 
                className="mt-4 flex items-center text-german-amber"
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm font-medium">Discover Recipe</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.div>
            </div>
            
            {isHovered && (
              <motion.div 
                className="absolute -top-2 -right-2 flex h-16 w-16 items-center justify-center rounded-full bg-german-amber text-white shadow-lg"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <span className="text-sm font-bold">Try it!</span>
              </motion.div>
            )}
          </motion.div>
        </Link>
      </CarouselItem>
    );
  };

  return (
    <Carousel
      className="w-full max-w-6xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {featuredDishes.map(renderDish)}
      </CarouselContent>
      <div className="flex justify-end gap-2 mt-4">
        <CarouselPrevious className="relative -left-0 h-9 w-9 rounded-full" />
        <CarouselNext className="relative -right-0 h-9 w-9 rounded-full" />
      </div>
    </Carousel>
  );
};

export default DishCarousel;
