import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
  
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Button is in loading state
   */
  loading?: boolean;
  
  /**
   * Full width button
   */
  fullWidth?: boolean;
  
  /**
   * Icon before button text
   */
  iconBefore?: React.ReactNode;
  
  /**
   * Icon after button text
   */
  iconAfter?: React.ReactNode;
  
  /**
   * Button content
   */
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      loading = false,
      fullWidth = false,
      iconBefore,
      iconAfter,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const classNames = [
      'soul-button',
      `soul-button--${variant}`,
      `soul-button--${size}`,
      loading && 'soul-button--loading',
      fullWidth && 'soul-button--full-width',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="soul-button__spinner">
            <svg className="soul-button__spinner-icon" viewBox="0 0 24 24">
              <circle
                className="soul-button__spinner-circle"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="3"
              />
            </svg>
          </span>
        )}
        {!loading && iconBefore && (
          <span className="soul-button__icon soul-button__icon--before">
            {iconBefore}
          </span>
        )}
        {children && <span className="soul-button__text">{children}</span>}
        {!loading && iconAfter && (
          <span className="soul-button__icon soul-button__icon--after">
            {iconAfter}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

