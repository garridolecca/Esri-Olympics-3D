import { VENUES, CAT_COLORS } from "./data.js";

let _onSelect = null;
let _activeId = null;
let _activeCategories = new Set(["indoor", "outdoor", "village"]);

export function initPanel(onSelect) {
  _onSelect = onSelect;
  renderList("");
  // Calcite input-text: listen for calciteInputTextInput event
  document.getElementById("venueSearch").addEventListener("calciteInputTextInput", function (e) {
    renderList(e.target.value);
  });
}

export function setCategoryFilter(activeCategories) {
  _activeCategories = activeCategories;
  renderList(document.getElementById("venueSearch").value || "");
}

export function setActiveVenue(id) {
  _activeId = id;
  document.querySelectorAll(".vi").forEach(el => {
    el.classList.toggle("active", parseInt(el.dataset.id, 10) === id);
  });
  if (id !== null) {
    const li = document.querySelector(`.vi[data-id="${id}"]`);
    if (li) li.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function renderList(q) {
  q = (q || "").toLowerCase();

  const items = VENUES.filter(v =>
    _activeCategories.has(v.cat) && (
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.loc.toLowerCase().includes(q) ||
      v.type.toLowerCase().includes(q) ||
      v.sports.some(s => s.toLowerCase().includes(q))
    )
  );

  const html = items.map(v => {
    const c = CAT_COLORS[v.cat] || CAT_COLORS.outdoor;
    const tags = v.sports.slice(0, 2)
      .map(s => `<span class="vi-tag">${s}</span>`)
      .join("");
    return `<div class="vi cat-${v.cat}${v.id === _activeId ? " active" : ""}" data-id="${v.id}">
      <div class="vi-name"><span class="cat-dot" style="background:${c.hex}; color:${c.hex}"></span>${v.name}</div>
      <div class="vi-loc">${v.loc} &bull; Cap. ${v.cap.toLocaleString()}</div>
      <div class="vi-tags">${tags}</div>
    </div>`;
  }).join("");

  const el = document.getElementById("venueList");
  el.innerHTML = html;
  el.querySelectorAll(".vi").forEach(item => {
    item.addEventListener("click", () => {
      if (_onSelect) _onSelect(parseInt(item.dataset.id, 10));
      // Close mobile panel on selection (Calcite shell-panel)
      const leftPanel = document.getElementById("leftPanel");
      if (leftPanel.displayMode === "float" || leftPanel.displayMode === "overlay") {
        leftPanel.collapsed = true;
      }
    });
  });
}
