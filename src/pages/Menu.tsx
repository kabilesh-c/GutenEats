import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getDishesByCategory } from '@/data/allDishes';
import { Link } from 'react-router-dom';
import { Search, Clock, ChefHat, Filter, ArrowUpDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { dishCategories } from '@/data/dishCategories';
import { DishCategory } from '@/data/dishCategories';
import DishCard from '@/components/DishCard';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const Menu = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<DishCategory>('all');
  const [sortOption, setSortOption] = useState<'price-asc' | 'price-desc' | 'prep-asc' | 'prep-desc'>('price-asc');

  // Get dishes based on active category
  const categoryDishes = getDishesByCategory(activeCategory);
  
  // Filter dishes based on search query
  const filteredDishes = categoryDishes.filter(dish => {
    const translation = dish.translations[language];
    
    return (
      translation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      translation.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      translation.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      translation.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  // Sort dishes based on the current sort option
  const sortedDishes = [...filteredDishes].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc': 
        return a.price - b.price;
      case 'price-desc': 
        return b.price - a.price;
      case 'prep-asc': 
        return a.prepTime - b.prepTime;
      case 'prep-desc': 
        return b.prepTime - a.prepTime;
      default: 
        return 0;
    }
  });

  // Function to determine difficulty level
  const getDifficultyLabel = (prepTime: number) => {
    if (prepTime <= 20) return 'easy';
    if (prepTime <= 40) return 'medium';
    return 'hard';
  };

  // Format price based on language
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language === 'es' ? 'es-ES' : 'fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };

  // Get active category label
  const getActiveCategoryLabel = () => {
    const category = dishCategories.find(cat => cat.id === activeCategory);
    return category ? category.label : 'All Dishes';
  };

  return (
    <main className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-serif text-german-brown mb-4">{t('menu.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder={t('menu.searchPlaceholder')}
              className="pl-10 h-12 text-base border-gray-300 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Filter & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Category Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 px-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>{t(`category.${activeCategory}`)}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {dishCategories.map((category) => (
                  <DropdownMenuItem 
                    key={category.id}
                    onClick={() => setActiveCategory(category.id as DishCategory)}
                    className={activeCategory === category.id ? "bg-amber-50 text-amber-600" : ""}
                  >
                    {t(`category.${category.id}`)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-12 px-4 flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  <span>{t('menu.sort')}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem onClick={() => setSortOption('price-asc')}>
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOption('price-desc')}>
                  Price: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOption('prep-asc')}>
                  Prep Time: Shortest to Longest
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOption('prep-desc')}>
                  Prep Time: Longest to Shortest
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
          
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {dishCategories.map((category) => (
            <Badge
              key={category.id}
              variant="outline"
              className={`
                px-4 py-2 text-sm font-medium rounded-full cursor-pointer
                ${activeCategory === category.id 
                  ? 'bg-amber-500 text-white hover:bg-amber-600' 
                  : 'bg-white hover:bg-gray-100 text-gray-700'}
              `}
              onClick={() => setActiveCategory(category.id as DishCategory)}
            >
              {t(`category.${category.id}`)}
            </Badge>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            {sortedDishes.length} {sortedDishes.length === 1 ? t('menu.dish') : t('menu.dishes')} {t('menu.found')}
            {activeCategory !== 'all' && ` ${t('menu.in')} ${t(`category.${activeCategory}`)}`}
            {searchQuery && ` ${t('menu.matching')} "${searchQuery}"`}
          </p>
        </div>

        {/* Dishes Grid */}
        {sortedDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedDishes.map((dish) => (
              <DishCard 
                key={dish.id} 
                dish={dish} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl text-gray-600 mb-4">
              No dishes found matching your search.
            </h3>
            <Button
              variant="outline"
              className="bg-white border-amber-500 text-amber-500 hover:bg-amber-50"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Menu;
