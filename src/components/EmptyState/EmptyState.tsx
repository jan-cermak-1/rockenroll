import React from 'react';
import './EmptyState.css';

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = '',
}) => {
  const classNames = ['soul-empty-state', className].filter(Boolean).join(' ');

  const defaultIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );

  return (
    <div className={classNames}>
      <div className="soul-empty-state__icon">
        {icon || defaultIcon}
      </div>
      <h3 className="soul-empty-state__title">{title}</h3>
      {description && (
        <p className="soul-empty-state__description">{description}</p>
      )}
      {action && (
        <div className="soul-empty-state__action">{action}</div>
      )}
    </div>
  );
};

