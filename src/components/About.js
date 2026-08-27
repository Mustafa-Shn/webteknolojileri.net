import React from 'react';

export default function About({ translations }) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-slate">{translations.about.title}</h2>

            {translations.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 leading-relaxed text-lg">{paragraph}</p>
            ))}

            {/* Skills */}
            <div className="pt-6">
              {/* <h3 className="text-xl font-bold text-dark-slate mb-4">Becerilerim</h3> */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB', 'Git', 'Responsive Design', 'UI/UX'].map((skill) => (
                  <div key={skill} className="bg-light-gray px-4 py-2 rounded-lg text-center text-sm font-medium text-accent-gray">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Box */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gray to-dark-slate rounded-lg opacity-5"></div>
              <div className="absolute inset-4 border-2 border-accent-gray rounded-lg opacity-20"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent-gray opacity-10 mb-2">20+</div>
                  <p className="text-accent-gray text-sm opacity-60">{translations.about.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
