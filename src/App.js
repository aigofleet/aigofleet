
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
      {/* Header fix */}
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
        {/* Despre */}
        <section id="despre" className="bg-background py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">{t.title}</h2>
          <p className="max-w-xl mx-auto text-gray-800 text-lg">
            {t.description}
          </p>
        </section>

        {/* Mașini */}
        <section id="masini" className="py-16 px-4 bg-white text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">{t.carsTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <div className="bg-gray-100 p-4 rounded shadow">
              <img src="https://via.placeholder.com/300x180?text=Renault+Zoe" alt="Renault Zoe" className="rounded mb-2" />
              <h3 className="font-semibold text-lg text-primary">Renault Zoe</h3>
              <p className="text-sm text-gray-600">Autonomie: 300km | 120 RON/zi</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <img src="https://via.placeholder.com/300x180?text=VW+e-Up" alt="VW e-Up" className="rounded mb-2" />
              <h3 className="font-semibold text-lg text-primary">VW e-Up</h3>
              <p className="text-sm text-gray-600">Autonomie: 260km | 110 RON/zi</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <img src="https://via.placeholder.com/300x180?text=Dacia+Spring" alt="Dacia Spring" className="rounded mb-2" />
              <h3 className="font-semibold text-lg text-primary">Dacia Spring</h3>
              <p className="text-sm text-gray-600">Autonomie: 230km | 95 RON/zi</p>
            </div>
          </div>
        </section>

        {/* Rezervare */}
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
              <option value="Renault Zoe">Renault Zoe</option>
              <option value="VW e-Up">VW e-Up</option>
              <option value="Dacia Spring">Dacia Spring</option>
            </select>
            <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:opacity-90">
              {t.send}
            </button>
          </form>
        </section>
      
        {/* Contact */}
        <section id="contact" className="bg-white py-16 px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">{lang === 'ro' ? 'Contact' : 'Contact'}</h2>
          <div className="max-w-xl mx-auto text-gray-700 space-y-3 text-sm leading-relaxed">
            <p><strong>{lang === 'ro' ? 'Adresă' : 'Address'}:</strong> Str. Santuhalm, nr. 35A, Deva, Romania</p>
            <p><strong>{lang === 'ro' ? 'Telefon' : 'Phone'}:</strong> 0726510963 / 0721329588</p>
            <p><strong>Email:</strong> <a href="mailto:aigofleet@gmail.com" className="text-primary hover:underline">aigofleet@gmail.com</a></p>
            <p><strong>{lang === 'ro' ? 'Program' : 'Working hours'}:</strong> {lang === 'ro' ? 'Luni–Sâmbătă, 8:00–18:00' : 'Monday–Saturday, 8:00–18:00'}</p>
          </div>
          <div className="mt-6">
            <iframe
              title="Locație AIGO"
              src="https://maps.google.com/maps?q=Str.%20Santuhalm,%20nr.%2035A,%20Deva,%20Romania&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full max-w-xl h-64 mx-auto rounded shadow"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white text-center text-sm py-4 mt-8">
          © AIGO {new Date().getFullYear()} – {lang === 'ro' ? 'Toate drepturile rezervate.' : 'All rights reserved.'}
        </footer>
      </main>
    
    </div>
  );
}
