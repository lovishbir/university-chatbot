// src/components/common/Avatar.jsx
import React from 'react';
import styles from '../../styles/components/common.module.css';

const Avatar = ({ src, alt, size = 'medium', className = '' }) => {
  const avatarClasses = [
    styles.avatar,
    styles[`avatar-${size}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={avatarClasses}>
      {src ? (
        <img src={src} alt={alt || 'Avatar'} className={styles.avatarImage} />
      ) : (
        <div className={styles.avatarFallback}>
          {alt ? alt.charAt(0).toUpperCase() : 'U'}
        </div>
      )}
    </div>
  );
};

export default Avatar;