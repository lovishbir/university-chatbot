// src/components/Chatbot/ChatbotInput.jsx
import React, { useState } from 'react';
import Icon from '../common/Icon';
import styles from '../../styles/components/chatbot.module.css';

const ChatbotInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };
  
  return (
    <form className={styles.chatbotInput} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your question here..."
        aria-label="Message input"
        className={styles.inputField}
      />
      <button 
        type="submit" 
        className={styles.sendButton}
        aria-label="Send message"
        disabled={!input.trim()}
      >
        <Icon name="send" color="light" />
      </button>
    </form>
  );
};

export default ChatbotInput;