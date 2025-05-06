import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useInView } from 'framer-motion';
import { UtensilsCrossed, Leaf, Award, UtensilsCrossed as Utensils } from 'lucide-react';

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

const iconVariants = {
  hidden: { scale: 0.2, rotate: -20, opacity: 0 },
  visible: { 
    scale: 1, 
    rotate: 0, 
    opacity: 1,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1
    } 
  },
  hover: { 
    scale: 1.1,
    rotate: 5,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const CulturalFeatures = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: UtensilsCrossed,
      title: t('cultural.feature1.title') || 'Authentic Recipes',
      description: t('cultural.feature1.description') || 'Our dishes follow time-honored German recipes passed down through generations.',
      color: 'amber'
    },
    {
      icon: Leaf,
      title: t('cultural.feature2.title') || 'Fresh Ingredients',
      description: t('cultural.feature2.description') || 'We use only the freshest, locally-sourced ingredients for all our German specialties.',
      color: 'green'
    },
    {
      icon: Award,
      title: t('cultural.feature3.title') || 'Cultural Experience',
      description: t('cultural.feature3.description') || 'Each dish comes with cultural context and audio pronunciation in multiple languages.',
      color: 'red'
    },
    {
      icon: Utensils,
      title: t('cultural.feature4.title') || 'Regional Varieties',
      description: t('cultural.feature4.description') || 'Explore the diverse culinary traditions from different German regions.',
      color: 'blue'
    }
  ];
  
  return (
    <section className="py-16 bg-german-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-german-brown mb-4 cultural-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('cultural.title') || 'Uniqueness of GutenEats'}
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto cultural-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-german-amber to-german-red font-medium">
              {t('cultural.subtitle') || 'Flavor. Heritage. Simplicity.'}
            </span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const ref = React.useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });
            
            const Icon = feature.icon;
            const colorClass = feature.color === 'amber' 
              ? 'bg-german-amber/10 text-german-amber' 
              : feature.color === 'green'
                ? 'bg-emerald-100 text-emerald-600'
                : feature.color === 'red'
                  ? 'bg-red-100 text-red-600'
                  : 'bg-blue-100 text-blue-600';
            
            return (
              <motion.div
                ref={ref}
                key={i}
                className="bg-white p-8 rounded-lg shadow-md text-center transform-gpu"
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={featureVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mx-auto mb-4`}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CulturalFeatures;
