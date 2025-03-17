// src/components/Chatbot/index.jsx
import React from 'react';
import { useChatbot } from '../../hooks/useChatbot';
import ChatbotHeader from './ChatbotHeader';
import ChatbotMessages from './ChatbotMessages';
import ChatbotInput from './ChatbotInput';
import ChatbotToggle from './ChatbotToggle';
import styles from '../../styles/components/chatbot.module.css';

const Chatbot = () => {
  const {
    isOpen,
    messages,
    isTyping,
    messagesEndRef,
    toggleChatbot,
    sendMessage,
    selectOption
  } = useChatbot();

  return (
    <div className={styles.chatbotContainer}>
      <ChatbotToggle isOpen={isOpen} onClick={toggleChatbot} />
      
      <div className={`${styles.chatbotWindow} ${isOpen ? styles.open : ''}`}>
        <ChatbotHeader onClose={toggleChatbot} />
        
        <ChatbotMessages 
          messages={messages}
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
          onOptionSelect={selectOption}
        />
        
        <ChatbotInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chatbot;