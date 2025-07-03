import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  hover = false,
  theme = 'dark'
}) => {
  const baseClasses = 'rounded-2xl border transition-all duration-200';
  
  const themeClasses = {
    dark: 'bg-gray-800 border-gray-700',
    light: 'bg-white border-gray-200'
  };
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105 cursor-pointer' : '';
  
  const classes = `${baseClasses} ${themeClasses[theme]} ${padding} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
