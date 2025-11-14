import React from 'react';
import './Radio.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  helperText?: string;
  error?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, helperText, error = false, className = '', disabled, ...props }, ref) => {
    const wrapperClassNames = [
      'soul-radio',
      error && 'soul-radio--error',
      disabled && 'soul-radio--disabled',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClassNames}>
        <label className="soul-radio__label">
          <input ref={ref} type="radio" className="soul-radio__input" disabled={disabled} {...props} />
          <span className="soul-radio__button">
            <span className="soul-radio__dot" />
          </span>
          {label && <span className="soul-radio__text">{label}</span>}
        </label>
        {helperText && <div className="soul-radio__helper-text">{helperText}</div>}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

