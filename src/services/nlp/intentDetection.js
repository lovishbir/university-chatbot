import { INTENTS } from '../../constants/intents';

export const detectIntent = (text) => {
  const lowerText = text.toLowerCase();
  
  for (const [intent, keywords] of Object.entries(INTENTS)) {
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      return intent;
    }
  }
  
  return 'unknown';
};