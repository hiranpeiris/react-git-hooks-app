import React from 'react';
import { TextProps } from './Text.props';
import './Text.style.css';

export const Text: React.FC<TextProps> = ({
  children,
  fontSize= '12px',
  color= 'black',
}) => {
  return (
    <p style={{
      fontSize,
      color,
    }} className="text-style">
      {children}
    </p>
  );
};
