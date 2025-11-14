import React, { useState } from 'react';
import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: 'default' | 'pills';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  onChange,
  variant = 'default',
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) onChange(tabId);
  };

  const activeItem = items.find((item) => item.id === activeTab);

  const classNames = [
    'soul-tabs',
    `soul-tabs--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <div className="soul-tabs__list" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`panel-${item.id}`}
            className={`soul-tabs__tab ${
              activeTab === item.id ? 'soul-tabs__tab--active' : ''
            } ${item.disabled ? 'soul-tabs__tab--disabled' : ''}`}
            onClick={() => !item.disabled && handleTabChange(item.id)}
            disabled={item.disabled}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        className="soul-tabs__panel"
        role="tabpanel"
        id={`panel-${activeTab}`}
      >
        {activeItem?.content}
      </div>
    </div>
  );
};

