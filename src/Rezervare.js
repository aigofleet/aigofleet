import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [lang, setLang] = useState("ro");
  const [car, setCar] = useState("");
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [price, setPrice] = useState(0);
  const [garantie, setGarantie] = useState("standard");
  const [confirmMsg, setConfirmMsg] = useState("");
  const [consimtamant1, setConsimtamant1] = useState(false);
  const [consimtamant2, setConsimtamant2] = useState(false);
  const [consimtamant3, setConsimtamant3] = useState(false);


  const t = {
    title: "Închiriază inteligent cu AIGO",
    reserve: "Rezervă o mașină",
    submit: "Trimite rezervarea",
    dateStart: "Data început",
    dateEnd: "Data sfârșit",
    paymentMethod: "Metodă de plată",
    card: "Card",
    cash: "Cash la unitate"
  };

useEffect(() => {
  if (dataStart && dataEnd && car) {
    const days =
      (new Date(dataEnd) - new Date(dataStart)) / (1000 * 60 * 60 * 24) + 1;

    let rate = 150;
    if (car === "AIGO T2") rate = 200;

    let discount = 0;
    if (days > 15) discount = 30;
    else if (days > 6) discount = 20;

    let basePrice = Math.max(days, 0) * (rate - discount);

    // Calcul pentru garanție
    let garantieCost = 0;

    if (garantie === "extinsa") garantieCost = 50 * days;
    if (garantie === "premium") garantieCost = 100 * days;

    // Dacă e fără acoperire și peste 6 zile → +25%
    if (garantie === "standard" && days > 6) {
      basePrice = basePrice * 1.25;
    }

    const total = basePrice + garantieCost;
    setPrice(Math.round(total));
  }
}, [dataStart, dataEnd, car, garantie]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consimtamant1 || !consimtamant2 || !consimtamant3) {
    alert("Trebuie să confirmi toate cele 3 puncte înainte de a trimite rezervarea.");
    return;
    }
    const form = e.target;
    const formData = new FormData(form);

    const nume = formData.get("nume");
    const email = formData.get("email");
    const telefon = formData.get("telefon");
    const masina = formData.get("masina");
    const zile =
      (new Date(dataEnd) - new Date(dataStart)) / (1000 * 60 * 60 * 24) + 1;
    const tipGarantie = garantie;

    if (paymentMethod === "card") {
      try {
        const res = await fetch("http://localhost:4242/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, car: masina, price }),
        });
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          alert("Eroare la inițializarea plății.");
        }
      } catch (err) {
        console.error("Eroare la fetch:", err);
        alert("A apărut o eroare la conectarea cu serverul.");
      }
    } else {
      try {
        await emailjs.send(
          "service_ezznjce",
          "template_ca6o9vv",
          {
            nume,
            email,
	    telefon,
            masina,
            dataStart,
            dataEnd,
            zile,
            pret: price,
	    tipGarantie,
          },
          "0AYzL9_Wf0iCVRe7I"
        );
        setConfirmMsg("Rezervarea ta a fost trimisă! Te vom contacta în curând.");
        form.reset();
        setCar("");
        setPrice(0);
      } catch (err) {
        console.error("Eroare la trimiterea emailului:", err);
        alert("Nu s-a putut trimite emailul.");
      }
    }
  };

  return (
    <main className="font-sans bg-white text-gray-900">
      <section id="rezervare" className="bg-background py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-primary mb-8">{t.reserve}</h2>
	<img src="/aigo-logo.png" alt="AIGO logo" className="mx-auto mb-6 w-24" />
	<section className="py-6 px-4 text-center">
  	<h2 className="text-xl font-bold text-primary mb-2">Locații preluare mașini</h2>
  	<p className="text-gray-700 mb-3">După rezervare, poți prelua mașina din oricare dintre aceste locații:</p>
  	<ul className="space-y-2 text-sm text-blue-600 underline">
   	 <li><a href="https://maps.app.goo.gl/UBQnH7kzRC5pEVLKA" target="_blank" rel="noopener noreferrer">Locație 1 - Google Maps</a></li>
    	 <li><a href="https://maps.app.goo.gl/jeA3F2Sp2DTcU4Ta8" target="_blank" rel="noopener noreferrer">Locație 2 - Google Maps</a></li>
    	 <li><a href="https://maps.app.goo.gl/ecacoCiTYjDnZDWT7" target="_blank" rel="noopener noreferrer">Locație 3 - Google Maps</a></li>
  	</ul>
  </section>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4"
        >
          <input
            type="text"
            name="nume"
            placeholder="Nume complet"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-2 border rounded"
          />
	  <input
  	    type="tel"
            name="telefon"
            placeholder="Telefon"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="dataStart"
            required
            className="w-full p-2 border rounded"
            value={dataStart}
            onChange={(e) => setDataStart(e.target.value)}
          />
          <input
            type="date"
            name="dataEnd"
            required
            className="w-full p-2 border rounded"
            value={dataEnd}
            onChange={(e) => setDataEnd(e.target.value)}
          />
          <select
            name="masina"
            required
            className="w-full p-2 border rounded"
            value={car}
            onChange={(e) => setCar(e.target.value)}
          >
            <option value="">Selectează o mașină</option>
            <option value="BAW PONY">BAW PONY</option>
            <option value="AIGO M1">AIGO M1</option>
            <option value="AIGO T2">AIGO T2</option>
          </select>

<div className="text-left text-sm space-y-2 mt-4">
  <label className="font-semibold block mb-2">Alege tipul de garanție:</label>

  <label className="flex items-start space-x-2">
    <input
      type="radio"
      name="garantie"
      value="standard"
      checked={garantie === "standard"}
      onChange={() => setGarantie("standard")}
    />
    <span>
      <strong>FĂRĂ ACOPERIRE</strong><br />
      Riscul dumneavoastră în caz de daună sau furt este de 1000 lei.<br />
      La închirierile de peste 6 zile → 25% din valoarea totală a închirierii.
    </span>
  </label>

  <label className="flex items-start space-x-2">
    <input
      type="radio"
      name="garantie"
      value="extinsa"
      checked={garantie === "extinsa"}
      onChange={() => setGarantie("extinsa")}
    />
    <span>
      <strong>EXTINSĂ +50 lei/zi</strong><br />
      Riscul dumneavoastră în caz de daună sau furt este de 750 lei.
    </span>
  </label>

  <label className="flex items-start space-x-2">
    <input
      type="radio"
      name="garantie"
      value="premium"
      checked={garantie === "premium"}
      onChange={() => setGarantie("premium")}
    />
    <span>
      <strong>PREMIUM +100 lei/zi</strong><br />
      Riscul dumneavoastră în caz de daună sau furt este de 250 lei.
    </span>
  </label>
</div>

          <div className="text-left">
            <label className="font-semibold block mb-2">{t.paymentMethod}:</label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              <span className="ml-2">{t.card}</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
              />
              <span className="ml-2">{t.cash}</span>
            </label>
          </div>

          {price > 0 && (
            <div className="text-left font-semibold">Preț total: {price} lei</div>
          )}
{garantie && (
  <div className="text-left text-sm text-gray-700 mt-1">
    Garanție selectată:{" "}
    {garantie === "standard" && "FĂRĂ ACOPERIRE (0 lei/zi)"}
    {garantie === "extinsa" && "EXTINSĂ (50 lei/zi)"}
    {garantie === "premium" && "PREMIUM (100 lei/zi)"}
  </div>
)}

<div className="text-left text-sm space-y-2">
  <label className="inline-flex items-start space-x-2">
    <input
      type="checkbox"
      checked={consimtamant1}
      onChange={(e) => setConsimtamant1(e.target.checked)}
      required
    />
    <span> Confirmă că a citit și înțeles termenii de mai jos</span>
  </label>
  <label className="inline-flex items-start space-x-2">
    <input
      type="checkbox"
      checked={consimtamant2}
      onChange={(e) => setConsimtamant2(e.target.checked)}
      required
    />
    <span> Este de acord cu toate obligațiile și riscurile prevăzute</span>
  </label>
  <label className="inline-flex items-start space-x-2">
    <input
      type="checkbox"
      checked={consimtamant3}
      onChange={(e) => setConsimtamant3(e.target.checked)}
      required
    />
    <span> Înțelege că rezervarea nu poate fi finalizată fără acest consimțământ</span>
  </label>
</div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:opacity-90"
          >
            {t.submit}
          </button>

        {confirmMsg && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
            {confirmMsg}
          </div>
        )}

        </form>

<section className="mt-12 text-left max-w-3xl mx-auto text-sm text-gray-800 leading-relaxed">
  <h2 className="text-xl font-bold text-primary mb-4">TERMENI ȘI CONDIȚII – AIGO FLEET</h2>

  <h3 className="font-semibold mt-6">1. Eligibilitate și documente necesare</h3>
  <p>Clientul trebuie să aibă minim 18 ani și permis de conducere categoria B valabil, emis cu alfabet latin.</p>
  <p>La preluare sunt necesare: permis de conducere + act de identitate + card bancar (nu prepay).</p>
  <p>Cardul este folosit pentru blocarea garanției. Plata se poate face cu card de debit/credit sau numerar.</p>

  <h3 className="font-semibold mt-6">2. Condiții de utilizare</h3>
  <p>Închirierea este fără șofer, doar pentru utilizare urbană.</p>
  <ul className="list-disc pl-5 space-y-1">
    <li>să se circule cu bateria sub 10% (penalizare 1000€)</li>
    <li>fumatul în mașină (penalizare 50€ + curățare)</li>
    <li>transportul animalelor fără protecție</li>
    <li>folosirea în scop comercial, ridesharing, taximetrie, școală de șoferi, competiții sau transport ilegal</li>
    <li>intervenții tehnice sau modificări asupra autovehiculului</li>
  </ul>
  <p>Clientul trebuie să returneze mașina:</p>
  <ul className="list-disc pl-5 space-y-1">
    <li>în aceeași stare ca la livrare (conform fișei de predare)</li>
    <li>cu nivelul de încărcare inițial (în caz contrar: 1€/kWh)</li>
  </ul>

  <h3 className="font-semibold mt-6">3. Predare și returnare</h3>
  <p>Mașinile se preiau/predau doar în locațiile indicate pe site sau cu aprobare scrisă.</p>
  <p>Returnarea în alt loc fără acord → taxă de 250€.</p>
  <p>Predarea în afara programului sau fără semnarea fișei → clientul rămâne responsabil 24h.</p>
  <p>Dacă mașina este murdară la retur → taxă de administrare 50€ + spălare.</p>

  <h3 className="font-semibold mt-6">4. Răspundere și daune</h3>
  <p>Mașinile sunt asigurate RCA. Clientul este responsabil pentru:</p>
  <ul className="list-disc pl-5 space-y-1">
    <li>orice daună cauzată prin neglijență, utilizare greșită sau încălcarea regulilor</li>
    <li>deteriorarea anvelopelor, jantelor, caroseriei, interiorului, cablurilor</li>
    <li>folosirea incorectă a stațiilor de încărcare (daunele nu sunt acoperite de asigurare)</li>
  </ul>
  <p>În caz de accident:</p>
  <ul className="list-disc pl-5 space-y-1">
    <li>clientul trebuie să contacteze poliția și să completeze constatările cerute (amiabil/pv + RCA vinovat etc.)</li>
    <li>în lipsa documentelor corecte → clientul suportă integral daunele</li>
    <li>În caz de pierdere acte/chei → se percepe contravaloarea + 50€ taxă de administrare</li>
  </ul>

  <h3 className="font-semibold mt-6">5. Plata și anulare</h3>
  <p>Plata serviciilor se face în avans, la semnare.</p>
  <p>Orice sumă restantă se poate reține automat, cu notificare.</p>
  <p>Anulările se pot face cu minimum 24h înainte pentru rambursare integrală.</p>
  <p>Returnarea anticipată recalculată la prețul/zi efectiv și se poate compensa prin voucher.</p>

  <h3 className="font-semibold mt-6">6. Clauze speciale EV (vehicule electrice)</h3>
  <p>Încărcarea vehiculului se face cu cablul original livrat împreună cu mașina sau cu cabluri "Type 2" compatibile cu sistemul de încărcare al autovehiculului electric.</p>
  <p>Încărcarea se face doar la stații autorizate.</p>
  <p>Utilizarea altor cabluri, adaptoare sau metode neautorizate poate duce la deteriorarea sistemului electric.</p>
  <p>În astfel de cazuri, se va percepe o taxă de intervenție tehnică, iar costurile reparației vor fi suportate integral de client.</p>
  <p>Pierderea cablului de încărcare → penalizare 500€.</p>

  <h3 className="font-semibold mt-6">7. Acord final</h3>
  <ul className="list-disc pl-5 space-y-1">
    <li>✅ Confirmă că a citit și înțeles termenii de mai sus</li>
    <li>✅ Este de acord cu toate obligațiile și riscurile prevăzute</li>
    <li>✅ Înțelege că rezervarea nu poate fi finalizată fără acest consimțământ</li>
  </ul>
</section>



        {confirmMsg && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
            {confirmMsg}
          </div>
        )}
      </section>
    </main>
  );
}