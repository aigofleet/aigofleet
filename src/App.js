import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";




const CookieBanner = () => {
  const [accepted, setAccepted] = React.useState(localStorage.getItem("aigo_cookie_accepted"));

  const acceptCookies = () => {
    localStorage.setItem("aigo_cookie_accepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white text-sm p-4 flex flex-col sm:flex-row sm:justify-between items-center z-50">
      <span className="mb-2 sm:mb-0">Folosim cookies pentru a îmbunătăți experiența pe site. Continuarea navigării implică acceptul tău.</span>
      <button
        onClick={acceptCookies}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
      >
        Accept
      </button>
    </div>
  );
};










const translations = {
  ro: {
    title: "Închiriază inteligent cu AIGO",
    about: "AIGO este compania ta locală de rent a car urban. Închiriem mașini electrice eco, cu întreținere redusă și confort ideal pentru oraș.",
    available: "Mașini disponibile",
    contact: "Contact",
    reserve: "Rezervă o mașină",
    nav: { about: "Despre noi", cars: "Mașini", reserve: "Rezervare", contact: "Contact", lang: "EN" }
  },
  en: {
    title: "Rent smart with AIGO",
    about: "AIGO is your local urban rent-a-car service. We offer electric, eco-friendly cars with low maintenance, ideal for city mobility.",
    available: "Available Cars",
    contact: "Contact",
    reserve: "Book a Car",
    nav: { about: "About us", cars: "Cars", reserve: "Booking", contact: "Contact", lang: "RO" }
  }
};

export default function App() {
  const [lang, setLang] = useState("ro");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const browserLang = navigator.language.startsWith("en") ? "en" : "ro";
    setLang(browserLang);
  }, []);

  const toggleLang = () => setLang(lang === "ro" ? "en" : "ro");
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <main className="font-sans bg-white text-gray-900">
      <header className="border-b">
        <div className="flex justify-between items-center px-4 py-2">
          <h1 className="text-xl font-bold text-primary">AIGO</h1>
          <button className="md:hidden text-primary text-2xl" onClick={toggleMenu}>☰</button>
          <nav className="hidden md:flex space-x-4 text-sm">
            <a href="#despre" className="hover:underline">{t.nav.about}</a>
            <a href="#masini" className="hover:underline">{t.nav.cars}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
	    <a href="#termeni" className="hover:underline">Termeni si condiții</a>
            <Link to="/rezervare" className="bg-primary text-white px-3 py-1 rounded">{t.nav.reserve}</Link>
            <button onClick={toggleLang} className="underline text-primary">{t.nav.lang}</button>
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 px-4 pb-4 text-sm">
            <a href="#despre" className="hover:underline" onClick={toggleMenu}>{t.nav.about}</a>
            <a href="#masini" className="hover:underline" onClick={toggleMenu}>{t.nav.cars}</a>
            <a href="#contact" className="hover:underline" onClick={toggleMenu}>{t.nav.contact}</a>
            <Link to="/rezervare" className="bg-primary text-white px-3 py-1 rounded" onClick={toggleMenu}>{t.nav.reserve}</Link>
            <button onClick={() => { toggleLang(); toggleMenu(); }} className="underline text-primary">{t.nav.lang}</button>
          </div>
        )}
      </header>

      <section id="intro" className="bg-background py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">{t.title}</h2>
        <p className="max-w-xl mx-auto text-gray-800 text-lg">{t.about}</p>
      </section>

      <section className="text-center my-10 px-4">
        <Link to="/rezervare" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded shadow transform transition-transform duration-300 hover:scale-105 hover:bg-primary/90 w-full sm:w-auto">
          🚗 {t.reserve}
        </Link>
      </section>

      
      <section id="masini" className="py-10 text-center px-4">
        <h1 className="text-3xl font-bold text-primary mb-4">{t.available}</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/IMG_9489.jpg" alt="BAW PONY" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">BAW PONY</h3>
            <p className="text-sm text-gray-600">240 km | 150 RON/zi</p>
            <a href="#detalii-baw" className="mt-2 text-sm text-primary hover:underline">Detalii</a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/IMG_1241.JPG" alt="AIGO M1" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">AIGO M1</h3>
            <p className="text-sm text-gray-600">222 km | 150 RON/zi</p>
            <a href="#detalii-m1" className="mt-2 text-sm text-primary hover:underline">Detalii</a>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/DSC06968.JPG" alt="AIGO T2" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">AIGO T2</h3>
            <p className="text-sm text-gray-600">100 km | 200 RON/zi</p>
            <a href="#detalii-t2" className="mt-2 text-sm text-primary hover:underline">Detalii</a>
          </div>
        </div>
      </section>

      
      <section id="despre" className="bg-background py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Despre AIGO FLEET</h2>
        <p className="max-w-3xl mx-auto text-gray-800 text-lg leading-relaxed">
          AIGO FLEET este un serviciu modern de închirieri auto electrice, creat pentru cei care își doresc mobilitate rapidă, sustenabilă și accesibilă.<br /><br />
          Ne propunem să simplificăm accesul la vehicule electrice printr-o platformă intuitivă, transparentă și sigură.<br />
          Cu o flotă variată de mașini electrice și suport rapid, te ajutăm să ajungi unde ai nevoie, fără compromisuri.
        </p>
      </section>

      

      <section id="detalii-baw" className="bg-white py-12 px-4 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">BAW PONY</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
          Agil și eficient, BAW PONY e ideal pentru oraș:
<strong> 2 locuri</strong>, <strong>autonomie până la 240 km</strong>, <strong>încărcare rapidă</strong> — <strong>20 min DC</strong> sau <strong>60 min AC</strong>.<br />
Dotat cu <strong>camere 360°</strong>, <strong>navigație</strong> și <strong>screen mirroring</strong>.<br />
Perfect pentru trafic urban și parcări înguste. Ideal pentru cupluri sau navete scurte.
        </p>
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
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
          Confort urban cu AIGO M1:
<strong> 4 locuri</strong>, <strong>autonomie de 222 km</strong> și <strong>încărcare completă</strong> în <strong>20 min DC</strong> sau <strong>60 min AC</strong>.<br />
Spațios, eficient și prietenos cu orașul. Excelent pentru familii sau călătorii business eco.
        </p>
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
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-8">
          Util și compact – AIGO T2 pentru livrări urbane:
<strong> 1 loc</strong>, <strong>autonomie 100 km</strong>, <strong>sarcină utilă: 390 kg</strong>.<br />
Încărcare completă în <strong>20 min DC</strong> sau <strong>60 min AC</strong>.<br />
Ideal pentru firme, curieri sau transport urban eficient.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-4">
          <img src="/DSC06968.JPG" className="rounded shadow" />
          <img src="/DSC06992.JPG" className="rounded shadow" />
          <img src="/DSC07012.JPG" className="rounded shadow" />
          <img src="/DSC07058.JPG" className="rounded shadow" />
          <img src="/DSC07081.JPG" className="rounded shadow" />
          <img src="/DSC07096.JPG" className="rounded shadow" />
        </div>
      </section>


      <section className="text-center my-12 px-4">
        <Link to="/rezervare" className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded shadow transform transition-transform duration-300 hover:scale-105 hover:bg-primary/90 w-full sm:w-auto">
          🚘 {t.reserve}
        </Link>
      </section>

<section className="py-10 px-4 text-center">
  <h2 className="text-2xl font-bold text-primary mb-4">Locații preluare mașini</h2>
  <p className="text-gray-700 mb-4">După rezervare, poți prelua mașina din oricare dintre aceste locații:</p>
  <ul className="space-y-2 text-sm text-blue-600 underline">
    <li><a href="https://maps.app.goo.gl/UBQnH7kzRC5pEVLKA" target="_blank" rel="noopener noreferrer">Locație 1 - Google Maps</a></li>
    <li><a href="https://maps.app.goo.gl/jeA3F2Sp2DTcU4Ta8" target="_blank" rel="noopener noreferrer">Locație 2 - Google Maps</a></li>
    <li><a href="https://maps.app.goo.gl/ecacoCiTYjDnZDWT7" target="_blank" rel="noopener noreferrer">Locație 3 - Google Maps</a></li>
  </ul>
</section>


<section id="contact" className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-8">{t.contact}</h2>
        <div className="max-w-xl mx-auto text-gray-700 space-y-3 text-sm leading-relaxed">
          <p><strong>Adresă:</strong> Str. Santuhalm, nr. 35A, Deva, Romania</p>
          <p><strong>Telefon:</strong> 0728283251 / 0721329588</p>
          <p><strong>Email:</strong> <a href="mailto:office@aigofleet.com" className="text-primary hover:underline">office@aigofleet.com</a></p>
          <p><strong>Program:</strong> Luni–Sâmbătă, 8:00–18:00</p>
        </div>
        <div className="mt-6">
          <iframe title="Locație AIGO" src="https://maps.google.com/maps?q=Str.%20Santuhalm,%20nr.%2035A,%20Deva,%20Romania&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full max-w-xl h-64 mx-auto rounded shadow" loading="lazy"></iframe>
        </div>
      </section>

<section id="termeni" className="py-16 px-4 bg-gray-50 text-gray-800">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-primary mb-4">Termeni și Condiții</h2>
    <p className="mb-4">
      Înainte de a închiria un vehicul AIGO Fleet, te rugăm să citești cu atenție termenii și condițiile care guvernează utilizarea serviciului nostru.
    </p>
    <div className="text-left text-sm space-y-3">
      <p>✅ Clientul trebuie să aibă cel puțin 18 ani și permis categoria B valabil.</p>
      <p>✅ Închirierea este fără șofer, doar pentru utilizare urbană.</p>
      <p>✅ Este interzis fumatul în vehicul – se aplică taxă de igienizare.</p>
      <p>✅ Încărcarea se face doar cu cablul original – utilizarea altora atrage taxe tehnice.</p>
      <p>✅ Daunele, neglijența, utilizarea greșită sau lipsa documentelor legale atrag răspundere integrală.</p>
      <p>✅ Returnarea cu baterie sub nivelul inițial → taxă 1€/kWh.</p>
      <p>✅ Cablul pierdut → taxă 500€.</p>
      <p>✅ Detalii complete în pagina de rezervare și fișa de predare/preluare.</p>
    </div>
  </div>
</section>

<footer className="bg-primary text-white text-sm py-6 mt-12">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="flex items-center space-x-3">
      <img src="/favicon.ico" className="w-8 h-8" alt="logo" />
      <span className="font-semibold text-white">AIGO</span>
    </div>

    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 text-center md:text-left">
      <a href="#contact" className="hover:underline">{t.nav.contact}</a>
      <a href="#despre" className="hover:underline">{t.nav.about}</a>
      <a href="#masini" className="hover:underline">{t.nav.cars}</a>
      <a href="#termeni" className="hover:underline">Termeni și condiții</a>
      <span className="text-white/80">&copy; {new Date().getFullYear()} AIGO Fleet</span>
    </div>
  </div>
</footer>



<CookieBanner />



    </main>
  );
}
