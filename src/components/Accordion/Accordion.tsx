import React, { useState } from 'react';
import './Accordion.css';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const classNames = ['soul-accordion', className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        
        return (
          <div key={item.id} className="soul-accordion__item">
            <button
              type="button"
              className="soul-accordion__trigger"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <span className="soul-accordion__title">{item.title}</span>
              <svg
                className={`soul-accordion__icon ${isOpen ? 'soul-accordion__icon--open' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isOpen && (
              <div className="soul-accordion__content">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

