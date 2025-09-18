# Calcul biomasa si carbon — PWA (v4: geolocație fix pentru Android/iPhone)

Această versiune îmbunătățește geolocația pe mobil:
- Verifică **contextul securizat** (HTTPS / localhost). Pe Android/iOS, geolocația este blocată în pagini HTTP din rețea locală (ex.: `http://192.168.x.x`).
- **Buton dedicat** + secvență robustă: `getCurrentPosition` (high accuracy) → `watchPosition` fallback → `getCurrentPosition` (low accuracy, timeout mai mare).
- Mesaje explicite de permisiuni și pași pentru Android/iOS dacă accesul este refuzat.
- **Comutator „Introdu manual”** face editabile câmpurile Lat/Lon dacă hardware-ul/permisiunile nu sunt disponibile.

## Recomandări pentru producție
1. Publică aplicația pe **HTTPS** (ex.: GitHub Pages). Alternativ, folosește un tunel HTTPS (ex.: ngrok) sau un server local cu certificat (mkcert).
2. Pe **Android/Chrome**: acordă permisiunea de locație pentru site (apasă pe iconița lacăt → Permisiuni → Locație → Permite). Verifică și setarea telefonului: Settings → Location → App permissions → Chrome/Browser.
3. Pe **iPhone/iOS (Safari sau PWA instalată)**: Settings → Privacy & Security → Location Services → Safari (While Using) și **Precise Location ON**. Pentru PWA: Settings → [numele aplicației] → Location → While Using.

## Rulare locală
- Python: `python -m http.server 8080`
- Node: `npx serve`
- Deschide pe **același dispozitiv** la `http://localhost:8080` (funcționează). Dacă accesezi de pe un **telefon în rețeaua locală** la `http://IP:8080`, geolocația va fi **blocată** – folosește **HTTPS**.

Restul funcționalităților: import XLSX/CSV, export, KPI-uri, salvare locală, PWA offline, rămân neschimbate.
