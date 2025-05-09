import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [lang, setLang] = useState("ro");
  const [car, setCar] = useState("");
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [price, setPrice] = useState(0);
  const [confirmMsg, setConfirmMsg] = useState("");

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

      const total = Math.max(days, 0) * (rate - discount);
      setPrice(total);
    }
  }, [dataStart, dataEnd, car]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const nume = formData.get("nume");
    const email = formData.get("email");
    const masina = formData.get("masina");
    const zile =
      (new Date(dataEnd) - new Date(dataStart)) / (1000 * 60 * 60 * 24) + 1;

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
            masina,
            dataStart,
            dataEnd,
            zile,
            pret: price,
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

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:opacity-90"
          >
            {t.submit}
          </button>
        </form>

        {confirmMsg && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
            {confirmMsg}
          </div>
        )}
      </section>
    </main>
  );
}