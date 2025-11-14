import React from 'react';
import './Banner.css';

export interface BannerProps {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  variant = 'info',
  children,
  onClose,
  className = '',
}) => {
  const classNames = ['soul-banner', `soul-banner--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="alert">
      <div className="soul-banner__content">{children}</div>
      {onClose && (
        <button
          type="button"
          className="soul-banner__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
};

