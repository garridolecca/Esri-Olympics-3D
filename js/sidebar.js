let _onClose = null;

export function initSidebar(onClose) {
  _onClose = onClose;
  // Close venue details via the close notice button
  document.getElementById("closeVenueBtn").addEventListener("click", () => {
    closeSidebar();
    if (_onClose) _onClose();
  });
}

export function showSidebar(venue) {
  const section = document.getElementById("venueDetailSection");
  const sidebar = document.getElementById("sidebar");

  // Update block heading/description with venue name
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

  // Show venue detail section
  section.classList.remove("venue-detail-hidden");
}

export function closeSidebar() {
  document.getElementById("venueDetailSection").classList.add("venue-detail-hidden");
}

export function isSidebarOpen() {
  return !document.getElementById("venueDetailSection").classList.contains("venue-detail-hidden");
}
