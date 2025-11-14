import React from 'react';
import './Divider.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  className = '',
}) => {
  const classNames = [
    'soul-divider',
    `soul-divider--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <hr className={classNames} />;
};

