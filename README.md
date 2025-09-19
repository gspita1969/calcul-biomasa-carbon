# Calcul biomasa si carbon — PWA (v5: foto + ZIP fotografii)

Noutăți v5:
- **Foto**: buton de captură/încărcare poză la fiecare arbore; imaginea este comprimată (max 1600 px, JPEG 85%) și stocată local.
- **Coloană Foto** în tabel (thumbnail).
- **Export fotografii (ZIP)**: creează un ZIP cu toate pozele în folderul `images/` + `data.csv` cu metadatele (parcela, specie, DBH, H, CO₂ etc.).
  - La prima folosire, se încarcă din CDN biblioteca **JSZip**.
- Păstrează fix-urile de geolocație mobile (HTTPS/localhost, fallback watchPosition etc.) introduse în v4.

## Rulare
1. Rulează local: `python -m http.server 8080` sau `npx serve`.
2. Recomandat: publică pe **HTTPS** (GitHub Pages) pentru geolocație pe mobil.

## Import fișiere
- Acceptă `.xlsx/.xls` (via SheetJS din CDN) și `.csv` (offline), antete tolerante (`Parcela`, `Specia`, `Diametru_cm`/`DBH_cm`, `Inaltime_m`/`H_m`, `Lat`, `Lon`).

## Observații
- Fotografiile sunt re-salvate ca `.jpg` în ZIP. Poți controla calitatea și dimensiunea din variabilele `maxDim` și `quality` din cod.
