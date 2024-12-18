import React from 'react';
import { images } from '../../config/images';

interface AimlLogoProps {
  className?: string;
  variant?: 'default' | 'purple';
}

export function AimlLogo({
  className = '',
  variant = 'default',
}: AimlLogoProps) {
  const logoPath =
    variant === 'purple' ? images.logos.aimlPurple : images.logos.aiml;

  return (
    <img
      src={logoPath}
      alt="AIML Hub Logo"
      className={`${className} transition-all duration-300`}
    />
  );
}
