# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

- Placeholder for upcoming changes and planned features

## Planned

---

## [2.0.0] – 2026-01-12

### Added

- Slutfört samtliga huvudsidor: `Start`, `Nyheter`, `Shop`,
  produktsidor (`Pennor`, `Förvaring`, `Papper`), `Om oss` och `Kontakt`

- Ersatt placeholder-innehåll med verkligt, varumärkesanpassat
  innehåll (texter och bilder för Proffs & Papper). Alla bilder har AI-genererats.

### Notes

- All HTML-kod och CSS-kod har validerats med `https://validator.w3.org/` och `https://jigsaw.w3.org/css-validator/validator`

---

## [1.0.1] – 2026-01-10

### Added

- Lagt till tydlig undermeny-indikator (pil) i huvudnavigeringen som automatiskt visas för menyval med underliggande sidor, anpassad för både mobil och desktop.

---

## [1.0.0] – 2026-01-08

### Added

- Implementerat tillgänglig mobilmeny och `submenu` med stöd för både klick och tangentbordsnavigering

- Implementerat fungerande `submenu` för desktop (`hover` och `:focus-within`)

- Lagt till “Hoppa till innehåll”-länk samt “Till toppen”-länk för förbättrad tangentbordsnavigering

- Infört tydliga fokusmarkeringar och mobilvänliga klickytor för hamburgermeny och footer-ikoner

### Changed

- Omstrukturerat CSS till en tydlig hierarki: design tokens → base → a11y/utilities → layout → components → media queries

- Standardiserat layouten så att `.l-wrapper` är gemensam “single source of truth” för horisontell `padding` och `max-width` mellan `header`, `main` och `footer`

- Förbättrat navigationens semantik och beteende genom användning av `aria-expanded` och `aria-controls`

- Förbättrat footer-layout (`payments` och `trust`-information) för bättre användbarhet på mobil och desktop

### Fixed

Säkerställt att interaktiva element uppfyller rekommenderade minimimått för pekskärmar

---

## [0.0.2] – 2025-12-16

- Skapat css-foldrar för `base`, `layout`, `styles` samt `components`/`pages`/`sections` som jag kommer använda för den statiska siten och sedan slå ihop dessa till uppgift 4.2.
- Uppdaterad favicons för 16x16, 32x32, 180x180, 192x192
- Ändrat <html lang="sv">
- Rensat bort SEO meta eftersom det är meningen att SEO plugin ska installeras för uppgift 4.2

---

## [0.0.1] – 2025-11-25

### Added

- Grundläggande filstruktur för den statiska webbplatsen skapad
- Alla huvudsidor skapade med grundlayout, navigation och footer
- Enhetlig första version av header- och footer på samtliga sidor
- Tomma (dummy) bildfiler för att planera för framtida grafik
- Första versionen av responsiv CSS implementerad

---

## Legend

- **Added**: new features or components
- **Changed**: updates to existing behavior
- **Deprecated**: soon-to-be removed features
- **Removed**: deprecated features now gone
- **Fixed**: bug fixes
- **Security**: security-related fixes or enhancements
- **Notes**: related comments, limitations, or clarifications
