import Map from "@arcgis/core/Map.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import Graphic from "@arcgis/core/Graphic.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Point from "@arcgis/core/geometry/Point.js";

import { VENUES, CAT_COLORS } from "./data.js";

const byId = {};

const HOME_CAMERA = {
  position: { longitude: -118.30, latitude: 33.50, z: 55000 },
  tilt: 35,
  heading: 10
};

// Olympics Opening Ceremony: July 14, 2028 — default scene time 10:00 AM Pacific
const OLYMPICS_DATE = new Date("2028-07-14T10:00:00-07:00");

function make3DSymbol(cat, selected = false) {
  const c = CAT_COLORS[cat] || CAT_COLORS.outdoor;
  const sz = selected ? 16 : 11;

  return {
    type: "point-3d",
    symbolLayers: [
      // 5.0 Feature: Emissive glow sphere at ground level
      {
        type: "object",
        resource: { primitive: "sphere" },
        material: {
          color: [...c.rgb, 180],
          emissive: {
            source: "color",
            strength: selected ? 2.8 : 1.2
          }
        },
        width: selected ? 55 : 30,
        height: selected ? 22 : 12,
        depth: selected ? 55 : 30
      },
      // Floating icon marker
      {
        type: "icon",
        resource: { primitive: "circle" },
        material: { color: c.rgb },
        outline: {
          color: selected ? [255, 255, 255, 255] : [...c.glow, 180],
          size: selected ? 2.5 : 1.5
        },
        size: sz
      }
    ],
    verticalOffset: {
      screenLength: 40,
      maxWorldLength: 300,
      minWorldLength: 40
    },
    callout: {
      type: "line",
      size: selected ? 2 : 1.2,
      color: [...c.rgb, selected ? 255 : 160],
      border: {
        color: [0, 0, 0, 0]
      }
    }
  };
}

// Calcite Design System: use calcite-action-bar for map controls
function createMapControls(view) {
  const bar = document.createElement("calcite-action-bar");
  bar.layout = "vertical";
  bar.expandDisabled = true;
  bar.scale = "s";

  const actions = [
    {
      icon: "plus",
      text: "Zoom in",
      action: () => {
        const cam = view.camera.clone();
        cam.position.z *= 0.6;
        view.goTo(cam, { duration: 300 });
      }
    },
    {
      icon: "minus",
      text: "Zoom out",
      action: () => {
        const cam = view.camera.clone();
        cam.position.z *= 1.6;
        view.goTo(cam, { duration: 300 });
      }
    },
    {
      icon: "home",
      text: "Reset view",
      action: () => {
        view.goTo({ camera: HOME_CAMERA }, { duration: 800, easing: "ease-in-out" });
      }
    },
    {
      icon: "chevron-up",
      text: "Tilt up (bird's eye)",
      action: () => {
        const cam = view.camera.clone();
        cam.tilt = Math.max(0, cam.tilt - 15);
        view.goTo(cam, { duration: 300 });
      }
    },
    {
      icon: "chevron-down",
      text: "Tilt down (street level)",
      action: () => {
        const cam = view.camera.clone();
        cam.tilt = Math.min(85, cam.tilt + 15);
        view.goTo(cam, { duration: 300 });
      }
    }
  ];

  actions.forEach(a => {
    const action = document.createElement("calcite-action");
    action.icon = a.icon;
    action.text = a.text;
    action.scale = "s";
    action.addEventListener("click", a.action);
    bar.appendChild(action);
  });

  return bar;
}

export async function initMap(containerId, onVenueClick) {
  const map = new Map({
    basemap: "dark-gray-3d",
    ground: "world-elevation"
  });

  const view = new SceneView({
    container: containerId,
    map,
    camera: HOME_CAMERA,
    qualityProfile: "high",
    environment: {
      atmosphere: { quality: "high" },
      // 5.0 Feature: Sun-based lighting with realistic building shadows + global glow
      lighting: {
        type: "sun",
        date: OLYMPICS_DATE,
        directShadowsEnabled: true,
        glow: { intensity: 0.4 }
      },
      // 5.0 Feature: Weather effects — sunny LA default
      weather: { type: "sunny", cloudCover: 0.15 },
      starsEnabled: true
    },
    popup: { autoOpenEnabled: false },
    ui: { components: [] }
  });

  const venueLayer = new GraphicsLayer({
    elevationInfo: { mode: "relative-to-ground" }
  });
  map.add(venueLayer);

  VENUES.forEach(v => {
    const g = new Graphic({
      geometry: new Point({ longitude: v.lng, latitude: v.lat, z: 0 }),
      symbol: make3DSymbol(v.cat),
      attributes: { id: v.id, name: v.name }
    });
    venueLayer.add(g);
    byId[v.id] = g;
  });

  await view.when();

  // Calcite action-bar for map controls
  const controls = createMapControls(view);
  view.ui.add(controls, "top-left");

  // Click handler — 5.0 fix: Graphic.layer removed, use hit result's layer property
  view.on("click", async (e) => {
    const hit = await view.hitTest(e);
    const match = hit.results.find(r =>
      r.graphic && (r.layer === venueLayer || r.graphic.attributes?.id != null)
    );
    if (match && onVenueClick) {
      onVenueClick(match.graphic.attributes.id);
    }
  });

  // Tooltip on pointer-move
  const tip = document.getElementById("tip");
  view.on("pointer-move", async (e) => {
    const hit = await view.hitTest(e);
    const match = hit.results.find(r =>
      r.graphic && (r.layer === venueLayer || r.graphic.attributes?.id != null)
    );
    if (match) {
      const v = VENUES.find(v => v.id === match.graphic.attributes.id);
      view.container.style.cursor = "pointer";
      tip.textContent = v ? v.name : "";
      tip.style.left = (e.x + 14) + "px";
      tip.style.top = (e.y + 10) + "px";
      tip.classList.add("show");
    } else {
      view.container.style.cursor = "default";
      tip.classList.remove("show");
    }
  });

  return { view, map, venueLayer };
}

export function selectGraphic(id) {
  const v = VENUES.find(v => v.id === id);
  if (v && byId[id]) byId[id].symbol = make3DSymbol(v.cat, true);
}

export function deselectGraphic(id) {
  const v = VENUES.find(v => v.id === id);
  if (v && byId[id]) byId[id].symbol = make3DSymbol(v.cat, false);
}

export function goToAllVenues(view) {
  view.goTo(
    { camera: HOME_CAMERA },
    { duration: 1200, easing: "ease-in-out" }
  );
}

export function filterByCategory(activeCategories) {
  VENUES.forEach(v => {
    if (byId[v.id]) {
      byId[v.id].visible = activeCategories.has(v.cat);
    }
  });
}
