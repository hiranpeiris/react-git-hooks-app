import React from 'react';
import { ContainerProps, ContainerOrientation } from './Container.props';
import './Container.style.css';

export  const Container: React.FC<ContainerProps> = ({
  children,
  orientation = ContainerOrientation.Column,
  align,
}) => {
  return (
    <div style={{
      flexDirection: orientation,
      alignItems: align
    }} className="container-style">
      {children}
    </div>
  );
};
