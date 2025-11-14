import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
  /**
   * Spinner size
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Spinner color
   */
  color?: 'primary' | 'secondary' | 'white';
  
  /**
   * Custom className
   */
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  className = '',
}) => {
  const classNames = [
    'soul-spinner',
    `soul-spinner--${size}`,
    `soul-spinner--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="status" aria-label="Loading">
      <svg className="soul-spinner__svg" viewBox="0 0 50 50">
        <circle
          className="soul-spinner__circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

