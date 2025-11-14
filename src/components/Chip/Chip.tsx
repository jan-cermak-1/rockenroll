import React from 'react';
import './Chip.css';

export interface ChipProps {
  label: string;
  variant?: 'filled' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium';
  onDelete?: () => void;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  onDelete,
  onClick,
  icon,
  className = '',
}) => {
  const classNames = [
    'soul-chip',
    `soul-chip--${variant}`,
    `soul-chip--${color}`,
    `soul-chip--${size}`,
    onClick && 'soul-chip--clickable',
    className,
  ].filter(Boolean).join(' ');

  const Element = onClick ? 'button' : 'div';

  return (
    <Element
      className={classNames}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {icon && <span className="soul-chip__icon">{icon}</span>}
      <span className="soul-chip__label">{label}</span>
      {onDelete && (
        <button
          type="button"
          className="soul-chip__delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          aria-label="Delete"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </Element>
  );
};

