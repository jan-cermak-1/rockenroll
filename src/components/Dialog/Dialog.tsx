import React, { useEffect } from 'react';
import './Dialog.css';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnOverlayClick = true,
  showCloseButton = true,
  className = '',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const classNames = [
    'soul-dialog__content',
    `soul-dialog__content--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="soul-dialog" onClick={closeOnOverlayClick ? onClose : undefined}>
      <div className={classNames} onClick={(e) => e.stopPropagation()}>
        {showCloseButton && (
          <button type="button" className="soul-dialog__close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
        {title && <div className="soul-dialog__header"><h2>{title}</h2></div>}
        <div className="soul-dialog__body">{children}</div>
        {footer && <div className="soul-dialog__footer">{footer}</div>}
      </div>
    </div>
  );
};

