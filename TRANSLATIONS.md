# Bilingual content policy (DE + EN)

**From now on, every user-facing string in this project must exist in German and English.**

## Rules

1. **No hardcoded UI copy** in components, pages, or layouts. All text lives in [`messages/de.ts`](messages/de.ts) and [`messages/en.ts`](messages/en.ts).
2. **Keep both files in sync** — same keys, same structure. If you add a key in `de`, add the English equivalent in `en` in the same PR.
3. **Non-translatable data** (URLs, prices in CHF, feature flags) stays in [`config/`](config/) or [`data/`](data/) — but labels, descriptions, and CTAs still come from `messages/`.
4. **New sections or features** must ship with DE + EN before merge. Do not leave `TODO` placeholders in production copy.
5. **SEO & metadata** (`meta` in messages, `generateMetadata`) must be translated per locale.
6. **Accessibility strings** (`aria-label`, `alt`, button text) are part of translations — not optional.
7. **Mockups & demos** (e.g. dashboard preview text) use `dictionary.dashboard`, not inline strings.

## Locales

| Code | URL prefix | HTML `lang` |
|------|------------|---------------|
| `de` | `/de`       | `de-CH`       |
| `en` | `/en`       | `en`          |

Default locale: `de` (redirect from `/` → `/de`).

## How to add copy

1. Add the key to `messages/de.ts`.
2. Add the matching English string to `messages/en.ts`.
3. Use `getDictionary(locale)` in Server Components or pass `dict` props into Client Components.
4. Run `npm run build` — TypeScript ensures `en` matches the `Dictionary` type from `de`.

## Language switcher

The header links to `/de` and `/en` for the same page. When adding new routes, register them under `app/[locale]/` and update both message files.

## Review checklist

- [ ] Every new string added to `de.ts` and `en.ts`
- [ ] No German-only text left in TSX/CSS
- [ ] Navigation anchors unchanged (`#pricing`, `#subjects`, …) — labels differ, IDs stay locale-neutral
- [ ] `npm run build` passes
