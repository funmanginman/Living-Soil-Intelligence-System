import React from 'react';
import { User, Sprout } from 'lucide-react';

const formatText = (text) => {
  // Simple markdown-like bold parsing for **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} style={{ color: 'var(--neon-green)' }}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

export const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`message-wrapper ${isUser ? 'user' : 'ai'} animate-fade-in`}>
      <div className={`avatar ${isUser ? 'user' : 'ai'}`}>
        {isUser ? <User size={20} /> : <Sprout size={20} />}
      </div>
      <div className="message-content">
        <div style={{ whiteSpace: 'pre-wrap' }}>{formatText(message.text)}</div>
        {message.image && (
          <img src={message.image} alt="Uploaded soil" className="message-image" />
        )}
      </div>
    </div>
  );
};
