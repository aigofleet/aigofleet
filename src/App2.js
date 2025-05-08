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

  const handlePayment = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const car = formData.get("masina");

    const res = await fetch("https://aigofleet-backend.onrender.com/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, car }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Eroare la inițializarea plății.");
    }
  };

  return (
    <main className="font-sans bg-white text-gray-900">
      {/* Păstrează aici restul componentelor site-ului tău exact cum le aveai înainte */}
      <section id="rezervare" className="bg-background py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-8">{t.reserve}</h2>
        <form onSubmit={handlePayment} className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
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
    </main>
  );
}