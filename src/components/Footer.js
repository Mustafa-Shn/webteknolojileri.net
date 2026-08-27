import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-slate text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-2xl font-bold mb-2">Webteknolojileri.Net</h4>            
            <p className="text-gray-400">Modern web - mobil geliştirme ve tasarım çözümleri.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:hello@webteknolojileri.net" className="hover:text-white transition">hello@webteknolojileri.net</a></li>
              <li>Türkiye</li>              
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tüm hakları saklıdır.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Tasarım ve geliştirme: <a href="https://wwwwebteknolojileri.net" className="hover:text-white transition">Webteknolojileri.Net</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
