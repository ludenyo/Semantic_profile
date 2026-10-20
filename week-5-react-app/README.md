# Week 5 — Kairos Logo Concepts

A responsive recreation of the Kairos Spatial Solutions logo concept board, followed by a controlled feedback form. Built with React, Vite, and Tailwind CSS.

## Features

- Three reusable concept cards with custom SVG marks and wordmarks
- Responsive palette and logo mark component sections
- Kairos palette colors and repeated design values defined in `tailwind.config.js`
- Controlled name, email, organization, concept select, contact radio group, message, and consent checkbox
- On-change validation with visible field errors and accessible error descriptions
- Submit stays disabled until every required value is valid
- Idle, submitting, success, and error feedback states
- Mobile-first layout with one, two, and three-column concept cards
- Utility classes in JSX; `src/index.css` contains only Tailwind's build directives

## Project structure

```text
week-5-react-app/
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components/
        ├── FormField.jsx
        └── InquiryForm.jsx
```

## Run locally

Use Node.js 20.19+ or 22.12+.

From the `Semantic_profile` repository root, run:

```bash
cd week-5-react-app
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

The feedback form is a frontend demonstration: successful validation displays a confirmation, but no data is sent or stored. The Kairos logo screenshot supplied with the assignment was used as the visual reference.
