import React from 'react';
import './Container.css';

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'lg',
  padding = 'md',
  className = '',
}) => {
  const classNames = [
    'soul-container',
    `soul-container--${maxWidth}`,
    `soul-container--padding-${padding}`,
    className,
  ].filter(Boolean).join(' ');

  return <div className={classNames}>{children}</div>;
};

