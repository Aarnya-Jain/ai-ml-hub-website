import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientHeading({ children, className = '' }: GradientHeadingProps) {
  return (
    <h2 className={`text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 ${className}`}>
      {children}
    </h2>
  );
}