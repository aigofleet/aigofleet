require("dotenv").config();
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();

// ✅ Permitem atât localhost:3000 cât și Netlify
app.use(cors({
  origin: ["http://localhost:3000", "https://aigofleet.netlify.app"]
}));

app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

console.log("Stripe Secret Key:", process.env.STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
  const { car, email, price } = req.body;

  console.log("Date primite de la frontend:", req.body);

  if (!price || typeof price !== "number") {
    return res.status(400).json({ error: "Price invalid sau lipsă din request." });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "ron",
            product_data: { name: `Rezervare ${car}` },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "https://aigofleet.netlify.app/succes",
      cancel_url: "https://aigofleet.netlify.app/anulare",
    });

    console.log("✅ Sesiune Stripe creată:", session.url);
    res.json({ url: session.url });
  } catch (err) {
    console.error("Eroare Stripe:", err.message);
    res.status(500).json({ error: "Eroare Stripe: " + err.message });
  }
});

app.listen(4242, () => console.log("✅ Stripe backend running on http://localhost:4242"));