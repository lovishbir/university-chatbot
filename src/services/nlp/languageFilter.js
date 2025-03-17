export const containsInappropriateLanguage = (text) => {
    const lowerText = text.toLowerCase();
    
    // This would be a more comprehensive list in production
    const inappropriateWords = [
      'profanity', 'obscenity', 'slur', 'offensive', 'inappropriate',
      // Add actual inappropriate words here
    ];
    
    return inappropriateWords.some(word => lowerText.includes(word));
  };