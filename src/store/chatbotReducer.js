import { getInitialMessage } from '../utils/responses';

export const initialState = {
  isOpen: false,
  messages: [],
  isTyping: false,
  conversation: {
    currentTopic: null,
    history: []
  }
};

export const ACTIONS = {
  TOGGLE_CHATBOT: 'TOGGLE_CHATBOT',
  ADD_USER_MESSAGE: 'ADD_USER_MESSAGE',
  ADD_BOT_MESSAGE: 'ADD_BOT_MESSAGE',
  SET_TYPING: 'SET_TYPING',
  RESET_CHAT: 'RESET_CHAT',
  SET_CURRENT_TOPIC: 'SET_CURRENT_TOPIC'
};

export const chatbotReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_CHATBOT:
      const newIsOpen = !state.isOpen;
      let newMessages = [...state.messages];
      
      if (newIsOpen && state.messages.length === 0) {
        const initialMessage = getInitialMessage();
        newMessages = [{
          id: 1,
          text: initialMessage.text,
          sender: 'bot',
          options: initialMessage.options,
          timestamp: new Date().toISOString()
        }];
      }
      
      return {
        ...state,
        isOpen: newIsOpen,
        messages: newMessages
      };
    
    case ACTIONS.ADD_USER_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            text: action.payload.text,
            sender: 'user',
            timestamp: new Date().toISOString()
          }
        ],
        conversation: {
          ...state.conversation,
          history: [...state.conversation.history, {
            role: 'user',
            content: action.payload.text
          }]
        }
      };
    
    case ACTIONS.ADD_BOT_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            text: action.payload.text,
            sender: 'bot',
            options: action.payload.options || [],
            timestamp: new Date().toISOString()
          }
        ],
        conversation: {
          ...state.conversation,
          history: [...state.conversation.history, {
            role: 'bot',
            content: action.payload.text
          }]
        }
      };
    
    case ACTIONS.SET_TYPING:
      return {
        ...state,
        isTyping: action.payload
      };
    
    case ACTIONS.RESET_CHAT:
      return {
        ...initialState,
        isOpen: state.isOpen
      };
      
    case ACTIONS.SET_CURRENT_TOPIC:
      return {
        ...state,
        conversation: {
          ...state.conversation,
          currentTopic: action.payload
        }
      };
      
    default:
      return state;
  }
};