import { detectIntent } from './intentDetection';
import { containsInappropriateLanguage } from './languageFilter';
import { getResponseForIntent, getFallbackResponse, getPredefinedOptions } from '../../utils/responses';

export const processUserInput = (text, isPredefined = false) => {
  // If it's a predefined option, we can skip some processing
  if (isPredefined) {
    return getResponseForIntent(text);
  }
  
  // Check for inappropriate language
  if (containsInappropriateLanguage(text)) {
    return {
      text: "I'm programmed to maintain respectful conversations. Please use appropriate language so I can assist you better.",
      options: getPredefinedOptions(),
      topic: 'moderation'
    };
  }
  
  // Empty or very short input
  if (!text.trim() || text.trim().length < 2) {
    return {
      text: "I didn't catch that. Could you please rephrase your question, or select one of these common topics?",
      options: getPredefinedOptions()
    };
  }
  
  // Detect intent and get appropriate response
  const intent = detectIntent(text);
  
  if (intent === 'unknown') {
    return getFallbackResponse();
  }
  
  return getResponseForIntent(intent);
};