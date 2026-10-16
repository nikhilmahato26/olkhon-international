# Olkhon International Consultants website

Single-page site for Olkhon International Consultants Pvt Ltd: study in Russia, Synergy University admissions, translation and attestation help for students, Russia visa and documentation services, and B2B partnerships.

Stack: React 18, Vite, TypeScript, Tailwind CSS v4, Motion (Framer Motion), Lucide, React Router, React Hook Form + Zod, React Helmet Async.

## Run

```bash
npm install
npm run dev       # local development
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
```

`dist/` is a static site. On hosts that serve a single-page app, send unknown routes to `index.html` so the 404 page renders.

## Where to edit content

| What | File |
| --- | --- |
| Phone numbers, email, WhatsApp, location, site URL | `src/config/business.ts` |
| Synergy authorization proof (scan or letter) | `src/config/business.ts`, `synergyAuthorization.proofImage` |
| Current Synergy intakes, deadlines, posters | `src/data/intakes.ts` |
| Study program cards | `src/data/programs.ts` |
| Service cards ("How we can assist you") | `src/data/services.ts` |
| Visa packages and prices (INR) | `src/data/visaServices.ts`, `BUSINESS_VISA_PACKAGES` / `TOURIST_VISA_PACKAGES` |
| Visa, immigration services and legal limits | `src/data/visaServices.ts` |
| Form dropdown options | `src/data/options.ts` |
| WhatsApp message templates | `src/utils/whatsapp.ts` |
| Colours, radius and type tokens (light + dark) | `src/index.css` |

Notes:

- **Intakes expire on their own.** The top-bar announcement and the "open" badges switch off after each intake's `closesOn` date. Add the next intake to `src/data/intakes.ts` when it is announced.
- **Visa prices** appear in the visa panels, in each package's WhatsApp message and in the search structured data. Edit them in one place: `src/data/visaServices.ts`. Only add package details the client has confirmed.
- **Site URL.** Set `business.siteUrl` (for example `https://www.example.com`, no trailing slash) once the domain is live. This turns on the canonical link and the Open Graph URL and image.
- **Authorization proof.** Put the image in `src/assets/images/`, import it in `src/config/business.ts`, and set `proofImage` and `proofCaption`. Until then, the Synergy section offers visitors a WhatsApp request for a copy.

## How enquiries work

There is no backend. Every form validates in the browser, then opens WhatsApp (+91 9746522897) with a pre-written message. An email option with the same text is offered as a fallback. Nothing is stored, so the site makes no data-storage claims. If a backend or CRM is added later, connect it in `src/hooks/useEnquirySubmit.ts`.

## Assets

- Logo and emblem were extracted from the supplied logo mockup (`src/assets/logo/`). Replace them with official vector files when available.
- The Synergy University posters were supplied by the client (`src/assets/images/synergy-*.jpg`).
- Photography is from Unsplash (Unsplash License).
