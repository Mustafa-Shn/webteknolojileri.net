import React from 'react';

export default function Hero({ translations }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-light-gray">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Content */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-slate leading-tight">
            {translations.hero.titleLead} <span className="text-accent-gray">Mustafa Şahin</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {translations.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-dark-slate text-white font-semibold rounded-lg hover:bg-accent-gray transition duration-300 transform hover:scale-105"
            >
              {translations.hero.projectsButton}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-dark-slate text-dark-slate font-semibold rounded-lg hover:bg-dark-slate hover:text-white transition duration-300"
            >
              {translations.hero.contactButton}
            </button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-32 bg-accent-gray rounded-full opacity-10"></div>
        </div>
      </div>
    </section>
  );
}
