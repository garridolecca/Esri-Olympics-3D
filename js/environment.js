// Environment controls module — leverages ArcGIS JS SDK 5.0 features:
// Sun lighting with daylight control, weather effects, shadows, and glow
// Uses Calcite Design System form components (slider, switch, segmented-control)

let _view = null;

export function initEnvironment(view) {
  _view = view;

  // Calcite slider: daylight time-of-day control
  const daylightSlider = document.getElementById("daylightSlider");
  const daylightLabel = document.getElementById("daylightLabel");
  daylightSlider.addEventListener("calciteSliderInput", () => {
    const hour = parseFloat(daylightSlider.value);
    updateDaylight(hour);
    daylightLabel.textContent = formatHour(hour);
  });

  // Calcite segmented-control: weather toggle
  document.getElementById("weatherBtns").addEventListener("calciteSegmentedControlChange", (e) => {
    updateWeather(e.target.value);
  });

  // Calcite switch: shadow toggle
  document.getElementById("shadowToggle").addEventListener("calciteSwitchChange", (e) => {
    updateShadows(e.target.checked);
  });

  // Calcite slider: glow intensity
  document.getElementById("glowSlider").addEventListener("calciteSliderInput", (e) => {
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
    rainy:  { type: "rainy",  cloudCover: 0.85, precipitation: 0.5 }
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
