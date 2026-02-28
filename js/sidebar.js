let _onClose = null;

export function initSidebar(onClose) {
  _onClose = onClose;
  // Calcite panel: listen for the built-in close button event
  document.getElementById("sidebar").addEventListener("calcitePanelClose", () => {
    closeSidebar();
    if (_onClose) _onClose();
  });
}

export function showSidebar(venue) {
  const sidebar = document.getElementById("sidebar");

  // Calcite panel heading/description replace custom header elements
  sidebar.heading = venue.name;
  sidebar.description = venue.loc;

  document.getElementById("sbBadge").innerText = venue.type;
  document.getElementById("sbDesc").textContent = venue.desc;

  // Sport chips — using calcite-chip components
  document.getElementById("sbSports").innerHTML =
    venue.sports.map(s =>
      `<calcite-chip scale="s" kind="brand" appearance="outline-fill">${s}</calcite-chip>`
    ).join("");

  document.getElementById("sbInfo").innerHTML =
    `<div class="icard"><div class="icard-lbl">Capacity</div><div class="icard-val">${venue.cap.toLocaleString()}</div></div>` +
    `<div class="icard"><div class="icard-lbl">Year Built</div><div class="icard-val">${venue.built !== null ? venue.built : "TBD"}</div></div>` +
    `<div class="icard full"><div class="icard-lbl">Address</div><div class="icard-val">${venue.addr}</div></div>`;

  // Show venue details panel (shell-panel stays open for environment controls)
  sidebar.closed = false;
}

export function closeSidebar() {
  document.getElementById("sidebar").closed = true;
}

export function isSidebarOpen() {
  return !document.getElementById("sidebar").closed;
}
