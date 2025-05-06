
import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage as ChatMessageType } from '@/types';
import ChatMessage from './ChatMessage';
import { Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatWindowProps {
  messages: ChatMessageType[];
  isTyping: boolean;
  currentSpeakingMessage: string | null;
  onMessageClick: (messageId: string, text: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ 
  messages, 
  isTyping, 
  currentSpeakingMessage,
  onMessageClick 
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <ScrollArea className="flex-grow p-4">
      <div className="space-y-4">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={cn(
              "group relative",
              currentSpeakingMessage === message.id && "ring-2 ring-german-amber/30 rounded-lg"
            )}
          >
            <ChatMessage message={message} isSpeaking={currentSpeakingMessage === message.id} />
            
            {message.sender === 'bot' && (
              <button
                onClick={() => onMessageClick(message.id, message.text)}
                className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-1 shadow-md"
                aria-label="Read message aloud"
              >
                <Volume2 size={14} className="text-german-amber" />
              </button>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="bg-muted text-foreground max-w-[80%] rounded-lg p-3">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-german-amber/60 animate-pulse"></div>
              <div className="h-2 w-2 rounded-full bg-german-amber/60 animate-pulse delay-75"></div>
              <div className="h-2 w-2 rounded-full bg-german-amber/60 animate-pulse delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default ChatWindow;
