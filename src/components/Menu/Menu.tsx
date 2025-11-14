import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
}

export interface MenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  trigger,
  items,
  position = 'bottom-left',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleItemClick = (item: MenuItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
      setIsOpen(false);
    }
  };

  const classNames = [
    'soul-menu',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={menuRef} className={classNames}>
      <div className="soul-menu__trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`soul-menu__content soul-menu__content--${position}`}>
          {items.map((item) => 
            item.divider ? (
              <div key={item.id} className="soul-menu__divider" />
            ) : (
              <button
                key={item.id}
                type="button"
                className={`soul-menu__item ${item.disabled ? 'soul-menu__item--disabled' : ''}`}
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
              >
                {item.icon && <span className="soul-menu__icon">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

