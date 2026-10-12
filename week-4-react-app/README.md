# Northstar People - Week 4 React App

A responsive team directory built with React and Vite for the Week 4 frontend assignment. It practices reusable components, props, list rendering, and interactive state. Most directory entries are fictional examples; the owner profile and Gmail contact action are personalized.

## Features

- Reusable functional components for the header, directory introduction, filters, people grid, person cards, and empty state
- Search by name, role, team, location, biography, or skill
- Team filter buttons and a reset action
- Light/dark theme toggle managed with React state
- Responsive layout for narrow phones, tablets, and desktop screens
- External CSS in `src/styles.css`; application modules and sample data are grouped under `src/`
- Keyboard focus styles, accessible button labels, and live result counts

## Project structure

```text
week-4-react-app/
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   ├── components/
│   │   ├── DirectoryControls.jsx
│   │   ├── DirectoryIntro.jsx
│   │   ├── EmptyState.jsx
│   │   ├── PeopleGrid.jsx
│   │   ├── PersonCard.jsx
│   │   └── SiteHeader.jsx
│   └── data/
│       └── people.js
└── README.md
```

## Run locally

Use Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Assignment checklist map

- `App.jsx` owns the search, selected team, and theme state with `useState`.
- `DirectoryControls` and `SiteHeader` receive data and event callbacks through props.
- `PeopleGrid` maps people into `PersonCard` components with each person's stable `id` as the React key.
- CSS media queries in `styles.css` adapt the hero and directory grid for phone, tablet, and desktop widths.

## Author

Favour Ludenyo
