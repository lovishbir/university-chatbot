// src/components/Chatbot/ChatbotHeader.jsx
import React from 'react';
import Icon from '../common/Icon';
import styles from '../../styles/components/chatbot.module.css';

const ChatbotHeader = ({ onClose }) => {
  return (
    <div className={styles.chatbotHeader}>
      <div className={styles.headerLogo}>
        <img 
          src="/assets/images/university-logo.png" 
          alt="University Logo" 
          className={styles.logoImage}
        />
      </div>
      <h3 className={styles.headerTitle}>University Assistant</h3>
      <button 
        className={styles.closeButton} 
        onClick={onClose}
        aria-label="Close chatbot"
      >
        <Icon name="close" size="small" color="light" />
      </button>
    </div>
  );
};

export default ChatbotHeader;