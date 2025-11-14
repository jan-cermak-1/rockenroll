import React from 'react';
import './Link.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  underline?: 'always' | 'hover' | 'none';
  external?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'primary', underline = 'hover', external = false, className = '', children, ...props }, ref) => {
    const classNames = [
      'soul-link',
      `soul-link--${variant}`,
      `soul-link--underline-${underline}`,
      className,
    ].filter(Boolean).join(' ');

    return (
      <a
        ref={ref}
        className={classNames}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
        {external && (
          <svg className="soul-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';

