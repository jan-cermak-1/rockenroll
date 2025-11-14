import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  /**
   * Avatar image source
   */
  src?: string;
  
  /**
   * Alternative text for the image
   */
  alt?: string;
  
  /**
   * Avatar size
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  
  /**
   * Name for fallback initials
   */
  name?: string;
  
  /**
   * Avatar shape
   */
  shape?: 'circle' | 'square';
  
  /**
   * Custom className
   */
  className?: string;
  
  /**
   * Status indicator
   */
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'medium',
  name,
  shape = 'circle',
  className = '',
  status,
}) => {
  const [imageError, setImageError] = React.useState(false);

  const classNames = [
    'soul-avatar',
    `soul-avatar--${size}`,
    `soul-avatar--${shape}`,
    status && 'soul-avatar--has-status',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleImageError = () => {
    setImageError(true);
  };

  const showInitials = !src || imageError;

  return (
    <div className={classNames}>
      <div className="soul-avatar__container">
        {!showInitials && src && (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className="soul-avatar__image"
            onError={handleImageError}
          />
        )}
        {showInitials && name && (
          <div className="soul-avatar__initials">{getInitials(name)}</div>
        )}
        {showInitials && !name && (
          <div className="soul-avatar__placeholder">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
      {status && (
        <span className={`soul-avatar__status soul-avatar__status--${status}`} />
      )}
    </div>
  );
};

