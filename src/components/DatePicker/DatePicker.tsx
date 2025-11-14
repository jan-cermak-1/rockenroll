import React from 'react';
import './DatePicker.css';

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  fullWidth?: boolean;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      helperText,
      error = false,
      errorMessage,
      value,
      onChange,
      min,
      max,
      fullWidth = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    const wrapperClassNames = [
      'soul-datepicker',
      error && 'soul-datepicker--error',
      fullWidth && 'soul-datepicker--full-width',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClassNames}>
        {label && <label className="soul-datepicker__label">{label}</label>}
        <div className="soul-datepicker__input-wrapper">
          <input
            ref={ref}
            type="date"
            className="soul-datepicker__input"
            value={value}
            onChange={handleChange}
            min={min}
            max={max}
            {...props}
          />
          <svg className="soul-datepicker__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        {(helperText || errorMessage) && (
          <div className="soul-datepicker__helper-text">
            {error && errorMessage ? errorMessage : helperText}
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

