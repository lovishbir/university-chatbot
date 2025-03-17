// src/components/Chatbot/ChatbotToggle.jsx
import React from 'react';
import Icon from '../common/Icon';
import styles from '../../styles/components/chatbot.module.css';

const ChatbotToggle = ({ isOpen, onClick }) => {
  return (
    <button 
      className={`${styles.chatbotToggle} ${isOpen ? styles.open : ''}`} 
      onClick={onClick}
      aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
    >
      <Icon name={isOpen ? "close" : "chat"} color="light" />
    </button>
  );
};

export default ChatbotToggle;