
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const floatingElements = [
  {
    id: 1,
    image: 'https://cdn-icons-png.flaticon.com/512/2156/2156021.png', // pretzel
    initialPosition: { x: -15, y: 10 },
    animation: {
      y: [10, -10, 10],
      rotate: [0, 5, -5, 0],
    }
  },
  {
    id: 2, 
    image: 'https://cdn-icons-png.flaticon.com/512/2156/2156048.png', // sausage
    initialPosition: { x: 20, y: -5 },
    animation: {
      y: [-5, 15, -5],
      rotate: [0, -7, 7, 0],
    }
  },
  {
    id: 3,
    image: 'https://cdn-icons-png.flaticon.com/512/4825/4825292.png', // beer mug
    initialPosition: { x: -25, y: -15 },
    animation: {
      y: [-15, 5, -15],
      rotate: [0, 10, -5, 0],
    }
  },
  {
    id: 4,
    image: 'https://cdn-icons-png.flaticon.com/512/2156/2156189.png', // bread
    initialPosition: { x: 30, y: 20 },
    animation: {
      y: [20, 0, 20],
      rotate: [0, -8, 4, 0],
    }
  },
  {
    id: 5,
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046769.png', // spatula
    initialPosition: { x: 5, y: 25 },
    animation: {
      y: [25, 5, 25],
      rotate: [0, 15, -5, 0],
    }
  }
];

const FloatingElements = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          initial={{ 
            x: `${element.initialPosition.x}%`, 
            y: `${element.initialPosition.y}%`,
            opacity: 0 
          }}
          animate={{
            ...element.animation,
            opacity: 1,
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 3 + Math.random() * 2,
              ease: "easeInOut",
              repeatType: "reverse"
            },
            rotate: {
              repeat: Infinity,
              duration: 4 + Math.random() * 3,
              ease: "easeInOut",
              repeatType: "reverse"
            },
            opacity: {
              duration: 0.8
            }
          }}
          style={{
            left: `${50 + element.initialPosition.x}%`, 
            top: `${50 + element.initialPosition.y}%`
          }}
        >
          <img 
            src={element.image} 
            alt="German food element" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-70"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
