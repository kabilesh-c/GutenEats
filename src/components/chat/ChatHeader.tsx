
import React from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ChatHeaderProps {
  toggleChat: () => void;
  isSpeakerEnabled: boolean;
  toggleSpeaker: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  toggleChat, 
  isSpeakerEnabled,
  toggleSpeaker 
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center justify-between p-4 border-b bg-german-amber text-white rounded-t-lg">
      <div className="flex items-center gap-2">
        <span className="font-medium">Guten Chef</span>
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSpeaker}
          className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          aria-label={isSpeakerEnabled ? "Disable speech" : "Enable speech"}
        >
          {isSpeakerEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
        
        <button 
          onClick={toggleChat}
          className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
