import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /**
   * Badge variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  
  /**
   * Badge size
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Badge content
   */
  children: React.ReactNode;
  
  /**
   * Custom className
   */
  className?: string;
  
  /**
   * Dot badge (small indicator)
   */
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  dot = false,
}) => {
  const classNames = [
    'soul-badge',
    `soul-badge--${variant}`,
    `soul-badge--${size}`,
    dot && 'soul-badge--dot',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{children}</span>;
};

