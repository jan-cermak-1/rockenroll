import React from 'react';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className = '',
}) => {
  const classNames = ['soul-breadcrumb', className].filter(Boolean).join(' ');

  return (
    <nav className={classNames} aria-label="Breadcrumb">
      <ol className="soul-breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="soul-breadcrumb__item">
              {!isLast && item.href ? (
                <a href={item.href} className="soul-breadcrumb__link">
                  {item.label}
                </a>
              ) : !isLast && item.onClick ? (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="soul-breadcrumb__button"
                >
                  {item.label}
                </button>
              ) : (
                <span className="soul-breadcrumb__current" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="soul-breadcrumb__separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

