import React from 'react';
import { ButtonProps } from './Button.props';
import './Button.style.css';

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
}) => {
  return (
    <div onClick={onClick && onClick} className="button-style">
      {title}
    </div>
  )
};
