import React from 'react';

const Button = ({ children }) => {
  return <button>{children ?? 'sample'}</button>;
};

export default Button;
