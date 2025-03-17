// src/components/Chatbot/TypingIndicator.jsx
import React from 'react';
import styles from '../../styles/components/chatbot.module.css';

const TypingIndicator = () => {
  return (
    <div className={styles.typingIndicator}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default TypingIndicator;