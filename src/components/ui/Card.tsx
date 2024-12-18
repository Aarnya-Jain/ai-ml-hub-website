import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-900/20 shadow-lg shadow-purple-500/10 ${className}`}>
      {children}
    </div>
  );
}