let _onClose = null;

export function initSidebar(onClose) {
  _onClose = onClose;
  document.getElementById("sbClose").addEventListener("click", () => {
    closeSidebar();
    if (_onClose) _onClose();
  });
}

export function showSidebar(venue) {
  document.getElementById("sbBadge").textContent = venue.type;
  document.getElementById("sbName").textContent = venue.name;
  document.getElementById("sbLoc").textContent = venue.loc;
  document.getElementById("sbDesc").textContent = venue.desc;

  document.getElementById("sbSports").innerHTML =
    venue.sports.map(s => `<span class="chip">${s}</span>`).join("");

  document.getElementById("sbInfo").innerHTML =
    `<div class="icard"><div class="icard-lbl">Capacity</div><div class="icard-val">${venue.cap.toLocaleString()}</div></div>` +
    `<div class="icard"><div class="icard-lbl">Year Built</div><div class="icard-val">${venue.built !== null ? venue.built : "TBD"}</div></div>` +
    `<div class="icard full"><div class="icard-lbl">Address</div><div class="icard-val">${venue.addr}</div></div>`;

  document.getElementById("sidebar").classList.add("open");
  document.getElementById("viewDiv").classList.add("sidebar-open");
}

export function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("viewDiv").classList.remove("sidebar-open");
}

export function isSidebarOpen() {
  return document.getElementById("sidebar").classList.contains("open");
}
