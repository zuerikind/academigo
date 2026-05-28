# Academigo

Professionelle Landing Page für [Academigo.xyz](https://academigo.xyz) — digitale Lernschule mit persönlicher Nachhilfe und eigener Lernplattform.

**Sprachen:** Deutsch (`/de`) und English (`/en`). Siehe [TRANSLATIONS.md](TRANSLATIONS.md) für die Pflicht, alle neuen Texte in beiden Sprachen zu pflegen.

## Marken-Assets

Logo-Dateien liegen unter [`public/brand/`](public/brand/):

- `logo-icon.png` — Favicon, Header-Icon, kompakte Markenflächen
- `logo-full.png` — Footer, Open Graph / Social Preview, strukturierte Daten (`logo`)

Zum Aktualisieren: Dateien ersetzen, gleiche Dateinamen beibehalten. [`app/icon.png`](app/icon.png) und [`app/apple-icon.png`](app/apple-icon.png) sind Kopien des Icons für den Browser-Tab und iOS (bei Icon-Wechsel ebenfalls kopieren oder per Build-Skript synchronisieren).

## Stack

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

## Deploy auf Vercel

Dieses Projekt ist bereit für Vercel (keine zusätzlichen Environment-Variablen erforderlich).

1. Repo auf GitHub verbunden lassen (`main`).
2. In Vercel: **Add New Project** -> `academigo` importieren.
3. Framework: **Next.js** (wird automatisch erkannt).
4. **Root Directory:** leer lassen (Repository-Root, nicht `app_academigo/`).
5. Build Command: `npm run build` (Default ok).
6. **Output Directory:** leer lassen — **nicht** `out` oder `public` setzen (sonst Vercel-`404 NOT_FOUND`).
7. Production Branch: `main`.
8. Domains: `academigo.xyz` und `www.academigo.xyz` dem **gleichen** Projekt zuweisen.
9. Deploy klicken.

**Live-URLs (nach Deploy):**

- https://www.academigo.xyz/de
- https://www.academigo.xyz/en
- `/` leitet auf `/de` weiter

### Vercel zeigt `404: NOT_FOUND`, obwohl der Deploy „Ready“ ist?

Das ist meist **kein** Next.js-404, sondern Vercel findet **keine Deployment-Ausgabe** für die aufgerufene Domain/URL.

| Prüfen | Erwartung |
|--------|-----------|
| **Root Directory** | leer (Projektroot mit `package.json` und `app/`) |
| **Output Directory** | leer (Next.js Server, kein Static Export) |
| **Framework** | Next.js |
| **Domain** unter *Settings → Domains* | `Valid Configuration`, zugewiesen zu diesem Projekt |
| **Visit**-Link | Production-Domain oder `*.vercel.app` aus **diesem** Projekt — nicht ein alter Preview-Link |
| **Production Branch** | `main` mit aktuellem Commit (`app/page.tsx` Redirect existiert) |

Nach Einstellungsänderungen: **Redeploy** (Deployments → … → Redeploy).

Optional via CLI:

```bash
npx vercel
```

Für Production:

```bash
npx vercel --prod
```

## Geplante Erweiterungen

In `config/site.ts` unter `features` vorbereitet: Lehrerprofile, Standorte, Buchung, Stripe, Eltern-Dashboard, Teacher Matching, Plattform-Integration.
