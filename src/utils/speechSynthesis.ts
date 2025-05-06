
import { Language } from '@/types';

// Language voices mapping
const languageVoices: Record<Language, string> = {
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR'
};

// Voice mapping for better quality voices (when available)
const preferredVoices: Record<Language, string[]> = {
  en: ['Google US English', 'Google UK English Female', 'Microsoft David - English (United States)', 'Microsoft Zira - English (United States)'],
  de: ['Google Deutsch', 'Microsoft Hedda - German', 'Microsoft Stefan - German'],
  es: ['Google español', 'Microsoft Helena - Spanish (Spain)', 'Microsoft Pablo - Spanish (Spain)'],
  fr: ['Google français', 'Microsoft Julie - French (France)', 'Microsoft Paul - French (France)']
};

interface SpeechOptions {
  text: string;
  language: Language;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export const speak = ({
  text,
  language,
  rate = 1,
  pitch = 1,
  volume = 1
}: SpeechOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis not supported'));
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageVoices[language];
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    // Find the best available voice for the selected language
    const voices = window.speechSynthesis.getVoices();
    console.log('Available voices:', voices.map(v => v.name));
    
    // Try to find a preferred voice first
    let foundVoice = null;
    
    // First look for Google or other high-quality voices
    for (const preferredVoiceName of preferredVoices[language]) {
      foundVoice = voices.find(voice => voice.name.includes(preferredVoiceName));
      if (foundVoice) break;
    }
    
    // If no preferred voice found, try to find any voice that matches the language
    if (!foundVoice) {
      foundVoice = voices.find(voice => voice.lang.includes(languageVoices[language].split('-')[0]));
    }
    
    if (foundVoice) {
      console.log('Using voice:', foundVoice.name);
      utterance.voice = foundVoice;
    } else {
      console.log('No specific voice found for language, using default');
    }

    utterance.onend = () => resolve();
    utterance.onerror = (event) => reject(new Error(`Speech synthesis error: ${event.error}`));

    window.speechSynthesis.speak(utterance);
  });
};

// Load voices when the page loads
if ('speechSynthesis' in window) {
  // Firefox and Chrome handle voice loading differently
  if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
  
  // Force loading voices initially
  setTimeout(() => {
    window.speechSynthesis.getVoices();
  }, 100);
}

// Helper function to get available voices for debugging
export const getAvailableVoices = () => {
  if (!('speechSynthesis' in window)) {
    return [];
  }
  
  return window.speechSynthesis.getVoices();
};
