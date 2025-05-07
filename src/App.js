
import React from "react";

function App() {
  return (
    <main className="font-sans bg-white text-gray-900">
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
            <p className="text-sm text-gray-600">Autonomie: 222km | 150 RON/zi</p>
            <a href="#detalii-masini" className="mt-2 text-sm text-primary hover:underline">
              Vezi detalii
            </a>
          </div>

          {/* AIGO T2 */}
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

      {/* Detalii BAW PONY */}
      <section id="baw-pony" className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">BAW PONY – Detalii și Galerie</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          BAW PONY este o alegere modernă, eco și accesibilă. Perfectă pentru oraș, are autonomie urbană de până la 240 km și un design atractiv cu 3 uși și 2 locuri.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <img src="/IMG_9489.jpg" className="rounded shadow" />
          <img src="/IMG_9492.jpg" className="rounded shadow" />
          <img src="/IMG_9515.jpg" className="rounded shadow" />
          <img src="/IMG_9534.jpg" className="rounded shadow" />
          <img src="/NO2.jpg" className="rounded shadow" />
          <img src="/NO7.jpg" className="rounded shadow" />
        </div>
        <div className="text-left max-w-md mx-auto text-gray-800">
          <p><strong>Autonomie:</strong> 240 km urban</p>
          <p><strong>Preț:</strong> 150 RON / zi</p>
          <p><strong>Uși:</strong> 3</p>
          <p><strong>Locuri:</strong> 2</p>
          <p><strong>Culoare:</strong> alb</p>
        </div>
      </section>
    </main>
  );
}

export default App;
