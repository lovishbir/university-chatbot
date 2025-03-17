// src/styles/theme.js
export const theme = {
    colors: {
      primary: '#4a6baf',
      primaryDark: '#3a5a9f',
      secondary: '#f0f2f5',
      background: '#ffffff',
      backgroundLight: '#f7f9fc',
      text: '#333333',
      textLight: '#666666',
      border: '#e6e6e6',
      error: '#d32f2f',
      success: '#388e3c'
    },
    
    fonts: {
      primary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      secondary: "Arial, sans-serif"
    },
    
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px'
    },
    
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '16px',
      round: '50%'
    },
    
    shadows: {
      small: '0 1px 3px rgba(0, 0, 0, 0.12)',
      medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
      large: '0 10px 20px rgba(0, 0, 0, 0.15)'
    },
    
    transitions: {
      fast: '0.2s ease',
      medium: '0.3s ease',
      slow: '0.5s ease',
      bounce: '0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }
  };
  
  // Convert theme to CSS variables
  export const themeToCSS = () => {
    let cssVars = ':root {\n';
    
    // Process colors
    Object.entries(theme.colors).forEach(([key, value]) => {
      cssVars += `  --color-${key}: ${value};\n`;
    });
    
    // Process fonts
    Object.entries(theme.fonts).forEach(([key, value]) => {
      cssVars += `  --font-${key}: ${value};\n`;
    });
    
    // Process spacing
    Object.entries(theme.spacing).forEach(([key, value]) => {
      cssVars += `  --spacing-${key}: ${value};\n`;
    });
    
    // Process border radius
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      cssVars += `  --radius-${key}: ${value};\n`;
    });
    
    // Process shadows
    Object.entries(theme.shadows).forEach(([key, value]) => {
      cssVars += `  --shadow-${key}: ${value};\n`;
    });
    
    // Process transitions
    Object.entries(theme.transitions).forEach(([key, value]) => {
      cssVars += `  --transition-${key}: ${value};\n`;
    });
    
    cssVars += '}';
    return cssVars;
  };