import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Play, Pause, Leaf, UtensilsCrossed, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const About = () => {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handlePlayAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  
  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  // In a real app, we would have separate audio files for each language
  const audioUrl = `/audio/about-${language}.mp3`;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <img 
          src="https://cdn5.vectorstock.com/i/thumb-large/87/69/hand-drawn-german-cuisine-food-doodle-vector-14068769.jpg" 
          alt="German cuisine background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Goals Section */}
      <section className="py-16 bg-soft-green bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-[#DDA63A] hover:bg-[#DDA63A]/80">SDG 2</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-german-brown mb-4">{t('about.sustainable.title')}</h2>
            <p className="text-xl max-w-2xl mx-auto">
              {t('about.sustainable.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t('about.farm.title') || 'Farm to Table'}</CardTitle>
                <CardDescription>{t('about.farm.subtitle') || 'Supporting local farmers and reducing food miles'}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {t('about.farm.description') || 'We source 80% of our ingredients from local farms within a 100km radius, reducing carbon emissions while supporting regional economies.'}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>{t('about.waste.title') || 'Reducing Waste'}</CardTitle>
                <CardDescription>{t('about.waste.subtitle') || 'Minimizing our environmental footprint'}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {t('about.waste.description') || 'Through composting, recycling, and mindful preparation, we\'ve reduced our food waste by 65% since 2020, working toward zero waste by 2026.'}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Award className="h-8 w-8 text-amber-600 mb-2" />
                <CardTitle>{t('about.culture.title') || 'Cultural Preservation'}</CardTitle>
                <CardDescription>{t('about.culture.subtitle') || 'Honoring traditional methods and recipes'}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {t('about.culture.description') || 'We preserve authentic German culinary traditions while adapting them for contemporary, sustainable cooking practices.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zero Hunger Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-2 bg-[#DDA63A] hover:bg-[#DDA63A]/80">{t('sdg.badge') || 'UN Sustainable Development Goal'}</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-german-brown mb-4">{t('about.hunger.title') || 'ZERO HUNGER'}</h2>
            <p className="text-xl max-w-2xl mx-auto">
              {t('about.hunger.description') || 'We\'re proudly contributing to the United Nations\' Sustainable Development Goal #2: Zero Hunger.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.slidesharecdn.com/ss_thumbnails/zerohunger22-240306004641-3db7d610-thumbnail.jpg?width=640&height=640&fit=bounds" 
                alt="Sustainable farming" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <UtensilsCrossed className="h-8 w-8 text-[#DDA63A] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{t('about.hunger.commitment.title') || 'Our Commitment to Food Security'}</h3>
                  <p>
                    {t('about.hunger.commitment.description') || 'GutenEats has partnered with local food banks to donate over 10,000 meals annually. We believe that access to nutritious food is a fundamental right for everyone.'}
                  </p>
                </div>
              </div>

              <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border rounded-md p-2">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2 font-medium">
                  <span>{t('about.hunger.initiatives') || 'Our Zero Hunger Initiatives'}</span>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="h-8 w-8 p-0">
                    {isOpen ? "-" : "+"}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-2">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-[#DDA63A] mr-2">•</span>
                      <span>{t('about.hunger.initiative1') || 'Weekly meal donations to community shelters'}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-[#DDA63A] mr-2">•</span>
                      <span>{t('about.hunger.initiative2') || 'Training programs for sustainable agriculture'}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-[#DDA63A] mr-2">•</span>
                      <span>{t('about.hunger.initiative3') || 'Educational workshops on reducing food waste'}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-[#DDA63A] mr-2">•</span>
                      <span>{t('about.hunger.initiative4') || 'Support for small-scale local farmers'}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-bold text-[#DDA63A] mr-2">•</span>
                      <span>{t('about.hunger.initiative5') || 'Community gardens in urban food deserts'}</span>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <div className="bg-soft-yellow p-6 rounded-lg">
                <h3 className="text-xl font-serif font-semibold mb-2">{t('about.impact.title') || 'Impact Statistics'}</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#DDA63A]">10,000+</p>
                    <p className="text-sm">{t('about.impact.meals') || 'Meals donated annually'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#DDA63A]">5</p>
                    <p className="text-sm">{t('about.impact.gardens') || 'Community gardens supported'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#DDA63A]">200+</p>
                    <p className="text-sm">{t('about.impact.hours') || 'Volunteer hours monthly'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#DDA63A]">15</p>
                    <p className="text-sm">{t('about.impact.farmers') || 'Local farmers supported'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl text-german-brown mb-6">
                {t('about.heritage.title')}
              </h2>
              
              <p>
                {t('about.heritage.intro')}
              </p>
              
              <p>
                {t('about.heritage.southern')}
              </p>
              
              <h3 className="font-serif text-2xl text-german-brown mt-8 mb-4">
                {t('about.regional.title')}
              </h3>
              
              <p>
                {t('about.regional.northern')}
              </p>
              
              <p>
                {t('about.regional.western')}
              </p>
              
              <div className="mt-8">
                <Button 
                  variant="outline"
                  className="flex items-center"
                  onClick={handlePlayAudio}
                >
                  {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                  {isPlaying ? t('about.audio.pause') : t('about.audio.play')}
                </Button>
                
                <audio 
                  ref={audioRef}
                  src={audioUrl} 
                  onEnded={handleAudioEnd}
                  preload="none"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" 
                  alt="Traditional German feast" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-german-cream p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl text-german-brown mb-4">
                  {t('about.staples.title')}
                </h3>
                <p className="text-gray-700">
                  {t('about.staples.content')}
                </p>
              </div>
              
              <div className="bg-german-green/10 p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl text-german-brown mb-4">
                  {t('about.seasonal.title')}
                </h3>
                <p className="text-gray-700">
                  {t('about.seasonal.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-german-brown mb-8 text-center">
            {t('about.gallery.title')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://www.savorynothings.com/wp-content/uploads/2019/10/german-soft-pretzels-iumage-1.jpg" 
                alt="German pretzel" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600335895229-6e75511892c8" 
                alt="German sausages" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://img1.wsimg.com/isteam/stock/jaPg3J1/:/cr=t:12.54%25,l:0%25,w:100%25,h:74.91%25/rs=w:600,h:300,cg:true" 
                alt="German beer garden" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5" 
                alt="German Christmas market" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
