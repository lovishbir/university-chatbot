// src/components/Chatbot/ChatbotMessages.jsx
import React from 'react';
import ChatbotMessage from './ChatbotMessage';
import TypingIndicator from './TypingIndicator';
import styles from '../../styles/components/chatbot.module.css';

const ChatbotMessages = ({ messages, isTyping, messagesEndRef, onOptionSelect }) => {
  return (
    <div className={styles.messagesContainer}>
      {messages.map((message) => (
        <ChatbotMessage 
          key={message.id} 
          message={message} 
          onOptionSelect={onOptionSelect} 
        />
      ))}
      
      {isTyping && (
        <div className={styles.typingContainer}>
          <Avatar 
            src="/assets/images/bot-avatar.png" 
            alt="Bot" 
            size="small" 
          />
          <TypingIndicator />
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatbotMessages;