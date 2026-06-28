// Tapas Plaza — vanilla JS. No dependencies, no build step.
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    menu.hidden = true;
  }

  function openMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    menu.hidden = false;
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) closeMenu();
      else openMenu();
    });

    // Close after tapping a link
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    // Close when resizing up to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) closeMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Dish carousel arrows ---------- */
  var track = document.getElementById("dishTrack");
  var prev = document.getElementById("dishPrev");
  var next = document.getElementById("dishNext");

  if (track && prev && next) {
    function step() {
      var card = track.querySelector(".dish");
      if (!card) return track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap || "16") || 16;
      return card.getBoundingClientRect().width + gap;
    }

    function scrollByDir(dir) {
      var max = track.scrollWidth - track.clientWidth;
      var target = track.scrollLeft + dir * step();
      // Wrap around for a looping feel.
      if (dir > 0 && track.scrollLeft >= max - 2) target = 0;
      else if (dir < 0 && track.scrollLeft <= 2) target = max;
      track.scrollTo({ left: target, behavior: "smooth" });
    }

    prev.addEventListener("click", function () {
      scrollByDir(-1);
    });
    next.addEventListener("click", function () {
      scrollByDir(1);
    });
  }
})();
