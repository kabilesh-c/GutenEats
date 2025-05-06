
import { Language } from '@/types';

// Language codes for the Web Speech API
const speechRecognitionLanguages: Record<Language, string> = {
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR'
};

interface VoiceRecognitionOptions {
  language: Language;
  onResult: (text: string) => void;
  onError: (error: string) => void;
  onEnd: () => void;
}

class VoiceRecognitionService {
  private recognition: SpeechRecognition | null = null;
  private isListening = false;

  constructor() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.warn('Speech recognition is not supported in this browser');
      return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
  }

  start({ language, onResult, onError, onEnd }: VoiceRecognitionOptions) {
    if (!this.recognition) {
      onError('Speech recognition is not supported in this browser');
      return;
    }

    if (this.isListening) {
      this.stop();
    }

    this.recognition.lang = speechRecognitionLanguages[language];
    
    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };

    this.recognition.onerror = (event) => {
      onError(`Speech recognition error: ${event.error}`);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      onEnd();
    };

    try {
      this.recognition.start();
      this.isListening = true;
    } catch (error) {
      onError(`Could not start speech recognition: ${error}`);
    }
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  isSupported() {
    return ('webkitSpeechRecognition' in window) || ('SpeechRecognition' in window);
  }
}

// Singleton instance
export const voiceRecognition = new VoiceRecognitionService();
