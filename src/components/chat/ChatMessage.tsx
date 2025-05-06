
import React from 'react';
import { cn } from '@/lib/utils';
import { ChatMessage as ChatMessageType } from '@/types';
import { AudioWaveform } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
  isSpeaking: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isSpeaking }) => {
  return (
    <div
      className={cn(
        "max-w-[80%] rounded-lg p-3 animate-fade-in relative",
        message.sender === 'user'
          ? "bg-primary text-primary-foreground ml-auto"
          : "bg-muted text-foreground"
      )}
    >
      {message.text}
      
      {isSpeaking && message.sender === 'bot' && (
        <div className="absolute -right-6 top-1/2 -translate-y-1/2">
          <div className="flex space-x-1 items-center">
            <div className="w-1 h-3 bg-german-amber/80 animate-sound-wave"></div>
            <div className="w-1 h-4 bg-german-amber/80 animate-sound-wave animation-delay-200"></div>
            <div className="w-1 h-2 bg-german-amber/80 animate-sound-wave animation-delay-400"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
