import React, { useState, useEffect } from "react";

const translations = {
  ro: {
    title: "Închiriază inteligent cu AIGO",
    about: "AIGO este compania ta locală de rent a car urban. Închiriem mașini electrice eco, cu întreținere redusă și confort ideal pentru oraș.",
    available: "Mașini disponibile",
    details: "Vezi detalii",
    reserve: "Rezervă o mașină",
    submit: "Trimite rezervarea",
    contact: "Contact",
    nav: { about: "Despre noi", cars: "Mașini", reserve: "Rezervare", contact: "Contact", lang: "EN" }
  },
  en: {
    title: "Rent smart with AIGO",
    about: "AIGO is your local urban rent-a-car service. We offer electric, eco-friendly cars with low maintenance, ideal for city mobility.",
    available: "Available Cars",
    details: "See details",
    reserve: "Book a Car",
    submit: "Send Booking",
    contact: "Contact",
    nav: { about: "About us", cars: "Cars", reserve: "Booking", contact: "Contact", lang: "RO" }
  }
};

export default function App() {
  const [lang, setLang] = useState("ro");
  const t = translations[lang];

  useEffect(() => {
    const browserLang = navigator.language.startsWith("en") ? "en" : "ro";
    setLang(browserLang);
  }, []);

  const toggleLang = () => setLang(lang === "ro" ? "en" : "ro");

  return (
    <main className="font-sans bg-white text-gray-900">
      <header className="flex justify-between items-center px-4 py-2 border-b">
        <h1 className="text-xl font-bold text-primary">AIGO</h1>
        <nav className="space-x-4 text-sm">
          <a href="#despre" className="hover:underline">{t.nav.about}</a>
          <a href="#masini" className="hover:underline">{t.nav.cars}</a>
          <a href="#rezervare" className="hover:underline">{t.nav.reserve}</a>
          <a href="#contact" className="hover:underline">{t.nav.contact}</a>
          <button onClick={toggleLang} className="ml-2 underline text-primary">{t.nav.lang}</button>
        </nav>
      </header>

      <section id="intro" className="bg-background py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">{t.title}</h2>
        <p className="max-w-xl mx-auto text-gray-800 text-lg">{t.about}</p>
      </section>

      <section id="masini" className="py-10 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">{t.available}</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/IMG_9489.jpg" alt="BAW PONY" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">BAW PONY</h3>
            <p className="text-sm text-gray-600">240 km | 150 RON/zi</p>
            <a href="#detalii-baw" className="mt-2 text-sm text-primary hover:underline">{t.details}</a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/IMG_1241.JPG" alt="AIGO M1" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">AIGO M1</h3>
            <p className="text-sm text-gray-600">222 km | 150 RON/zi</p>
            <a href="#detalii-m1" className="mt-2 text-sm text-primary hover:underline">{t.details}</a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/DSC06968.JPG" alt="AIGO T2" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">AIGO T2</h3>
            <p className="text-sm text-gray-600">100 km | 200 RON/zi</p>
            <a href="#detalii-t2" className="mt-2 text-sm text-primary hover:underline">{t.details}</a>
          </div>
        </div>
      </section>

      {/* Detalii și galerii */}
      <section id="detalii-baw" className="bg-white py-12 px-4 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">BAW PONY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-4">
          <img src="/IMG_9489.jpg" className="rounded shadow" />
          <img src="/IMG_9492.jpg" className="rounded shadow" />
          <img src="/IMG_9515.jpg" className="rounded shadow" />
          <img src="/NO2.jpg" className="rounded shadow" />
          <img src="/NO4.jpg" className="rounded shadow" />
          <img src="/NO5.jpg" className="rounded shadow" />
        </div>
      </section>

      <section id="detalii-m1" className="bg-white py-12 px-4 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">AIGO M1</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-4">
          <img src="/IMG_1241.JPG" className="rounded shadow" />
          <img src="/IMG_1261.JPG" className="rounded shadow" />
          <img src="/IMG_1265.JPG" className="rounded shadow" />
          <img src="/IMG_1311.JPG" className="rounded shadow" />
          <img src="/IMG_1366.JPG" className="rounded shadow" />
          <img src="/IMG_1286.JPG" className="rounded shadow" />
        </div>
      </section>

      <section id="detalii-t2" className="bg-white py-12 px-4 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">AIGO T2</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-4">
          <img src="/DSC06968.JPG" className="rounded shadow" />
          <img src="/DSC06992.JPG" className="rounded shadow" />
          <img src="/DSC07012.JPG" className="rounded shadow" />
          <img src="/DSC07058.JPG" className="rounded shadow" />
          <img src="/DSC07081.JPG" className="rounded shadow" />
          <img src="/DSC07096.JPG" className="rounded shadow" />
        </div>
      </section>

      <section id="rezervare" className="bg-background py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-8">{t.reserve}</h2>
        <form action="https://formsubmit.co/aigofleet@gmail.com" method="POST" className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
          <input type="text" name="nume" placeholder="Nume complet" required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-2 border rounded" />
          <input type="date" name="data" required className="w-full p-2 border rounded" />
          <select name="masina" required className="w-full p-2 border rounded">
            <option value="">Selectează o mașină</option>
            <option value="BAW PONY">BAW PONY</option>
            <option value="AIGO M1">AIGO M1</option>
            <option value="AIGO T2">AIGO T2</option>
          </select>
          <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:opacity-90">{t.submit}</button>
        </form>
      </section>

      
<section id="despre" className="bg-background py-16 px-4 text-center">
  <h2 className="text-3xl font-bold text-primary mb-4">Despre AIGO FLEET</h2>
  <p className="max-w-3xl mx-auto text-gray-800 text-lg leading-relaxed">
    AIGO FLEET este un serviciu modern de închirieri auto electrice, creat pentru cei care își doresc mobilitate rapidă, sustenabilă și accesibilă.
    <br /><br />
    Ne propunem să simplificăm accesul la vehicule electrice printr-o platformă intuitivă, transparentă și sigură.
    Cu o flotă variată de mașini electrice și suport rapid, te ajutăm să ajungi unde ai nevoie, fără compromisuri.
  </p>
</section>

<section id="contact" className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-8">{t.contact}</h2>
        <div className="max-w-xl mx-auto text-gray-700 space-y-3 text-sm leading-relaxed">
          <p><strong>Adresă:</strong> Str. Santuhalm, nr. 35A, Deva, Romania</p>
          <p><strong>Telefon:</strong> 0728283251 / 0721329588</p>
          <p><strong>Email:</strong> <a href="mailto:aigofleet@gmail.com" className="text-primary hover:underline">aigofleet@gmail.com</a></p>
          <p><strong>Program:</strong> Luni–Sâmbătă, 8:00–18:00</p>
        </div>
        <div className="mt-6">
          <iframe title="Locație AIGO" src="https://maps.google.com/maps?q=Str.%20Santuhalm,%20nr.%2035A,%20Deva,%20Romania&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full max-w-xl h-64 mx-auto rounded shadow" loading="lazy"></iframe>
        </div>
      </section>

      <footer className="bg-primary text-white text-sm py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/favicon.ico" className="w-8 h-8" alt="logo" />
            <span className="font-semibold text-white">AIGO</span>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
            <a href="#despre" className="hover:underline">{t.nav.about}</a>
            <a href="#masini" className="hover:underline">{t.nav.cars}</a>
            <a href="#rezervare" className="hover:underline">{t.nav.reserve}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}