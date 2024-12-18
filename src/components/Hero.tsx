import React from 'react';
import { Sparkles } from 'lucide-react';
import { AimlLogo } from './ui/AimlLogo';

export default function Hero() {
const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative hero-grid min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900"></div>
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Students collaborating"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="absolute inset-0">
        <div className="honeycomb-pattern"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-700 rounded-full blur-2xl opacity-35 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <AimlLogo className="h-46 w-46 text-purple-400 mx-auto mb-6 animate-float" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient">
          AI/ML HUB
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
          Welcome to the AIML Hub at JIIT! A space for innovation, learning, and
          collaboration in Artificial Intelligence and Machine Learning. Join us
          to explore cutting-edge tech and shape the future together!
        </p>
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
          <button className="relative px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <span className="flex items-center">
              Join Us Today
              <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
            </span>
          </button>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent animate-pulse-slow"></div>
      </div>
    </div>
  );
}
