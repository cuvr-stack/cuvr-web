# CUVR — VR Physiotherapy

Marketing site for CUVR, a fictional VR physiotherapy clinic. Built with
**Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Pages

- `/` — Home ("Recovery, Reimagined")
- `/how-it-works` — How It Works ("Rehab, Redefined")
- `/services` — Specialized VR Therapy Pathways
- `/booking` — Request a Consultation (form with client-side validation)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project layout

```
app/
  layout.tsx             # Root layout + global font
  globals.css            # Tailwind directives + a few base styles
  page.tsx               # Home
  how-it-works/page.tsx
  services/page.tsx
  booking/page.tsx
components/
  Header.tsx             # Shared top nav
  Footer.tsx             # Shared footer
  BookingForm.tsx        # Client form with validation
```

Images in the mockups are represented by styled gradient placeholders with
SVG icons so the project runs with no external image dependencies.
