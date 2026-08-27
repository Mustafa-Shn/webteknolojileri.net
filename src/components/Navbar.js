import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-dark-slate hover:text-accent-gray transition"
            >
              Webteknolojileri.Net
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-dark-slate px-3 py-2 text-sm font-medium transition"
              >
                Hakkımda
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-dark-slate px-3 py-2 text-sm font-medium transition"
              >
                Projeler
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-dark-slate text-white hover:bg-accent-gray px-6 py-2 rounded-lg text-sm font-medium transition"
              >
                İletişim
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-slate hover:text-accent-gray focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-light-gray border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-dark-slate block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Hakkımda
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-dark-slate block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Projeler
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-dark-slate text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              İletişim
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
