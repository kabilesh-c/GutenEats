import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ArrowDown, Wheat, UtensilsCrossed, Leaf, Heart, ShieldCheck, CircleEqual } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import DishCarousel from '@/components/DishCarousel';
import FloatingElements from '@/components/FloatingElements';
import CulturalFeatures from '@/components/CulturalFeatures';

const Home = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden"
        style={{ height: "100vh" }}
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 w-screen h-screen">
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-10"></div>
          <motion.img 
            src="https://www.thatsmags.com/image/view/202012/DSC04794.jpg" 
            alt="Traditional German food and beer" 
            className="w-full h-full object-cover object-center"
            style={{ 
              minWidth: "100vw", 
              minHeight: "100vh",
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              objectPosition: "center center",
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        <FloatingElements />
        
        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col items-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-[#FFD700] drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('hero.title') || 'Experience Authentic German Cuisine'}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#FFD700] max-w-3xl mx-auto mb-8 drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('hero.subtitle') || 'From the Black Forest to Bavaria, discover the rich flavors of Germany'}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-german-amber hover:bg-german-amber/90 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                onClick={() => document.getElementById('sdg-goal')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                {t('hero.cta') || 'Take the GutenEats Tour'}
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowDown className="ml-2 h-8 w-8" strokeWidth={3} />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
            <motion.div 
              className="w-1.5 h-3 bg-white/80 rounded-full"
              animate={{ 
                y: [0, 4, 0] 
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Zero Hunger SDG Section - Enhanced UI */}
      <section id="sdg-goal" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          {/* New SDG Badge */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#DDA63A]/10 rounded-full px-4 py-2 inline-flex items-center gap-2">
              <span className="text-[#DDA63A] font-semibold">SDG 2</span>
              <div className="w-1 h-1 bg-[#DDA63A] rounded-full"></div>
              <span className="text-gray-600 text-sm">{t('sdg.badge') || 'UN Sustainable Goal'}</span>
            </div>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#DDA63A] mb-4">
              {t('sdg.title') || 'ZERO HUNGER'}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t('sdg.description') || 'Promoting Zero Hunger through the power of traditional German cuisine. Our project not only shares recipes but raises awareness about food accessibility, sustainable food practices, and cultural appreciation.'}
            </p>
            
            {/* Animated divider */}
            <motion.div 
              className="h-1 w-24 bg-[#DDA63A] mx-auto rounded-full my-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          <div className="relative mb-12">
            {/* Zero Hunger SDG Animation - Enhanced */}
            <motion.div 
              className="w-40 h-40 mx-auto mb-12 relative"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              {/* SDG icon background */}
              <motion.div 
                className="absolute inset-0 bg-[#DDA63A]/20 rounded-2xl flex items-center justify-center"
                animate={{ 
                  borderRadius: ["24%", "50%", "24%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.div 
                  className="w-4/5 h-4/5 bg-[#DDA63A] rounded-2xl flex items-center justify-center text-white shadow-lg"
                  animate={{ 
                    borderRadius: ["20%", "50%", "20%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                >
                  <motion.span 
                    className="text-5xl font-bold"
                    animate={{ opacity: [1, 0.8, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    2
                  </motion.span>
                </motion.div>
              </motion.div>
              
              {/* Rotating elements */}
              <motion.div 
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <Wheat className="h-8 w-8 text-[#DDA63A]" />
                </motion.div>
                <motion.div className="absolute top-1/2 -right-6 -translate-y-1/2">
                  <UtensilsCrossed className="h-8 w-8 text-[#DDA63A]" />
                </motion.div>
                <motion.div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <Leaf className="h-8 w-8 text-green-500" />
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Sustainable Practices Features - Enhanced */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <ShieldCheck className="h-12 w-12 text-[#DDA63A]" />
                  </motion.div>,
                  title: t('sdg.feature1.title') || "Reducing Food Waste",
                  description: t('sdg.feature1.description') || "Our recipes include creative ways to use every part of ingredients and preserve seasonal foods."
                },
                {
                  icon: <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <CircleEqual className="h-12 w-12 text-[#DDA63A]" />
                  </motion.div>,
                  title: t('sdg.feature2.title') || "Equitable Food Access",
                  description: t('sdg.feature2.description') || "We promote recipes that are nutritious, affordable, and accessible to all communities."
                },
                {
                  icon: <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Heart className="h-12 w-12 text-[#DDA63A]" />
                  </motion.div>,
                  title: t('sdg.feature3.title') || "Cultural Preservation",
                  description: t('sdg.feature3.description') || "Preserving culinary traditions helps maintain food knowledge across generations."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="text-center p-8 bg-[#DDA63A]/5 rounded-xl border border-[#DDA63A]/20 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#DDA63A] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Mission Button - Enhanced */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="border-[#DDA63A] text-[#DDA63A] hover:bg-[#DDA63A]/10 font-medium px-8 py-6 rounded-full"
                >
                  {t('sdg.button') || 'Learn More About Zero Hunger'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Carousel */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-german-brown mb-4">
              {t('dishes.title') || 'Popular German Dishes'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('dishes.subtitle') || 'Explore our selection of authentic German recipes handed down through generations'}
            </p>
          </motion.div>

          <DishCarousel />

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/menu">
              <Button variant="outline" className="border-german-amber text-german-amber hover:bg-german-amber/10 font-medium px-8 py-2">
                {t('home.viewAllDishes')}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cultural Features Section */}
      <CulturalFeatures />
    </div>
  );
};

export default Home;
