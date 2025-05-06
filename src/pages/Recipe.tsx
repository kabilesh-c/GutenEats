import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { dishes as allDishesList } from '@/data/allDishes';
import { ArrowLeft, Play, Pause, Clock, Users, ChefHat, Volume2, AudioWaveform } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { speak } from '@/utils/speechSynthesis';
import { useToast } from '@/components/ui/use-toast';

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReadingRecipe, setIsReadingRecipe] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
  // Find the dish by ID
  const dish = allDishesList.find(dish => dish.id === id);
  
  if (!dish) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
        <Link to="/menu">
          <Button>Return to Menu</Button>
        </Link>
      </div>
    );
  }
  
  const translation = dish.translations[language];
  
  // Safely get preparation steps and tips with fallbacks to English if not available
  const preparationSteps = translation.preparationSteps || dish.translations.en.preparationSteps || [];
  const tips = translation.tips || dish.translations.en.tips || [];
  
  const handlePlayAudio = async () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    
    setIsPlaying(true);
    
    try {
      // Try to speak using speech synthesis with better voices
      const descriptionText = `${translation.name}. ${translation.description}`;
      await speak({ 
        text: descriptionText, 
        language,
        rate: 1.0,
        pitch: 1.0
      });
      
      // If speech synthesis successful, don't fall back to audio file
    } catch (error) {
      console.error('Speech synthesis error:', error);
      
      // Only try fallback to audio, but don't show error toast
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.error('Audio playback error:', err);
          // Don't show toast notifications for audio errors either
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(false);
      }
    }
  };
  
  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const readRecipe = async () => {
    if (isReadingRecipe) {
      // Cancel speech if already speaking
      window.speechSynthesis.cancel();
      setIsReadingRecipe(false);
      return;
    }

    setIsReadingRecipe(true);
    
    try {
      // Read dish name and description
      const introText = `${translation.name}. ${translation.description}`;
      await speak({ text: introText, language });
      
      // Read ingredients
      const ingredientsText = `${t('recipe.ingredients')}: ${translation.ingredients.join(', ')}`;
      await speak({ text: ingredientsText, language });
      
      // Read preparation steps
      const stepsText = `${t('recipe.preparation')}: ${preparationSteps.join('. ')}`;
      await speak({ text: stepsText, language });
      
    } catch (error) {
      // Just log the error without showing any toast notification
      console.error('Speech synthesis error:', error);
    } finally {
      setIsReadingRecipe(false);
    }
  };

  // Cancel speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Recipe timing and serving data - these could also be moved to the translations
  const recipeDetails = {
    prepTime: '25 minutes',
    cookTime: '45 minutes',
    servings: 4,
    difficulty: 'Medium'
  };

  return (
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link to="/menu" className="inline-flex items-center text-german-amber hover:text-german-amber/90 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('back.to.menu')}
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="relative rounded-lg overflow-hidden aspect-video mb-4">
              <img 
                src={dish.imageUrl} 
                alt={translation.name} 
                className="w-full h-full object-cover"
              />
              
              <button 
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-colors"
                onClick={handlePlayAudio}
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? (
                  <div className="relative">
                    <Pause size={18} />
                    <div className="absolute -right-3 -top-3 animate-ping w-2 h-2 bg-german-amber rounded-full"></div>
                  </div>
                ) : (
                  <Play size={18} />
                )}
              </button>
              
              <audio 
                ref={audioRef}
                src={dish.audioUrl[language]} 
                onEnded={handleAudioEnd}
                preload="auto"
              />
            </div>
            
            <Button 
              variant="outline" 
              className="mb-4 w-full"
              onClick={readRecipe}
              disabled={!('speechSynthesis' in window)}
            >
              {isReadingRecipe ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  {t('recipe.stop.reading')}
                </>
              ) : (
                <>
                  <AudioWaveform className="mr-2 h-4 w-4" />
                  {t('recipe.read.aloud')}
                </>
              )}
            </Button>
            
            <div className="flex gap-4 flex-wrap mb-6">
              <Card className="flex-1 min-w-[120px]">
                <CardContent className="flex items-center p-4">
                  <Clock className="h-5 w-5 text-german-amber mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Prep Time</p>
                    <p className="font-medium">{recipeDetails.prepTime}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[120px]">
                <CardContent className="flex items-center p-4">
                  <Clock className="h-5 w-5 text-german-amber mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Cook Time</p>
                    <p className="font-medium">{recipeDetails.cookTime}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[120px]">
                <CardContent className="flex items-center p-4">
                  <Users className="h-5 w-5 text-german-amber mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Servings</p>
                    <p className="font-medium">{recipeDetails.servings}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="flex-1 min-w-[120px]">
                <CardContent className="flex items-center p-4">
                  <ChefHat className="h-5 w-5 text-german-amber mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Difficulty</p>
                    <p className="font-medium">{recipeDetails.difficulty}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-german-brown mb-2">
              {translation.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {translation.region}
            </p>
            <p className="text-gray-700 mb-6">{translation.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-serif font-semibold mb-3 text-german-brown">{t('recipe.ingredients')}</h2>
              <ul className="space-y-2">
                {translation.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-german-amber h-2 w-2 rounded-full mt-2 mr-2"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {preparationSteps && preparationSteps.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-german-brown">
                {t('recipe.preparation')}
              </h2>
              <ol className="space-y-4">
                {preparationSteps.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="bg-german-amber text-white font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}
          
          {tips && tips.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-german-brown">
                Chef's Tips
              </h2>
              <div className="bg-german-cream/30 p-6 rounded-lg border border-german-amber/20">
                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-german-amber mr-2">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Recipe;
