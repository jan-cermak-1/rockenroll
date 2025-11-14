import React from 'react';
import './SkeletonLoader.css';

export interface SkeletonLoaderProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  count?: number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  width,
  height,
  count = 1,
  className = '',
}) => {
  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const classNames = [
    'soul-skeleton',
    `soul-skeleton--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={classNames} style={style} />
      ))}
    </>
  );
};

