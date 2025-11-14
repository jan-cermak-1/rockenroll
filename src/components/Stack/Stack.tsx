import React from 'react';
import './Stack.css';

export interface StackProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  wrap?: boolean;
  className?: string;
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = '',
}) => {
  const classNames = [
    'soul-stack',
    `soul-stack--${direction}`,
    `soul-stack--spacing-${spacing}`,
    `soul-stack--align-${align}`,
    `soul-stack--justify-${justify}`,
    wrap && 'soul-stack--wrap',
    className,
  ].filter(Boolean).join(' ');

  return <div className={classNames}>{children}</div>;
};

