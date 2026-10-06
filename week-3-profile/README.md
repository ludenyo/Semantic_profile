# Responsive Profile Portfolio — Week 3

The Week 3 version continues the responsive semantic profile page from Week 2 and adds JavaScript interactions, live GitHub profile data, and a saved theme preference.

## Features

- Responsive mobile, tablet, and desktop layouts
- Semantic page sections and accessible in-page navigation
- Dark and light theme toggle, with the selected theme saved in `localStorage`
- GitHub profile data fetched from the public GitHub User API with async/await
- Loading, success, and error states for the API section
- Dynamic profile rendering with DOM methods and `textContent`
- External JavaScript in `main.js`; no inline event handlers
- External styles in `styles.css`, linked from the HTML document
- Profile photo stored in the `assets/` folder

## Project structure

```text
week-3-profile/
├── index.html
├── styles.css
├── main.js
├── README.md
├── assets/
│   └── favour-ludenyo.jpeg
└── screenshots/
    ├── mobile-375px.png
    ├── tablet-768px.png
    └── desktop-1024px.png
```

## Run the project

Open the folder in VS Code and use Live Server, or run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`. The live profile section needs an internet connection. The screenshots folder contains the responsive viewport captures carried over from Week 2.

## Author

Favour Ludenyo

GitHub: [@ludenyo](https://github.com/ludenyo)  
LinkedIn: [Favour Ludenyo](https://www.linkedin.com/in/favour-ludenyo-ruth/)
