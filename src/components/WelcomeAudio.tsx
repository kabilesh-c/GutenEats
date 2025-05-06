import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const WelcomeAudio = () => {
  const { language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = 0.5; // Set volume to 50%
    }

    // Only play once per session
    if (!hasPlayedRef.current) {
      // Set the audio source based on language
      // Using relative path from public folder
      const audioUrl = `/audio/welcome-${language}.mp3`;
      
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        
        // Play the audio after a short delay (to ensure it loads)
        const playPromise = setTimeout(() => {
          if (audioRef.current) {
            // Use try-catch to handle autoplay restrictions
            try {
              const playAttempt = audioRef.current.play();
              
              if (playAttempt !== undefined) {
                playAttempt
                  .then(() => {
                    console.log('Welcome audio playing successfully');
                    hasPlayedRef.current = true;
                  })
                  .catch(error => {
                    console.log('Welcome audio playback was prevented:', error);
                    // Browser prevented autoplay, user needs to interact with the page first
                  });
              }
            } catch (error) {
              console.error('Error playing welcome audio:', error);
            }
          }
        }, 1000);
        
        // Clean up timeout if component unmounts
        return () => clearTimeout(playPromise);
      }
    }
  }, [language]);

  // This component doesn't render anything
  return null;
};

export default WelcomeAudio; 