import React from 'react';
import { Avatar } from '../Avatar';
import './AvatarGroup.css';

export interface AvatarGroupProps {
  avatars: Array<{
    name: string;
    src?: string;
    status?: 'online' | 'offline' | 'busy' | 'away';
  }>;
  max?: number;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 3,
  size = 'medium',
  className = '',
}) => {
  const displayedAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  const classNames = [
    'soul-avatar-group',
    `soul-avatar-group--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {displayedAvatars.map((avatar, index) => (
        <div key={index} className="soul-avatar-group__item">
          <Avatar
            name={avatar.name}
            src={avatar.src}
            status={avatar.status}
            size={size}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="soul-avatar-group__item soul-avatar-group__more">
          <div className={`soul-avatar-group__more-badge soul-avatar-group__more-badge--${size}`}>
            +{remainingCount}
          </div>
        </div>
      )}
    </div>
  );
};

