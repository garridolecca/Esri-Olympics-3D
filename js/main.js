import "./config.js";
import { VENUES } from "./data.js";
import { initMap, selectGraphic, deselectGraphic } from "./map.js";
import { initPanel, setActiveVenue } from "./panel.js";
import { initSidebar, showSidebar, closeSidebar, isSidebarOpen } from "./sidebar.js";
import { initEnvironment } from "./environment.js";

let currentVenueId = null;
let mapView = null;

function handleVenueSelect(id) {
  if (currentVenueId !== null) {
    deselectGraphic(currentVenueId);
  }
  currentVenueId = id;

  selectGraphic(id);
  setActiveVenue(id);

  const venue = VENUES.find(v => v.id === id);
  if (venue && mapView) {
    showSidebar(venue);
    mapView.goTo(
      {
        center: [venue.lng, venue.lat],
        scale: 15000,
        tilt: 55,
        heading: 0
      },
      { duration: 1200, easing: "ease-in-out" }
    );
  }
}

function handleSidebarClose() {
  if (currentVenueId !== null) {
    deselectGraphic(currentVenueId);
    setActiveVenue(null);
    currentVenueId = null;
  }
}

// Responsive layout: adapt Calcite shell-panel display modes for mobile vs desktop
function applyResponsiveLayout() {
  const isMobile = window.innerWidth <= 768;
  const leftPanel = document.getElementById("leftPanel");
  const menuToggle = document.getElementById("menuToggle");

  if (isMobile) {
    leftPanel.displayMode = "float";
    leftPanel.collapsed = true;
    menuToggle.hidden = false;
  } else {
    leftPanel.displayMode = "dock";
    leftPanel.collapsed = false;
    menuToggle.hidden = true;
  }
}

(async () => {
  const { view } = await initMap("viewDiv", handleVenueSelect);
  mapView = view;

  // Dismiss loading screen
  const loader = document.getElementById("loadingScreen");
  loader.classList.add("hidden");
  setTimeout(() => loader.remove(), 600);

  initPanel(handleVenueSelect);
  initSidebar(handleSidebarClose);

  // 5.0 Feature: Environment controls (daylight, weather, shadows, glow)
  initEnvironment(view);

  // Responsive layout management
  applyResponsiveLayout();
  window.addEventListener("resize", applyResponsiveLayout);

  // Mobile menu toggle — Calcite action toggles shell-panel collapsed state
  document.getElementById("menuToggle").addEventListener("click", () => {
    const leftPanel = document.getElementById("leftPanel");
    leftPanel.collapsed = !leftPanel.collapsed;
  });
})();
