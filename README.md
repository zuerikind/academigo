# Academigo

Professionelle Landing Page für [Academigo.xyz](https://academigo.xyz) — digitale Lernschule mit persönlicher Nachhilfe und eigener Lernplattform.

**Sprachen:** Deutsch (`/de`) und English (`/en`). Siehe [TRANSLATIONS.md](TRANSLATIONS.md) für die Pflicht, alle neuen Texte in beiden Sprachen zu pflegen.

## Marken-Assets

Logo-Dateien liegen unter [`public/brand/`](public/brand/):

- `logo-icon.png` — Favicon, Header-Icon, kompakte Markenflächen
- `logo-full.png` — Footer, Open Graph / Social Preview, strukturierte Daten (`logo`)

Zum Aktualisieren: Dateien ersetzen, gleiche Dateinamen beibehalten. [`app/icon.png`](app/icon.png) und [`app/apple-icon.png`](app/apple-icon.png) sind Kopien des Icons für den Browser-Tab und iOS (bei Icon-Wechsel ebenfalls kopieren oder per Build-Skript synchronisieren).


- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Entwicklung

```bash
npm install
npm run dev
```

- Deutsch: [http://localhost:3000/de](http://localhost:3000/de)
- English: [http://localhost:3000/en](http://localhost:3000/en)
- `/` leitet auf `/de` weiter

## Inhalte bearbeiten

| Was | Dateien |
|-----|---------|
| **Alle UI-Texte (DE + EN)** | [`messages/de.ts`](messages/de.ts), [`messages/en.ts`](messages/en.ts) |
| Links, Feature-Flags | [`config/site.ts`](config/site.ts) |
| Preise (nur CHF-Beträge) | [`data/pricing.ts`](data/pricing.ts) |

CTAs (WhatsApp, Plattform, Beratung) in `config/site.ts`.

## Build

```bash
npm run build
npm run lint
```

## Geplante Erweiterungen

In `config/site.ts` unter `features` vorbereitet: Lehrerprofile, Standorte, Buchung, Stripe, Eltern-Dashboard, Teacher Matching, Plattform-Integration.
