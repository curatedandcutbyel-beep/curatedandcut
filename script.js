const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const dropdowns = document.querySelectorAll(".menu-dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("toggle", () => {
    if (!dropdown.open) return;
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.removeAttribute("open");
      }
    });
  });

  dropdown.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      dropdown.removeAttribute("open");
    }
  });
});

document.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest(".menu-dropdown")) return;
  dropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
});
