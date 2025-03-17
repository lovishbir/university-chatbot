// src/styles/animations.js
export const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const slideUp = `
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const pulse = `
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const rotate = `
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const typing = `
  @keyframes typing {
    0% {
      transform: scale(1);
      opacity: 0.4;
    }
    20% {
      transform: scale(1.2);
      opacity: 1;
    }
    40% {
      transform: scale(1);
      opacity: 0.4;
    }
    100% {
      transform: scale(1);
      opacity: 0.4;
    }
  }
`;