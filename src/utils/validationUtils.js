export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isValidPhone = (phone) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };
  
  export const isEmptyString = (str) => {
    return !str || str.trim().length === 0;
  };
  
  export const containsOnlyLetters = (str) => {
    const letterRegex = /^[a-zA-Z\s]+$/;
    return letterRegex.test(str);
  };
  
  export const isMinLength = (str, minLength) => {
    return str && str.length >= minLength;
  };