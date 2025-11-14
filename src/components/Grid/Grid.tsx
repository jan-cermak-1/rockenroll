import React from 'react';
import './Grid.css';

export interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 6 | 12 | 'auto';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 12,
  gap = 'md',
  alignItems = 'stretch',
  justifyItems = 'stretch',
  className = '',
}) => {
  const classNames = [
    'soul-grid',
    `soul-grid--columns-${columns}`,
    `soul-grid--gap-${gap}`,
    `soul-grid--align-${alignItems}`,
    `soul-grid--justify-${justifyItems}`,
    className,
  ].filter(Boolean).join(' ');

  return <div className={classNames}>{children}</div>;
};

export interface GridItemProps {
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4 | 6 | 12 | 'auto';
  rowSpan?: 1 | 2 | 3 | 4;
  className?: string;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  colSpan = 'auto',
  rowSpan = 1,
  className = '',
}) => {
  const classNames = [
    'soul-grid__item',
    colSpan !== 'auto' && `soul-grid__item--col-${colSpan}`,
    rowSpan > 1 && `soul-grid__item--row-${rowSpan}`,
    className,
  ].filter(Boolean).join(' ');

  return <div className={classNames}>{children}</div>;
};

