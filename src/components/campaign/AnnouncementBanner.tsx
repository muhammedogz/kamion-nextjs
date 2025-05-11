import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { PartyPopperIcon } from 'lucide-react';

interface AnnouncementBannerProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AnnouncementBanner = ({
  children,
  className,
  onClick,
}: AnnouncementBannerProps) => {
  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        'bg-bg-announcement inline-flex w-full gap-2 rounded-4xl px-6 py-4',
        className
      )}
      onClick={onClick}
    >
      <PartyPopperIcon className="text-fg-icon size-4" />
      {children}
    </div>
  );
};

export default AnnouncementBanner;
