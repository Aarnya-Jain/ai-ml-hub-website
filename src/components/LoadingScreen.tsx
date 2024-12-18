import React from 'react';
import { AimlLogo } from './ui/AimlLogo';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse-ring rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="relative bg-gray-900 rounded-full p-8">
          <AimlLogo className="h-36 w-36 text-purple-400 animate-float" />
        </div>
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse"></div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            AI/ML HUB
          </h2>
          <div className="flex justify-center mt-4 space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-purple-400 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
