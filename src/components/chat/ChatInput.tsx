
import React, { useRef, useEffect } from 'react';
import { Mic, MicOff, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isListening: boolean;
  toggleVoiceInput: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  input, 
  setInput, 
  handleSubmit, 
  isListening,
  toggleVoiceInput
}) => {
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input when listening stops
  useEffect(() => {
    if (!isListening) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isListening]);

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex space-x-2">
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isListening ? t('chatbot.listening') : t('chatbot.placeholder')}
          className={cn(
            "flex-1",
            isListening && "animate-pulse-subtle"
          )}
          disabled={isListening}
        />
        <Button 
          type="button" 
          variant={isListening ? "destructive" : "outline"} 
          size="icon" 
          onClick={toggleVoiceInput}
          className={cn(
            isListening && "animate-pulse-subtle"
          )}
        >
          {isListening ? <MicOff size={18} /> : <Mic size={18} />}
        </Button>
        <Button 
          type="submit" 
          size="icon" 
          disabled={!input.trim() || isListening}
          className="bg-german-amber hover:bg-german-amber/90"
        >
          <Send size={18} />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
