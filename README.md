# Esri-Olympics-3D

Interactive 3D web application exploring all 20 confirmed venues for the **Los Angeles 2028 Summer Olympics**, built with **ArcGIS Maps SDK for JavaScript 5.0** and **Calcite Design System**.

**[Live Demo](https://garridolecca.github.io/Esri-Olympics-3D/)**

## Features

- **3D Scene** with Esri Dark Gray Canvas 3D basemap, extruded buildings, and world elevation
- **20 Olympic venues** with color-coded floating markers and emissive glow effects
- **Venue detail sidebar** with description, sports, capacity, and address
- **Search & filter** venues by name, sport, or city
- **Calcite action-bar** map controls for zoom, home reset, and camera tilt
- **Responsive design** optimized for desktop, tablet, and mobile
- **Olympic-themed UI** using official Olympic ring colors with Calcite brand theming

### ArcGIS JS SDK 5.0 Features

- **Sun Lighting & Shadows** — Realistic sun-based lighting with direct building shadows, set to the LA 2028 Olympics date
- **Daylight Slider** — Adjust time of day to see how sunlight and shadows change across venues
- **Weather Effects** — Toggle between sunny, cloudy, foggy, and rainy conditions
- **Emissive Glow Markers** — Venue markers feature glowing light pools at ground level using 5.0 emissive materials
- **Global Glow Post-Processing** — Scene-wide glow effect that enhances emissive venue markers
- **Stars** — Visible star field when viewing nighttime hours
- **Environment Control Panel** — Calcite-powered UI to control daylight, weather, shadows, and glow intensity

### Calcite Design System Layout

Following the [ArcGIS app layout guide](https://developers.arcgis.com/javascript/latest/creating-app-layouts/):

- **`calcite-shell`** as the app frame defining structural regions
- **`calcite-navigation`** for the header with Olympic branding
- **`calcite-shell-panel`** for dockable/collapsible left and right panels
- **`calcite-panel`** and **`calcite-block`** for content organization
- **`calcite-action-bar`** with **`calcite-action`** for map navigation controls
- **`calcite-input-text`**, **`calcite-slider`**, **`calcite-switch`**, **`calcite-segmented-control`** for form controls
- **`calcite-chip`** for venue tags and sport labels
- **`calcite-mode-dark`** with Olympic Gold brand theming via CSS variables

## Tech Stack

- **ArcGIS Maps SDK for JavaScript 5.0** (ES modules via CDN)
- **Calcite Design System 5.0** (layout and UI components)
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
    ├── environment.js    ← 5.0 environment controls (Calcite form components)
    ├── main.js           ← App entry, responsive layout management
    ├── map.js            ← SceneView, symbols, Calcite action-bar controls
    ├── panel.js          ← Venue list with Calcite input search
    └── sidebar.js        ← Venue details with Calcite panel/blocks
```

## Run Locally

Serve with any static HTTP server (ES modules require HTTP, not `file://`):

```bash
npx serve .
```

Then open `http://localhost:3000`.
