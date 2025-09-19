# Calcul biomasa si carbon — PWA (v6.1: siglă în header, indicator offline, notificare update, UI mobil)

Noutăți v6.1:
- **Siglă** în partea stângă a header-ului, înainte de denumirea aplicației.
- Toate funcțiile din v6: indicator „Mod offline”, panou „Aplicația a fost actualizată – Reîncarcă”, UI mobil compact (butoane mici sub geolocație, listă arbori cu înălțime mai mare), foto + export ZIP, import/export, geolocație robustă, PWA offline.

## Publicare
- Recomandat: GitHub Pages (HTTPS). După upload, dacă nu vezi schimbările, reinstalează PWA-ul sau folosește panoul de update (va apărea automat la versiuni noi).

## Service Worker
- `CACHE_NAME = biomasa-cache-v6.1`
- Înregistrare în `index.html` cu `sw.js?v=6.1` (evită cache-ul vechi)
- `skipWaiting` + `clients.claim` pentru update rapid
