import React, { useEffect } from 'react';
import './Modal.css';

export interface ModalProps {
  /**
   * Modal is open
   */
  open: boolean;
  
  /**
   * Callback when modal should close
   */
  onClose?: () => void;
  
  /**
   * Modal title
   */
  title?: React.ReactNode;
  
  /**
   * Modal content
   */
  children: React.ReactNode;
  
  /**
   * Modal footer
   */
  footer?: React.ReactNode;
  
  /**
   * Modal size
   */
  size?: 'small' | 'medium' | 'large' | 'full';
  
  /**
   * Close on overlay click
   */
  closeOnOverlay?: boolean;
  
  /**
   * Close on Escape key
   */
  closeOnEscape?: boolean;
  
  /**
   * Custom className
   */
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnOverlay = true,
  closeOnEscape = true,
  className = '',
}) => {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, closeOnEscape, onClose]);

  if (!open) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlay && onClose) {
      onClose();
    }
  };

  const modalClassNames = [
    'soul-modal__content',
    `soul-modal__content--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="soul-modal" onClick={handleOverlayClick}>
      <div className={modalClassNames}>
        {title && (
          <div className="soul-modal__header">
            <h2 className="soul-modal__title">{title}</h2>
            {onClose && (
              <button
                type="button"
                className="soul-modal__close"
                onClick={onClose}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="soul-modal__body">{children}</div>
        {footer && <div className="soul-modal__footer">{footer}</div>}
      </div>
    </div>
  );
};

