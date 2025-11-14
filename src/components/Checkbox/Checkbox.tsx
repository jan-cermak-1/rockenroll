import React from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Checkbox label
   */
  label?: React.ReactNode;
  
  /**
   * Indeterminate state
   */
  indeterminate?: boolean;
  
  /**
   * Error state
   */
  error?: boolean;
  
  /**
   * Helper text
   */
  helperText?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      indeterminate = false,
      error = false,
      helperText,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    React.useImperativeHandle(ref, () => inputRef.current!);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const wrapperClassNames = [
      'soul-checkbox',
      error && 'soul-checkbox--error',
      disabled && 'soul-checkbox--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={wrapperClassNames}>
        <label className="soul-checkbox__label">
          <input
            ref={inputRef}
            type="checkbox"
            className="soul-checkbox__input"
            disabled={disabled}
            {...props}
          />
          <span className="soul-checkbox__box">
            <svg
              className="soul-checkbox__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              {indeterminate ? (
                <line x1="5" y1="12" x2="19" y2="12" />
              ) : (
                <polyline points="20 6 9 17 4 12" />
              )}
            </svg>
          </span>
          {label && <span className="soul-checkbox__text">{label}</span>}
        </label>
        {helperText && (
          <div className="soul-checkbox__helper-text">{helperText}</div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

