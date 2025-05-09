require("dotenv").config();
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
  const { car, email, price } = req.body;

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

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4242, () => console.log("✅ Stripe backend running on http://localhost:4242"));