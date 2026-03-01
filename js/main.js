import "./config.js";
import { VENUES } from "./data.js";
import { initMap, selectGraphic, deselectGraphic, filterByCategory } from "./map.js";
import { initPanel, setActiveVenue, setCategoryFilter } from "./panel.js";
import { initSidebar, showSidebar, closeSidebar, isSidebarOpen } from "./sidebar.js";
import { initEnvironment } from "./environment.js";

let currentVenueId = null;
let mapView = null;
const activeCategories = new Set(["indoor", "outdoor", "village"]);

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
    // On mobile, uncollapse the right panel to show venue details
    const rightPanel = document.getElementById("sidebarPanel");
    if (rightPanel.collapsed) rightPanel.collapsed = false;
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
  const rightPanel = document.getElementById("sidebarPanel");
  const menuToggle = document.getElementById("menuToggle");

  if (isMobile) {
    leftPanel.displayMode = "float";
    leftPanel.collapsed = true;
    rightPanel.displayMode = "float";
    rightPanel.collapsed = true;
    menuToggle.hidden = false;
  } else {
    leftPanel.displayMode = "dock";
    leftPanel.collapsed = false;
    rightPanel.displayMode = "dock";
    rightPanel.collapsed = false;
    menuToggle.hidden = true;
  }
}

(async () => {
  const { view } = await initMap("viewDiv", handleVenueSelect);
  mapView = view;
  const initialCamera = view.camera.clone();

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

  // LA View button — native div + real Camera instance for guaranteed behavior
  const laViewBtn = document.createElement("div");
  laViewBtn.id = "laViewBtn";
  laViewBtn.textContent = "LA View";
  laViewBtn.addEventListener("click", () => {
    if (currentVenueId !== null) {
      deselectGraphic(currentVenueId);
      setActiveVenue(null);
      currentVenueId = null;
      closeSidebar();
    }
    mapView.goTo(initialCamera, { duration: 1200, easing: "ease-in-out" });
  });
  view.ui.add(laViewBtn, "top-right");

  // Category filter switches — wire calcite-switch events to filter logic
  const filterMap = {
    filterIndoor: "indoor",
    filterOutdoor: "outdoor",
    filterVillage: "village"
  };

  Object.entries(filterMap).forEach(([switchId, cat]) => {
    document.getElementById(switchId).addEventListener("calciteSwitchChange", (e) => {
      const row = e.target.closest(".filter-row");
      if (e.target.checked) {
        activeCategories.add(cat);
        row.classList.remove("disabled");
      } else {
        activeCategories.delete(cat);
        row.classList.add("disabled");
      }
      filterByCategory(activeCategories);
      setCategoryFilter(activeCategories);
      updateVenueCount();
    });
  });

  function updateVenueCount() {
    const count = VENUES.filter(v => activeCategories.has(v.cat)).length;
    document.getElementById("venueCount").textContent = `${count} Venue${count !== 1 ? "s" : ""}`;
  }
})();
