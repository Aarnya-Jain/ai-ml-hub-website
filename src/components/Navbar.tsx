import React from 'react';
import { Menu, X } from 'lucide-react';
import { AimlLogo } from './ui/AimlLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-10 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900/80 backdrop-blur-lg border border-purple-900/20 rounded-2xl shadow-lg shadow-purple-500/10">
          <div className="flex justify-between h-14 px-4">
            <div className="flex items-center">
              <AimlLogo className="h-12 w-13 text-purple-200" />
              <span className="ml-4 text-xl font-bold text-white">
                AI/ML HUB
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#activities"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Activities
              </a>
              <a
                href="#meetings"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Meetings
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-purple-400 focus:outline-none"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-purple-900/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#activities"
                  className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Activities
                </a>
                <a
                  href="#meetings"
                  className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Meetings
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
