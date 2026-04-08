import React, { useState, useRef, useEffect } from 'react';
import { Send, Upload } from 'lucide-react';
import { MessageBubble } from './MessageBubble';
import { generateAIResponse } from './AIChatController';

export const ChatWindow = ({ providedImage, onClearImage, userName }) => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: `Welcome to the Living Soil Intelligence System. Please ask me any questions about your soil, or upload a photo to get AI-powered analysis with a focus on organic practices.` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim() && !providedImage) return;

    const newMsg = {
      role: 'user',
      text: inputValue.trim() || 'Please analyze this soil image.',
      image: providedImage
    };

    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    if (providedImage) {
      onClearImage(); // clear external state after attaching to message
    }
    
    setIsTyping(true);

    const aiResponseText = await generateAIResponse(newMsg.text, !!newMsg.image, userName);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponseText }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="main-chat-area">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} message={msg} />
        ))}
        {isTyping && (
           <div className="message-wrapper ai animate-fade-in">
             <div className="avatar ai"><Upload size={16} /></div>
             <div className="message-content typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-wrapper">
        {providedImage && (
          <div style={{ marginBottom: 12, padding: 8, background: 'rgba(0, 255, 127, 0.1)', borderRadius: 8, display: 'inline-block', fontSize: 14 }}>
             Image ready to send. Type a message or press Enter.
          </div>
        )}
        <div className="chat-input-container glass-panel">
          <input 
            type="text" 
            className="chat-input"
            placeholder={providedImage ? "Add a message with your image..." : "Ask me about soil or fertilizers..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button 
            className="send-btn" 
            onClick={handleSend}
            disabled={(!inputValue.trim() && !providedImage) || isTyping}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
