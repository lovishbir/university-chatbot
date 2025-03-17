import { useEffect, useRef } from 'react';
import { useChatbotContext } from '../store/chatbotContext';
import { ACTIONS } from '../store/chatbotReducer';
import { processUserInput } from '../services/nlp';
import { useLocalStorage } from './useLocalStorage';

export const useChatbot = () => {
  const { state, dispatch } = useChatbotContext();
  const { isOpen, messages, isTyping } = state;
  const messagesEndRef = useRef(null);
  
  const [savedMessages, setSavedMessages] = useLocalStorage('chatbot-history', []);
  
  useEffect(() => {
    if (messages.length === 0 && savedMessages.length > 0) {
      savedMessages.forEach(msg => {
        if (msg.sender === 'user') {
          dispatch({ type: ACTIONS.ADD_USER_MESSAGE, payload: { text: msg.text } });
        } else {
          dispatch({ 
            type: ACTIONS.ADD_BOT_MESSAGE, 
            payload: { text: msg.text, options: msg.options || [] } 
          });
        }
      });
    }
  }, []);
  
  useEffect(() => {
    if (messages.length > 0) {
      setSavedMessages(messages);
    }
  }, [messages, setSavedMessages]);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);
  
  const toggleChatbot = () => {
    dispatch({ type: ACTIONS.TOGGLE_CHATBOT });
  };
  
  const sendMessage = (text) => {
    if (!text.trim()) return;
    
    dispatch({ type: ACTIONS.ADD_USER_MESSAGE, payload: { text } });
    dispatch({ type: ACTIONS.SET_TYPING, payload: true });
    
    setTimeout(() => {
      const response = processUserInput(text);
      
      dispatch({ 
        type: ACTIONS.ADD_BOT_MESSAGE, 
        payload: { text: response.text, options: response.options } 
      });
      
      if (response.topic) {
        dispatch({ type: ACTIONS.SET_CURRENT_TOPIC, payload: response.topic });
      }
      
      dispatch({ type: ACTIONS.SET_TYPING, payload: false });
    }, 800);
  };
  
  const selectOption = (option) => {
    dispatch({ type: ACTIONS.ADD_USER_MESSAGE, payload: { text: option } });
    dispatch({ type: ACTIONS.SET_TYPING, payload: true });
    
    setTimeout(() => {
      const response = processUserInput(option, true);
      
      dispatch({ 
        type: ACTIONS.ADD_BOT_MESSAGE, 
        payload: { text: response.text, options: response.options } 
      });
      
      if (response.topic) {
        dispatch({ type: ACTIONS.SET_CURRENT_TOPIC, payload: response.topic });
      }
      
      dispatch({ type: ACTIONS.SET_TYPING, payload: false });
    }, 600);
  };
  
  const resetChat = () => {
    dispatch({ type: ACTIONS.RESET_CHAT });
  };
  
  return {
    isOpen,
    messages,
    isTyping,
    messagesEndRef,
    toggleChatbot,
    sendMessage,
    selectOption,
    resetChat
  };
};