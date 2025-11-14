import React from 'react';
import './Switch.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'ios';
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = 'medium', variant = 'default', className = '', disabled, ...props }, ref) => {
    const wrapperClassNames = [
      'soul-switch',
      `soul-switch--${size}`,
      `soul-switch--${variant}`,
      disabled && 'soul-switch--disabled',
      className,
    ].filter(Boolean).join(' ');

    return (
      <label className={wrapperClassNames}>
        <input ref={ref} type="checkbox" className="soul-switch__input" disabled={disabled} {...props} />
        <span className="soul-switch__track">
          <span className="soul-switch__thumb" />
        </span>
        {label && <span className="soul-switch__label">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

