// src/components/common/Icon.jsx
import React from 'react';
import styles from '../../styles/components/common.module.css';

const Icon = ({ name, size = 'medium', color = 'primary', className = '' }) => {
  const iconClasses = [
    styles.icon,
    styles[`icon-${size}`],
    styles[`icon-${color}`],
    className
  ].filter(Boolean).join(' ');

  const getIconPath = () => {
    switch (name) {
      case 'send':
        return (
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        );
      case 'close':
        return (
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        );
      case 'chat':
        return (
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        );
      default:
        return null;
    }
  };

  return (
    <svg 
      className={iconClasses} 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      aria-hidden="true"
    >
      {getIconPath()}
    </svg>
  );
};

export default Icon;