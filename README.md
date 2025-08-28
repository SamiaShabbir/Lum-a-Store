# Lumea Store — High‑Performance E‑Commerce Demo (Next.js)


[![Next.js](https://img.shields.io/badge/Next.js-Framework-black?logo=nextdotjs)](#)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#)


**Live Demo:** https://lumea-store.vercel.app/


> A high‑performance application focused on **speed** and **efficiency**, featuring real‑time‑feel data processing and lightning‑fast user interactions. This is a **portfolio demo** built with **Next.js** using **dummy data** (no backend).


---


## ✨ Features
- ⚡ **Instant UX**: snappy navigation, optimistic cart updates, skeleton loaders
- 🗂️ **Modern App Router** (Next.js)
- 📱 **Responsive**: mobile → desktop
- 🧪 **Dummy data**: zero env setup
- ♿ **A11y‑aware** components


> “Real‑time” behavior is simulated on the client; swapping to a live API or sockets is straightforward (see **Going Real‑Time**).


---


## 🧰 Tech Stack
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS (or CSS Modules)
- **Lang:** JavaScript/TypeScript
- **Deploy:** Vercel


---


## 🚀 Quick Start
```bash
# 1) Clone
git clone https://github.com/SamiaShabbir/Lum-a-Store.git
cd <Lum-a-Store>


# 2) Install
npm i # or: pnpm i / yarn


# 3) Dev
npm run dev
# open http://localhost:3000


# 4) Build
npm run build && npm start

📦 Project Structure
.
├─ app/
│ ├─ layout.tsx
│ ├─ page.tsx # Home
│ └─ (routes)/ # e.g. products/, cart/
├─ components/ # UI building blocks
├─ data/ # Dummy JSON (products, etc.)
├─ lib/ # utils (format, filters)
├─ public/
│ └─ readme/ # screenshots for this README
├─ styles/
├─ package.json
└─ README.md

🧪 Dummy Data

Example data/products.json item:
{
"id": "p_001",
"title": "Lumea Wireless Headphones",
"price": 149.99,
"currency": "USD",
"rating": 4.7,
"images": ["/images/headphones-1.jpg", "/images/headphones-2.jpg"],
"tags": ["audio", "wireless"],
"description": "Crisp sound with noise isolation.",
"stock": 32
}

🏎️ Performance Notes

Route prefetching & code splitting (Next.js)

Lazy images via next/image

Memoization (memo, useMemo, useCallback) for heavy UI

Lightweight client state for cart

Run Lighthouse in DevTools and add scores here for social proof.

🔌 Going Real‑Time (Optional)

Implement API routes in app/api/* and fetch with SSR/CSR

Add WebSockets (Socket.IO) or SSE for live updates

Tune caching with ISR or fetch({ cache: 'no-store' })

👤 Author

Samia Shabbir (Synterion Solutions)
Portfolio: https://synterion-solutions.vercel.app/
Email: <info.synterionsolutions@gmail.com>