# Esri-Olympics-3D

Interactive 3D web application exploring all 20 confirmed venues for the **Los Angeles 2028 Summer Olympics**, built with the **ArcGIS Maps SDK for JavaScript 5.0**.

**[Live Demo](https://garridolecca.github.io/Esri-Olympics-3D/)**

## Features

- **3D Scene** with Esri Dark Gray Canvas 3D basemap, extruded buildings, and world elevation
- **20 Olympic venues** with color-coded floating markers and emissive glow effects
- **Venue detail sidebar** with description, sports, capacity, and address
- **Search & filter** venues by name, sport, or city
- **Custom map controls** for zoom, home reset, and camera tilt
- **Responsive design** optimized for desktop, tablet, and mobile
- **Olympic-themed UI** using official Olympic ring colors

### New in 5.0

- **Sun Lighting & Shadows** — Realistic sun-based lighting with direct building shadows, set to the LA 2028 Olympics date
- **Daylight Slider** — Adjust time of day to see how sunlight and shadows change across venues throughout the day
- **Weather Effects** — Toggle between sunny, cloudy, foggy, and rainy conditions
- **Emissive Glow Markers** — Venue markers feature glowing light pools at ground level using 5.0 emissive materials
- **Global Glow Post-Processing** — Scene-wide glow effect that enhances emissive venue markers
- **Stars** — Visible star field when viewing nighttime hours
- **Environment Control Panel** — Unified UI to control daylight, weather, shadows, and glow intensity

## Tech Stack

- **ArcGIS Maps SDK for JavaScript 5.0** (ES modules via CDN)
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
    ├── environment.js    ← NEW: 5.0 environment controls
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

## ArcGIS JS SDK 5.0 Migration Notes

This project was migrated from SDK 4.32 to 5.0. Key changes:

- **CDN updated** from `js.arcgis.com/4.32/` to `js.arcgis.com/5.0/`
- **`Graphic.layer` removed** — hit test now uses result-level `layer` property
- **Lighting changed** from `virtual` to `sun` type with `directShadowsEnabled`
- **Weather effects** added via `environment.weather`
- **Emissive materials** added to 3D point symbols (`ObjectSymbol3DLayer`)
- **Global glow** enabled via `environment.lighting.glow`
