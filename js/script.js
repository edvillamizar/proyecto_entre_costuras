const header = document.querySelector(".header");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const whatsappBtn = document.querySelector(".whatsapp-float");

const HEADER_SCROLL = 50;
const SHOW_WHATSAPP_AT = 300;

function setMenu(open) {
  nav.classList.toggle("active", open);
  toggle.setAttribute("aria-expanded", String(open));
}

function handleScroll() {
  const y = window.scrollY;
  header?.classList.toggle("scrolled", y > HEADER_SCROLL);
  whatsappBtn?.classList.toggle("show", y > SHOW_WHATSAPP_AT);
}

if (toggle && nav) {
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("active")));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") setMenu(false);
  });
}

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();