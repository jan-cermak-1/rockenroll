import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  disabled = false,
  error = false,
  fullWidth = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    if (onChange) onChange(optionValue);
    setIsOpen(false);
  };

  const classNames = [
    'soul-dropdown',
    isOpen && 'soul-dropdown--open',
    error && 'soul-dropdown--error',
    disabled && 'soul-dropdown--disabled',
    fullWidth && 'soul-dropdown--full-width',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={dropdownRef} className={classNames}>
      <button
        type="button"
        className="soul-dropdown__trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <span className="soul-dropdown__value">
          {selectedOption?.label || placeholder}
        </span>
        <svg className="soul-dropdown__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="soul-dropdown__menu">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`soul-dropdown__option ${
                option.value === value ? 'soul-dropdown__option--selected' : ''
              } ${option.disabled ? 'soul-dropdown__option--disabled' : ''}`}
              onClick={() => !option.disabled && handleSelect(option.value)}
              disabled={option.disabled}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

