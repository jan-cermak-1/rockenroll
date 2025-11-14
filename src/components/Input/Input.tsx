import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label
   */
  label?: string;
  
  /**
   * Helper text below input
   */
  helperText?: string;
  
  /**
   * Error state
   */
  error?: boolean;
  
  /**
   * Error message
   */
  errorMessage?: string;
  
  /**
   * Icon before input
   */
  iconBefore?: React.ReactNode;
  
  /**
   * Icon after input
   */
  iconAfter?: React.ReactNode;
  
  /**
   * Full width input
   */
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      iconBefore,
      iconAfter,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const wrapperClassNames = [
      'soul-input',
      error && 'soul-input--error',
      disabled && 'soul-input--disabled',
      fullWidth && 'soul-input--full-width',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClassNames = [
      'soul-input__field',
      iconBefore && 'soul-input__field--has-icon-before',
      iconAfter && 'soul-input__field--has-icon-after',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClassNames}>
        {label && (
          <label className="soul-input__label">
            {label}
          </label>
        )}
        <div className="soul-input__container">
          {iconBefore && (
            <span className="soul-input__icon soul-input__icon--before">
              {iconBefore}
            </span>
          )}
          <input
            ref={ref}
            className={inputClassNames}
            disabled={disabled}
            {...props}
          />
          {iconAfter && (
            <span className="soul-input__icon soul-input__icon--after">
              {iconAfter}
            </span>
          )}
        </div>
        {(helperText || errorMessage) && (
          <div className="soul-input__helper-text">
            {error && errorMessage ? errorMessage : helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

