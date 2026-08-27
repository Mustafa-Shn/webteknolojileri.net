import React, { useState } from 'react';

export default function Contact({ translations }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    //{
      //name: 'GitHub',
      //url: '#',
      //icon: 'github',
    //},
    {
      name: 'LinkedIn',
      url: '#',
      icon: 'linkedin',
    },
    //{
      //name: 'Twitter',
      //url: '#',
      //icon: 'twitter',
    //},
    {
      name: 'Email',
      url: 'mailto:hello@webteknolojileri.net',
      icon: 'email',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-slate mb-4">{translations.contact.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {translations.contact.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="hidden">
            <h3 className="text-2xl font-bold text-dark-slate mb-6">{translations.contact.sendMessage}</h3> 

            {isSubmitted ? ( 
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg">
                <p className="font-semibold">{translations.contact.thanks}</p>
                <p>{translations.contact.received}</p>
             </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.contact.fullName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-slate"
                    placeholder={translations.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-slate"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-slate"
                    placeholder={translations.contact.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-dark-slate text-white font-semibold py-3 rounded-lg hover:bg-accent-gray transition duration-300"
                >
                  {translations.contact.send}
                </button>
              </form>
            )}
          </div>

          {/* Social Links & Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-slate mb-6">{translations.contact.social}</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-light-gray hover:border-dark-slate transition duration-300"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-dark-slate">{link.name}</p>
                    </div>
                    <span className="text-gray-400">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-light-gray p-6 rounded-lg">
              <h4 className="font-bold text-dark-slate mb-4">{translations.contact.quickContact}</h4>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Email:</span> <a href="mailto:hello@webteknolojileri.net" className="hover:text-dark-slate transition">hello@webteknolojileri.net</a>
                </p>
                <p>
                  <span className="font-semibold">{translations.contact.location}:</span> Türkiye
                </p>
                <p>
                  <span className="font-semibold">{translations.contact.responseTime}:</span> {translations.contact.responseValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
