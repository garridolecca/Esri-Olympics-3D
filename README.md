# Esri-Olympics-3D

Interactive 3D web application exploring all 20 confirmed venues for the **Los Angeles 2028 Summer Olympics**.

**[Live Demo](https://garridolecca.github.io/Esri-Olympics-3D/)**

## Features

- **3D Scene** with Esri Dark Gray Canvas 3D basemap including extruded 3D buildings
- **20 Olympic venues** with high-contrast floating icon markers color-coded by category
- **Venue detail sidebar** with description, sports, capacity, and address
- **Search & filter** venues by name, sport, or city
- **Custom map controls** for zoom, home reset, and camera tilt
- **Responsive design** optimized for desktop, tablet, and mobile
- **Olympic-themed UI** using official Olympic ring colors throughout

## Tech Stack

- **ArcGIS Maps SDK for JavaScript 4.32** (ES modules via CDN)
- **Esri Dark Gray Canvas 3D** basemap with world elevation
- **Pure HTML/CSS/JS** — no build step, no framework
- **GitHub Pages** hosting

## Venue Categories

| Color | Category |
|---|---|
| Amber | Indoor Arena |
| Cyan | Outdoor / Stadium |
| Lime | Athletes Village |

## Project Structure

```
Esri-Olympics-3D/
├── index.html
├── css/styles.css
└── js/
    ├── config.js
    ├── data.js
    ├── main.js
    ├── map.js
    ├── panel.js
    └── sidebar.js
```

## Run Locally

Serve with any static HTTP server (ES modules require HTTP, not `file://`):

```bash
npx serve .
```

Then open `http://localhost:3000`.
