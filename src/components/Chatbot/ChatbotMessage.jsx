// src/components/Chatbot/ChatbotMessage.jsx
import React from 'react';
import Avatar from '../common/Avatar';
import ChatbotOptions from './ChatbotOptions';
import { formatTimestamp } from '../../utils/messageUtils';
import styles from '../../styles/components/chatbot.module.css';

const ChatbotMessage = ({ message, onOptionSelect }) => {
  const { text, sender, options, timestamp } = message;
  const isUser = sender === 'user';
  
  const messageClasses = [
    styles.messageContainer,
    isUser ? styles.userMessage : styles.botMessage
  ].join(' ');
  
  const bubbleClasses = [
    styles.messageBubble,
    isUser ? styles.userMessageBubble : styles.botMessageBubble
  ].join(' ');
  
  return (
    <div className={messageClasses}>
      {!isUser && (
        <Avatar 
          src="/assets/images/bot-avatar.png" 
          alt="Bot" 
          size="small" 
        />
      )}
      
      <div className={bubbleClasses}>
        <div className={styles.messageText}>{text}</div>
        
        {timestamp && (
          <div className={styles.messageTimestamp}>
            {formatTimestamp(timestamp)}
          </div>
        )}
        
        {!isUser && options && options.length > 0 && (
          <ChatbotOptions options={options} onSelect={onOptionSelect} />
        )}
      </div>
    </div>
  );
};

export default ChatbotMessage;