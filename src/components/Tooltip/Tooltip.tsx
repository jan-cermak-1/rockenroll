import React, { useState, useRef } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  /**
   * Tooltip content
   */
  content: React.ReactNode;
  
  /**
   * Tooltip placement
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  
  /**
   * Children element that triggers tooltip
   */
  children: React.ReactElement;
  
  /**
   * Custom className
   */
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = 'top',
  children,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const classNames = [
    'soul-tooltip',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const tooltipClassNames = [
    'soul-tooltip__content',
    `soul-tooltip__content--${placement}`,
    isVisible && 'soul-tooltip__content--visible',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className={tooltipClassNames} role="tooltip">
        {content}
        <div className="soul-tooltip__arrow" />
      </div>
    </div>
  );
};

