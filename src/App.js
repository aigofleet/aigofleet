import React from "react";

function App() {
  return (
    <main className="font-sans bg-white text-gray-900">

      {/* Despre AIGO */}
      <section id="despre" className="bg-background py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Închiriază inteligent cu AIGO</h2>
        <p className="max-w-xl mx-auto text-gray-800 text-lg">
          AIGO este serviciul tău de închiriere pentru mașini electrice de oraș în Deva.
          Simplu, rapid și prietenos cu mediul. Potrivit pentru turiști și localnici.
        </p>
      </section>

      {/* Flota */}
      <section className="py-10 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Mașini disponibile</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

          {/* BAW PONY */}
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/IMG_9489.jpg" alt="BAW PONY" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">BAW PONY</h3>
            <p className="text-sm text-gray-600">Autonomie: 240 km | 150 RON/zi</p>
            <a href="#baw-pony" className="mt-2 text-sm text-primary hover:underline">
              Vezi detalii
            </a>
          </div>

          {/* AIGO M1 */}
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/IMG_1241.JPG" alt="AIGO M1" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">AIGO M1</h3>
            <p className="text-sm text-gray-600">Autonomie: 222 km | 150 RON/zi</p>
            <a href="#detalii-masini" className="mt-2 text-sm text-primary hover:underline">
              Vezi detalii
            </a>
          </div>

          {/* AIGO T2 */}
          <div className="bg-gray-100 p-4 rounded shadow flex flex-col items-center">
            <img src="/DSC06968.JPG" alt="AIGO T2" className="rounded mb-2 h-40 object-cover" />
            <h3 className="font-semibold text-lg text-primary">AIGO T2</h3>
            <p className="text-sm text-gray-600">Autonomie: 80–100 km | 200 RON/zi</p>
            <a href="#detalii-aigo-t2" className="mt-2 text-sm text-primary hover:underline">
              Vezi detalii
            </a>
          </div>

        </div>
      </section>

      {/* Rezervare */}
      <section id="rezervare" className="bg-background py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-8">Rezervă o mașină</h2>
        <form
          action="https://formsubmit.co/aigofleet@gmail.com"
          method="POST"
          className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4"
        >
          <input type="text" name="nume" placeholder="Nume complet" required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-2 border rounded" />
          <input type="date" name="data" required className="w-full p-2 border rounded" />
          <select name="masina" required className="w-full p-2 border rounded">
            <option value="">Selectează o mașină</option>
            <option value="BAW PONY">BAW PONY</option>
            <option value="AIGO M1">AIGO M1</option>
            <option value="AIGO T2">AIGO T2</option>
          </select>
          <button type="submit" className="bg-primary text-white py-2 px-4 rounded hover:opacity-90">
            Trimite rezervarea
          </button>
        </form>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-8">Contact</h2>
        <div className="max-w-xl mx-auto text-gray-700 space-y-3 text-sm leading-relaxed">
          <p><strong>Adresă:</strong> Str. Santuhalm, nr. 35A, Deva, Romania</p>
          <p><strong>Telefon:</strong> 0726510963 / 0721329588</p>
          <p><strong>Email:</strong> <a href="mailto:aigofleet@gmail.com" className="text-primary hover:underline">aigofleet@gmail.com</a></p>
          <p><strong>Program:</strong> Luni–Sâmbătă, 8:00–18:00</p>
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
        © AIGO {new Date().getFullYear()} – Toate drepturile rezervate.
      </footer>
    </main>
  );
}

export default App;