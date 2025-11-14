import React from 'react';
import './Toggle.css';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Toggle label
   */
  label?: React.ReactNode;
  
  /**
   * Toggle size
   */
  size?: 'small' | 'medium' | 'large';
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      size = 'medium',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const wrapperClassNames = [
      'soul-toggle',
      `soul-toggle--${size}`,
      disabled && 'soul-toggle--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClassNames}>
        <input
          ref={ref}
          type="checkbox"
          className="soul-toggle__input"
          disabled={disabled}
          {...props}
        />
        <span className="soul-toggle__switch">
          <span className="soul-toggle__slider" />
        </span>
        {label && <span className="soul-toggle__label">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';

