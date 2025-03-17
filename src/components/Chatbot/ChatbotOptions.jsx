// src/components/Chatbot/ChatbotOptions.jsx
import React from 'react';
import styles from '../../styles/components/chatbot.module.css';

const ChatbotOptions = ({ options, onSelect }) => {
  if (!options || options.length === 0) {
    return null;
  }
  
  return (
    <div className={styles.optionsContainer}>
      {options.map((option, index) => (
        <button 
          key={index} 
          className={styles.optionButton}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ChatbotOptions;