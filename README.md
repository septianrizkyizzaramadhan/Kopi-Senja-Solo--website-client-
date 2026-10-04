<div align="center">

# Kopi Senja Solo

**Landing page modern & hangat untuk kedai kopi di jantung Surakarta.**

Setiap senja punya cerita — dan website ini adalah salah satunya.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-2f1810?style=flat-square)](#lisensi)

</div>

---

## Tentang

**Kopi Senja Solo** adalah landing page satu halaman yang dirancang untuk kedai kopi di Jalan Slamet Riyadi, Surakarta. Website ini bertujuan untuk:

- Menampilkan menu unggulan beserta harga
- Menunjukkan suasana kedai lewat galeri foto
- Memudahkan pelanggan menghubungi via WhatsApp
- Menampilkan lokasi & jam buka dengan Google Maps
- Menjadi wajah digital di samping Instagram

Proyek ini dibangun sebagai **static site** — tanpa backend, tanpa database, tanpa autentikasi. Ringan, cepat, dan mudah di-deploy.

---

## Fitur

| Section | Deskripsi |
|---|---|
| **Navbar** | Sticky, transparan di hero, mobile-friendly dengan toggle menu |
| **Hero** | Full-screen, headline editorial, CTA WhatsApp & Maps |
| **Tentang** | Cerita kedai + jam buka & lokasi |
| **Menu Unggulan** | 6 item dengan kategori, deskripsi, dan harga |
| **Keunggulan** | 4 poin pembeda kedai |
| **Galeri** | Grid foto suasana kedai (masonry-style) |
| **Testimoni** | 3 kartu testimoni pelanggan |
| **Lokasi** | Alamat, jam buka, embed Google Maps |
| **CTA WhatsApp** | Section khusus untuk mendorong konversi |
| **Footer** | Kontak lengkap: WA, Instagram, Maps, jam buka |

Semua CTA WhatsApp terhubung ke nomor yang sama dengan pesan pre-filled.

---

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon set

Tanpa state management library, tanpa router, tanpa animasi library — sengaja minimal biar bundle kecil dan maintainable.

---

## Design Direction

| Token | Nilai | Fungsi |
|---|---|---|
| `coffee-800` | `#653620` | Primary (button, heading) |
| `coffee-950` | `#2f1810` | Dark background |
| `cream` | `#faf6f0` | Base background |
| `charcoal` | `#1c1815` | Body text |
| `caramel` | `#c08552` | Accent (eyebrow, highlight) |

**Tipografi:**
- **Playfair Display** — display font (heading, editorial)
- **Inter** — body font (readability)

**Prinsip:** hangat, editorial, generous whitespace, animasi ringan (IntersectionObserver + CSS transition).

---

## Struktur Project

```
kopi-senja-solo/
├── public/
│   └── images/                    # (kosong — asset dari client nanti)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Container.jsx
│   │       ├── Heading.jsx
│   │       ├── Section.jsx
│   │       ├── SectionHeading.jsx
│   │       └── index.js
│   ├── data/
│   │   └── site.js                # Semua info bisnis & konten
│   ├── hooks/
│   │   └── useReveal.js           # Scroll reveal animation
│   ├── lib/
│   │   ├── cn.js                  # className helper
│   │   └── wa.js                  # WhatsApp & Maps link builders
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Advantages.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Location.jsx
│   │   └── CTA.jsx
│   ├── styles/
│   │   └── index.css              # Tailwind directives + custom layers
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

**Prinsip arsitektur:**
- `data/site.js` adalah single source of truth — semua konten bisnis ada di sini, gak hardcoded di JSX
- `sections/` untuk blok halaman (one file per section)
- `components/ui/` untuk primitive reusable
- `lib/wa.js` centralize builder URL WhatsApp & Maps

---

## Cara Menjalankan

### Prasyarat
- **Node.js** ≥ 18
- **npm** ≥ 9

### Install

```bash
git clone <repo-url>
cd kopi-senja-solo
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173).

**Test di HP (satu WiFi):**

```bash
npm run dev -- --host
```

Buka URL `Network:` yang muncul di terminal dari browser HP. Hanya test di WiFi yang kamu percaya.

### Build

```bash
npm run build
```

Output ada di `dist/`. Preview:

```bash
npm run preview
```

---

## Konfigurasi Konten

Semua konten bisnis ada di `src/data/site.js`. Cukup ubah satu file, seluruh halaman ikut berubah:

```js
export const siteConfig = {
  name: 'Kopi Senja Solo',
  description: '...',
  address: 'Jalan Slamet Riyadi, Surakarta',
  whatsapp: '6281234567890',
  instagram: 'kopisenjasolo',
  mapsQuery: 'Jalan Slamet Riyadi, Surakarta',
  hours: 'Setiap hari, 10.00 – 22.00 WIB',
}
```

Menu, testimoni, dan galeri juga ada di file yang sama (`menuItems`, `testimonials`, `gallery`).

---

## Checklist Sebelum Launch

- [ ] **Testimoni asli** — ganti placeholder dengan testimoni nyata + nama + profesi
- [ ] **Foto asli** — ganti URL Unsplash dengan foto kedai & menu asli (min 1600px, ≤300KB, format WebP/JPG)
- [ ] **Google Maps pin** — ganti `mapsQuery` dengan koordinat / link share presisi
- [ ] **Favicon** — tambahkan `favicon.svg` di `public/` dan link di `index.html`
- [ ] **OG meta tags** — untuk preview share di WhatsApp & Instagram
- [ ] **Test di mobile** — buka di HP, cek semua tombol & link
- [ ] **Cek console** — pastikan gak ada error/warning di browser console
- [ ] **Deploy** — ke Vercel / Netlify / hosting pilihan

---

## Deploy

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Ikuti prompt, dalam 1 menit dapat URL live. Push ke GitHub → auto-deploy setiap commit.

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

Atau connect repo GitHub langsung di dashboard Netlify:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## Catatan Keamanan

`npm audit` akan menunjukkan beberapa vulnerability (braces, esbuild) yang berasal dari **dev dependencies** Tailwind & Vite. Ini:

- Tidak masuk ke production build — hanya ada di tooling development
- Tidak exploitable di lingkungan lokal dengan `host: '127.0.0.1'`
- **Jangan jalankan `npm audit fix --force`** — akan upgrade Tailwind ke v4 & Vite ke v8, breaking change besar

Tunggu sampai Tailwind/braces merilis patch resmi sebelum upgrade.

---

## Lisensi

MIT © 2025 Kopi Senja Solo

---

<div align="center">

**Dibuat dengan hangat oleh Septian Rizky (Rephy).**

</div>