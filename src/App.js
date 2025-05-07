
import React, { useState, useEffect } from 'react';

const translations = {
  ro: {
    title: 'Închiriază inteligent cu AIGO',
    description: 'AIGO este serviciul tău de închiriere pentru mașini electrice de oraș în Deva. Simplu, rapid și prietenos cu mediul. Potrivit pentru turiști și localnici.',
    carsTitle: 'Mașini disponibile',
    bookingTitle: 'Rezervă o mașină',
    name: 'Nume complet',
    email: 'Email',
    date: 'Data',
    select: 'Selectează o mașină',
    send: 'Trimite rezervarea',
    menu: { despre: 'Despre', masini: 'Mașini', rezervare: 'Rezervare', contact: 'Contact', lang: 'EN' },
  },
  en: {
    title: 'Rent smart with AIGO',
    description: 'AIGO is your electric city car rental service in Deva. Simple, fast and eco-friendly. Perfect for tourists and locals.',
    carsTitle: 'Available Cars',
    bookingTitle: 'Book a Car',
    name: 'Full Name',
    email: 'Email',
    date: 'Date',
    select: 'Select a car',
    send: 'Send Booking',
    menu: { despre: 'About', masini: 'Cars', rezervare: 'Booking', contact: 'Contact', lang: 'RO' },
  }
};

export default function App() {
  const [lang, setLang] = useState('ro');
  const t = translations[lang];

  useEffect(() => {
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'ro';
    setLang(browserLang);
  }, []);

  const toggleLang = () => setLang(lang === 'ro' ? 'en' : 'ro');

  return (
    <div className="font-sans scroll-smooth bg-background">
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-primary font-bold text-xl">AIGO</h1>
          <ul className="flex space-x-4 text-sm">
            <li><a href="#despre" className="text-gray-700 hover:text-primary">{t.menu.despre}</a></li>
            <li><a href="#masini" className="text-gray-700 hover:text-primary">{t.menu.masini}</a></li>
            <li><a href="#rezervare" className="text-gray-700 hover:text-primary">{t.menu.rezervare}</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-primary">{t.menu.contact}</a></li>
            <li>
              <button onClick={toggleLang} className="text-gray-700 hover:text-primary">
                {t.menu.lang}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section id="despre" className="bg-background py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">{t.title}</h2>
          <p className="max-w-xl mx-auto text-gray-800 text-lg">
            {t.description}
          </p>
        </section>

        <section id="masini" className="py-16 px-4 bg-white text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">{t.carsTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
              <img src="/IMG_1241.JPG" alt="AIGO M1" className="rounded mb-2 h-40 object-cover" />
              <h3 className="font-semibold text-lg text-primary">AIGO M1</h3>
              <p className="text-sm text-gray-600">Autonomie: 222km | 150 RON/zi</p>
              <a href="#detalii-masini" className="mt-2 text-sm text-primary hover:underline">
                Vezi detalii
              </a>
            </div>
          
            <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
              <img src="/DSC06968.JPG" alt="AIGO T2" className="rounded mb-2 h-40 object-cover" />
              <h3 className="font-semibold text-lg text-primary">AIGO T2</h3>
              <p className="text-sm text-gray-600">Autonomie: 80–100km | 200 RON/zi</p>
              <a href="#detalii-aigo-t2" className="mt-2 text-sm text-primary hover:underline">
                Vezi detalii
              </a>
            </div>

          </div>
        </section>

        <section id="rezervare" className="bg-background py-16 px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">{t.bookingTitle}</h2>
          <form
            action="https://formsubmit.co/aigofleet@gmail.com"
            method="POST"
            className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4"
          >
            <input type="text" name="nume" placeholder={t.name} required className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder={t.email} required className="w-full p-2 border rounded" />
            <input type="date" name="data" required className="w-full p-2 border rounded" />
            <select name="masina" required className="w-full p-2 border rounded">
              <option value="">{t.select}</option>
              <option value="AIGO M1">AIGO M1</option>
            </select>
            <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:opacity-90">
              {t.send}
            </button>
          </form>
        </section>

        <section id="detalii-masini" className="bg-white py-16 px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">AIGO M1 – Detalii și Galerie</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            AIGO M1 este o mașină electrică de oraș compactă, eficientă și ideală pentru deplasări urbane.
            Cu un design modern și o autonomie de până la 222 km, este alegerea perfectă pentru mobilitate curată.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <img src="/IMG_1241.JPG" alt="AIGO M1 1" className="rounded shadow" />
            <img src="/IMG_1261.JPG" alt="AIGO M1 2" className="rounded shadow" />
            <img src="/IMG_1265.JPG" alt="AIGO M1 3" className="rounded shadow" />
            <img src="/IMG_1311.JPG" alt="AIGO M1 4" className="rounded shadow" />
            <img src="/IMG_1366.JPG" alt="AIGO M1 5" className="rounded shadow" />
            <img src="/IMG_1286.JPG" alt="AIGO M1 6" className="rounded shadow" />
          </div>
          <div className="text-left max-w-md mx-auto text-gray-800">
            <p><strong>Autonomie:</strong> 222 km</p>
            <p><strong>Preț:</strong> 150 RON / zi</p>
            <p><strong>Locuri:</strong> 2</p>
            <p><strong>Cutie:</strong> automată</p>
            <p><strong>Culoare:</strong> alb-crem</p>
          
            <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
              <img src="/DSC06968.JPG" alt="AIGO T2" className="rounded mb-2 h-40 object-cover" />
              <h3 className="font-semibold text-lg text-primary">AIGO T2</h3>
              <p className="text-sm text-gray-600">Autonomie: 80–100km | 200 RON/zi</p>
              <a href="#detalii-aigo-t2" className="mt-2 text-sm text-primary hover:underline">
                Vezi detalii
              </a>
            </div>

          </div>
        </section>
      
        {/* AIGO T2 – Detalii și Galerie */}
        <section id="detalii-aigo-t2" className="bg-white py-16 px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">AIGO T2 – Pick-up Electric</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            AIGO T2 este vehiculul ideal pentru transport urban. Cu o sarcină admisă de 390 kg și autonomie de până la 100 km, este perfect pentru livrări rapide sau sarcini voluminoase de oraș.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <img src="/DSC06968.JPG" alt="AIGO T2 - 1" className="rounded shadow" />
            <img src="/DSC06992.JPG" alt="AIGO T2 - 2" className="rounded shadow" />
            <img src="/DSC07012.JPG" alt="AIGO T2 - 3" className="rounded shadow" />
            <img src="/DSC07058.JPG" alt="AIGO T2 - 4" className="rounded shadow" />
            <img src="/DSC07081.JPG" alt="AIGO T2 - 5" className="rounded shadow" />
            <img src="/DSC07096.JPG" alt="AIGO T2 - 6" className="rounded shadow" />
          </div>
          <div className="text-left max-w-md mx-auto text-gray-800">
            <p><strong>Autonomie:</strong> 80–100 km (cu sarcină maximă)</p>
            <p><strong>Preț:</strong> 200 RON / zi</p>
            <p><strong>Locuri:</strong> 2</p>
            <p><strong>Sarcină admisă:</strong> 390 kg</p>
            <p><strong>Cutie:</strong> automată</p>
            <p><strong>Culoare:</strong> alb</p>
          </div>
        </section>

      </main>
    </div>
  );
}
