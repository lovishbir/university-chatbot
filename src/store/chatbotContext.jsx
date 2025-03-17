import React, { createContext, useReducer, useContext } from 'react';
import { chatbotReducer, initialState } from './chatbotReducer';

const ChatbotContext = createContext();

export const ChatbotProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatbotReducer, initialState);
  
  return (
    <ChatbotContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbotContext = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbotContext must be used within a ChatbotProvider');
  }
  return context;
};