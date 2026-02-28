// Environment controls module — leverages ArcGIS JS SDK 5.0 features:
// Sun lighting with daylight control, weather effects, shadows, and glow

let _view = null;

export function initEnvironment(view) {
  _view = view;

  // Toggle panel open/collapsed
  document.getElementById("envToggleBtn").addEventListener("click", () => {
    document.getElementById("envPanel").classList.toggle("collapsed");
  });

  // Daylight slider — controls sun position via date
  const daylightSlider = document.getElementById("daylightSlider");
  const daylightLabel = document.getElementById("daylightLabel");
  daylightSlider.addEventListener("input", () => {
    const hour = parseFloat(daylightSlider.value);
    updateDaylight(hour);
    daylightLabel.textContent = formatHour(hour);
  });

  // Weather buttons
  document.querySelectorAll("[data-weather]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-weather]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateWeather(btn.dataset.weather);
    });
  });

  // Shadow toggle
  document.getElementById("shadowToggle").addEventListener("change", (e) => {
    updateShadows(e.target.checked);
  });

  // Glow intensity slider
  document.getElementById("glowSlider").addEventListener("input", (e) => {
    updateGlow(parseFloat(e.target.value));
  });
}

function formatHour(h) {
  const hours = Math.floor(h);
  const mins = Math.round((h % 1) * 60);
  const period = hours >= 12 ? "PM" : "AM";
  const h12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${h12}:${mins.toString().padStart(2, "0")} ${period}`;
}

function updateDaylight(hour) {
  if (!_view) return;
  // Olympics date: July 14, 2028 — vary the hour
  const date = new Date("2028-07-14T00:00:00-07:00");
  date.setHours(Math.floor(hour), Math.round((hour % 1) * 60));
  _view.environment.lighting.date = date;
}

function updateWeather(type) {
  if (!_view) return;
  const configs = {
    sunny:  { type: "sunny",  cloudCover: 0.15 },
    cloudy: { type: "cloudy", cloudCover: 0.65 },
    foggy:  { type: "foggy",  fogStrength: 0.35 },
    rainy:  { type: "rainy",  cloudCover: 0.85, precipitation: "rain" }
  };
  _view.environment.weather = configs[type] || configs.sunny;
}

function updateShadows(enabled) {
  if (!_view) return;
  _view.environment.lighting.directShadowsEnabled = enabled;
}

function updateGlow(intensity) {
  if (!_view) return;
  _view.environment.lighting.glow = { intensity };
}
