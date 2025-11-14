import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  clickable = false,
  onClick,
  className = '',
}) => {
  const classNames = [
    'soul-card',
    `soul-card--${variant}`,
    `soul-card--padding-${padding}`,
    (clickable || onClick) && 'soul-card--clickable',
    className,
  ].filter(Boolean).join(' ');

  const Element = onClick ? 'button' : 'div';

  return (
    <Element className={classNames} onClick={onClick} type={onClick ? 'button' : undefined}>
      {children}
    </Element>
  );
};

