// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { themeToCSS } from './theme';
import { fadeIn, slideUp, pulse, rotate, typing } from './animations';

export const GlobalStyles = createGlobalStyle`
  ${themeToCSS()}
  
  ${fadeIn}
  ${slideUp}
  ${pulse}
  ${rotate}
  ${typing}
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: var(--font-primary);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.6;
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
  }
  
  /* University website styling */
  .app {
    min-height: 100vh;
  }
  
  .university-header {
    background-color: var(--color-primary);
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .university-header h1 {
    margin: 0;
    font-size: 1.8rem;
  }
  
  .main-nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  
  .main-nav a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity var(--transition-fast);
  }
  
  .main-nav a:hover {
    opacity: 0.8;
  }
  
  .university-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .hero-section {
    background-color: var(--color-backgroundLight);
    padding: 60px 20px;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-content h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--color-primary);
  }
  
  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: var(--color-textLight);
  }
  
  .cta-button {
    background-color: var(--color-primary);
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius-medium);
    transition: background-color var(--transition-fast);
  }
  
  .cta-button:hover {
    background-color: var(--color-primaryDark);
  }
  
  .content-section {
    margin-bottom: 40px;
  }
  
  .content-section h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: var(--color-primary);
  }
  
  /* Utility classes */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  

  @media (max-width: 768px) {
    .university-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
    
    .main-nav ul {
      flex-wrap: wrap;
      gap: 15px;
    }
    
    .hero-content h2 {
      font-size: 2rem;
    }
    
    .hero-content p {
      font-size: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    .university-header h1 {
      font-size: 1.5rem;
    }
    
    .hero-content h2 {
      font-size: 1.6rem;
    }
    
    .content-section h2 {
      font-size: 1.4rem;
    }
  }
`;