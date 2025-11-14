import React from 'react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[];
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, helperText, error = false, fullWidth = false, onChange, className = '', ...props }, ref) => {
    const wrapperClassNames = [
      'soul-select',
      error && 'soul-select--error',
      fullWidth && 'soul-select--full-width',
      className,
    ].filter(Boolean).join(' ');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) onChange(e.target.value);
    };

    return (
      <div className={wrapperClassNames}>
        {label && <label className="soul-select__label">{label}</label>}
        <div className="soul-select__wrapper">
          <select ref={ref} className="soul-select__field" onChange={handleChange} {...props}>
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <svg className="soul-select__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {helperText && <div className="soul-select__helper-text">{helperText}</div>}
      </div>
    );
  }
);

Select.displayName = 'Select';

