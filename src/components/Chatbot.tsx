import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChatMessage } from '@/types';
import { MessageSquare, Headphones, Volume2, VolumeX, Mic, MicOff, Send, X, MinusCircle, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { speak } from '@/utils/speechSynthesis';
import { useToast } from '@/components/ui/use-toast';
import { getBotResponse } from '@/utils/chatbotResponses';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

// Add missing type definitions for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

// Create type alias for the Web Speech API
type SpeechRecognitionType = any;

// Helper function to get browser-compatible SpeechRecognition
const getSpeechRecognition = (): any => {
  return window.SpeechRecognition || window.webkitSpeechRecognition;
};

const Chatbot: React.FC = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: t('chatbot.greeting'),
      sender: 'bot',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeakerEnabled, setIsSpeakerEnabled] = useState(true);
  const [currentSpeakingMessage, setCurrentSpeakingMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const latestMessageRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const recognitionRef = useRef<SpeechRecognitionType | null>(null);
  const [recognitionActive, setRecognitionActive] = useState(false);

  // Update greeting message when language changes
  useEffect(() => {
    setMessages(prev => [
      {
        ...prev[0],
        text: t('chatbot.greeting')
      },
      ...prev.slice(1)
    ]);
  }, [language, t]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      // Stop any ongoing speech when chat is closed
      window.speechSynthesis?.cancel();
      
      // Stop any ongoing speech recognition
      if (isListening) {
        stopListening();
      }
    }
  }, [isOpen]);

  // Clean up resources when component unmounts
  useEffect(() => {
    return () => {
      if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (error) {
          console.error('Error stopping speech recognition:', error);
        }
      }
      window.speechSynthesis?.cancel();
    };
  }, []);

  // Speak bot messages if speaker is enabled
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === 'bot' && isSpeakerEnabled && !isTyping) {
      setCurrentSpeakingMessage(lastMessage.id);
      speak({
        text: lastMessage.text,
        language
      }).then(() => {
        setCurrentSpeakingMessage(null);
      }).catch(error => {
        console.error('Speech synthesis error:', error);
        setCurrentSpeakingMessage(null);
      });
    }
  }, [messages, isSpeakerEnabled, isTyping, language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChatbot = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
      // Add welcome message when opening for the first time
      if (messages.length === 0) {
        setMessages([
          {
            id: '1',
            text: t('chatbot.welcome'),
            sender: 'bot',
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    } else {
      // Stop listening if active before closing
      if (isListening) {
        stopListening();
      }
      setIsOpen(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleSpeaker = () => {
    // Always cancel any ongoing speech when toggling
    window.speechSynthesis?.cancel();
    setCurrentSpeakingMessage(null);
    
    setIsSpeakerEnabled(prev => !prev);
    
    toast({
      title: isSpeakerEnabled ? t('chatbot.speakerDisabled') : t('chatbot.speakerEnabled'),
      duration: 2000,
    });
  };

  const speakMessage = (messageId: string, text: string) => {
    // If speaker is disabled, don't speak and don't set current speaking message
    if (!isSpeakerEnabled) return;
    
    // If this message is already being spoken, stop it
    if (currentSpeakingMessage === messageId) {
      window.speechSynthesis?.cancel();
      setCurrentSpeakingMessage(null);
      return;
    }
    
    // Otherwise, speak this message
    window.speechSynthesis?.cancel();
    setCurrentSpeakingMessage(messageId);
    
    speak({
      text,
      language
    }).then(() => {
      setCurrentSpeakingMessage(null);
    }).catch(error => {
      console.error('Speech synthesis error:', error);
      setCurrentSpeakingMessage(null);
    });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (input.trim() === '') return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Stop any ongoing speech
    window.speechSynthesis?.cancel();
    setCurrentSpeakingMessage(null);

    // Simulate bot thinking and typing with a realistic delay
    const thinkingTime = 500 + (input.length * 10) + (Math.random() * 1000);
    
    setTimeout(() => {
      const botResponse = getBotResponse(input, language);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, thinkingTime);
  };
  
  // Function to directly process and submit speech input
  const processSpeechInput = (transcript: string) => {
    if (transcript.trim() === '') return;
    
    console.log('Processing speech input:', transcript);
    
    // Set input value first so user can see what was recognized
    setInput(transcript);
    
    // Submit the recognized speech after a short delay for UI to update
    setTimeout(() => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        text: transcript,
        sender: 'user',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsTyping(true);
      
      // Stop any ongoing speech
      window.speechSynthesis?.cancel();
      setCurrentSpeakingMessage(null);
      
      // Simulate bot thinking and typing with a realistic delay
      const thinkingTime = 500 + (transcript.length * 10) + (Math.random() * 1000);
      
      setTimeout(() => {
        const botResponse = getBotResponse(transcript, language);
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: 'bot',
          timestamp: new Date().toISOString(),
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, thinkingTime);
    }, 300);
  };

  const startListening = () => {
    setIsListening(true);
    
    try {
      // Check for browser support for Speech Recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognition) {
        toast({
          title: t('chatbot.speechNotSupported'),
          variant: "destructive"
        });
        setIsListening(false);
        return;
      }
      
      // Create a new instance each time
      const recognition = new SpeechRecognition();
      
      // Stop any existing recognition session
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          console.log('Error stopping previous recognition session:', e);
        }
      }
      
      // Configure recognition with the correct language based on our app's current language
      recognition.lang = language === 'de' ? 'de-DE' : 
                        language === 'es' ? 'es-ES' : 
                        language === 'fr' ? 'fr-FR' : 'en-US';
      
      // These options improve recognition accuracy
      recognition.interimResults = true;
      recognition.continuous = false; // Set to false to avoid browser-specific issues
      recognition.maxAlternatives = 1;
      
      // Handle recognition results - both interim and final
      recognition.onresult = (event) => {
        console.log('Speech recognition event:', event);
        
        if (event.results && event.results.length > 0) {
          // Get the most recent result
          const current = event.results[event.results.length - 1];
          
          // Check if this is a final result
          if (current.isFinal) {
            const transcript = current[0].transcript;
            console.log('Final recognition result:', transcript);
            
            // Use the direct processing function to handle the speech input
            processSpeechInput(transcript);
            
            // Reset listening state
            setIsListening(false);
            setRecognitionActive(false);
          } else {
            // Show interim results to give feedback
            const interimTranscript = current[0].transcript;
            setInput(interimTranscript);
          }
        } else {
          console.log('No recognition results available');
          toast({
            title: t('chatbot.noSpeechDetected'),
            variant: "destructive"
          });
          setIsListening(false);
          setRecognitionActive(false);
        }
      };
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          toast({
            title: t('chatbot.microphonePermissionDenied'),
            variant: "destructive"
          });
        } else if (event.error === 'no-speech') {
          toast({
            title: t('chatbot.noSpeechDetected'),
            description: t('chatbot.pleaseSpeakClearly'),
            variant: "destructive"
          });
        } else {
          toast({
            title: `${t('chatbot.speechError')}: ${event.error}`,
            variant: "destructive"
          });
        }
        setIsListening(false);
        setRecognitionActive(false);
      };
      
      recognition.onend = () => {
        console.log('Speech recognition ended');
        setIsListening(false);
        setRecognitionActive(false);
      };
      
      // Request microphone permission first
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          // Store the stream to properly clean it up later
          setAudioStream(stream);
          
          // Short delay to ensure UI updates before starting recognition
          setTimeout(() => {
            try {
              recognition.start();
              recognitionRef.current = recognition;
              setRecognitionActive(true);
            } catch (e) {
              console.error('Error starting recognition:', e);
              toast({
                title: t('chatbot.startListeningError'),
                description: String(e),
                variant: "destructive"
              });
              setIsListening(false);
              setRecognitionActive(false);
            }
          }, 100);
        })
        .catch(err => {
          console.error('Error accessing microphone:', err);
          toast({
            title: t('chatbot.microphonePermissionDenied'),
            description: String(err),
            variant: "destructive"
          });
          setIsListening(false);
          setRecognitionActive(false);
        });
    } catch (e) {
      console.error('Error setting up speech recognition:', e);
      toast({
        title: t('chatbot.speechSetupError'),
        description: String(e),
        variant: "destructive"
      });
      setIsListening(false);
      setRecognitionActive(false);
    }
  };

  const stopListening = () => {
    // Set the active flag to false so we don't restart on onend
    setRecognitionActive(false);
    
    // Stop recognition
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
        recognitionRef.current = null;
      } catch (error) {
        console.error('Error stopping recognition:', error);
      }
    }
    
    // Stop audio stream
    if (audioStream) {
      try {
        audioStream.getTracks().forEach(track => track.stop());
        setAudioStream(null);
      } catch (error) {
        console.error('Error stopping audio stream:', error);
      }
    }
    
    setIsListening(false);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 rounded-full p-4 bg-german-amber hover:bg-german-amber/90 text-white shadow-lg z-50 flex items-center justify-center"
        aria-label={t('chatbot.open')}
      >
        <img 
          src="/GutenEats/img/chatbot-icon.svg" 
          alt="Chatbot" 
          className="w-10 h-10 object-contain"
          onError={(e) => {
            // Fallback to a default image if the custom one fails to load
            e.currentTarget.src = "https://img.icons8.com/color/96/chef-hat.png";
          }}
        />
      </Button>
    );
  }

  return (
    <div className={`fixed ${isMinimized ? 'bottom-4 right-4 w-auto' : 'bottom-4 right-4 w-80 sm:w-96'} bg-white rounded-lg shadow-xl z-50 transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between bg-german-brown text-white p-3 rounded-t-lg">
        <div className="flex items-center gap-2">
          <img 
            src="/GutenEats/img/chatbot-icon.svg" 
            alt="Chatbot" 
            className="w-6 h-6"
            onError={(e) => {
              // Fallback to a default image if the custom one fails to load
              e.currentTarget.src = "https://img.icons8.com/color/96/chef-hat.png";
            }}
          />
          {!isMinimized && <h3 className="font-medium">{t('chatbot.title')}</h3>}
        </div>
        <div className="flex items-center gap-1">
          {!isMinimized && (
            <Button variant="ghost" size="icon" onClick={toggleSpeaker} className="text-white hover:text-white hover:bg-german-brown/80 h-8 w-8">
              {isSpeakerEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </Button>
          )}
          {isMinimized ? (
            <Button variant="ghost" size="icon" onClick={toggleMinimize} className="text-white hover:text-white hover:bg-german-brown/80 h-8 w-8">
              <ChevronUp className="h-5 w-5" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon" onClick={toggleMinimize} className="text-white hover:text-white hover:bg-german-brown/80 h-8 w-8">
              <MinusCircle className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={toggleChatbot} className="text-white hover:text-white hover:bg-german-brown/80 h-8 w-8">
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {!isMinimized && (
        <>
          <ScrollArea className="p-3 h-80 overflow-y-auto bg-gray-50">
            <div className="flex flex-col gap-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.sender === 'user'
                      ? 'bg-german-amber/20 ml-4'
                      : 'bg-gray-100 mr-4'
                  } p-3 rounded-lg max-w-[85%] ${
                    message.sender === 'user' ? 'self-end' : 'self-start'
                  }`}
                  onClick={() => message.sender === 'bot' && speakMessage(message.id, message.text)}
                >
                  {message.text}
                  {message.sender === 'bot' && currentSpeakingMessage === message.id && (
                    <div className="mt-1 text-xs text-gray-500 flex items-center">
                      <Volume2 className="h-3 w-3 mr-1" /> Speaking...
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="bg-gray-100 mr-4 p-3 rounded-lg self-start">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSubmit} className="p-3 border-t flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              placeholder={t('chatbot.placeholder')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button 
              type="button" 
              variant="outline" 
              size="icon"
              onClick={isListening ? stopListening : startListening}
              className={isListening ? "bg-red-100 text-red-500 hover:text-red-600 border-red-500" : ""}
              aria-label={isListening ? t('chatbot.micOff') : t('chatbot.micOn')}
            >
              {isListening ? 
                <Mic className="h-4 w-4" />
                : 
                <Mic className="h-4 w-4" />
              }
            </Button>
            <Button 
              type="submit" 
              variant="default" 
              size="icon" 
              className="bg-german-amber hover:bg-german-amber/90"
              disabled={input.trim() === '' && !isListening}
              aria-label={t('chatbot.send')}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </>
      )}

      {/* No listening indicator here */}
    </div>
  );
};

export default Chatbot;
