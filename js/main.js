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

  // Mobile menu toggle
  const menuBtn = document.getElementById("menuToggle");
  const leftPanel = document.getElementById("leftPanel");
  const panelOverlay = document.getElementById("panelOverlay");

  menuBtn.addEventListener("click", () => {
    leftPanel.classList.toggle("open");
    panelOverlay.classList.toggle("active");
  });
  panelOverlay.addEventListener("click", () => {
    leftPanel.classList.remove("open");
    panelOverlay.classList.remove("active");
  });
})();
