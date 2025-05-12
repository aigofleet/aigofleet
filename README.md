# AIGO Fleet – Site React + Stripe + EmailJS

Acesta este un backup complet al versiunii funcționale a site-ului **AIGO Fleet**, salvat în mai 2025.

---

## ✅ Comenzi uzuale

### ▶️ Pornire locală (React dev server):
```bash
cd C:\Users\user1\Desktop\aigo-final-tailwind
npm start
```

### 🔧 Build pentru producție:
```bash
npm run build
```

---

## 🚀 Publicare pe Netlify (manual)
1. Rulezi `npm run build`
2. Intri pe https://app.netlify.com
3. Creezi un site nou (Deploy manually)
4. Tragi folderul `build/` în interfață

---

## 💳 Pornire backend Stripe local (pentru testare card):
```bash
cd C:\Users\user1\Desktop\aigo-final-tailwind\server
npm install
npm start
```

> Asigură-te că ai `.env` cu `STRIPE_SECRET_KEY=sk_test_...` în folderul `server/`.

---

## 🌐 GitHub (backup versiune cod)
```bash
git add .
git commit -m "Backup"
git push -u origin main
```

---

## ✅ Restaurare completă:
1. Clonezi repo:
```bash
git clone https://github.com/aigofleet/aigofleet.git
cd aigofleet
npm install
npm start
```

---

## 📂 Salvare locală rapidă
Creează un `.zip` din folderul `aigo-final-tailwind` și păstrează-l în cloud sau pe un stick.

---

## 🔗 Legături utile:
- Live site: [https://aigofleet.netlify.app](https://aigofleet.netlify.app)
- GitHub: [https://github.com/aigofleet/aigofleet](https://github.com/aigofleet/aigofleet)