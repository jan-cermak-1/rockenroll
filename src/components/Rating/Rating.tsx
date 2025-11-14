import React, { useState } from 'react';
import './Rating.css';

export interface RatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: 'small' | 'medium' | 'large';
  precision?: number;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  onChange,
  readOnly = false,
  size = 'medium',
  precision = 1,
  className = '',
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (!readOnly && onChange) {
      onChange(index + 1);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!readOnly) {
      setHoverValue(index + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverValue(null);
    }
  };

  const getFillPercentage = (index: number) => {
    const displayValue = hoverValue !== null ? hoverValue : value;
    if (displayValue >= index + 1) {
      return 100;
    }
    if (displayValue > index) {
      return ((displayValue - index) * 100);
    }
    return 0;
  };

  const classNames = [
    'soul-rating',
    `soul-rating--${size}`,
    readOnly && 'soul-rating--readonly',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {Array.from({ length: max }, (_, index) => {
        const fillPercentage = getFillPercentage(index);

        return (
          <button
            key={index}
            type="button"
            className="soul-rating__star"
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            disabled={readOnly}
            aria-label={`Rate ${index + 1} out of ${max}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <defs>
                <linearGradient id={`fill-${index}`}>
                  <stop offset={`${fillPercentage}%`} stopColor="currentColor" />
                  <stop offset={`${fillPercentage}%`} stopColor="transparent" />
                </linearGradient>
              </defs>
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={`url(#fill-${index})`}
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

