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

const loadMapBtn = document.getElementById("load-map");
const mapPlaceholder = document.getElementById("map-placeholder");

if (loadMapBtn && mapPlaceholder) {
  loadMapBtn.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.title = "Mapa de Entre Costuras en Granada";
    iframe.src = "https://www.google.com/maps?q=C.%20Mirlo,%201,%20Beiro,%2018014%20Granada&output=embed";
    iframe.width = "100%";
    iframe.height = "350";
    iframe.style.border = "0";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    mapPlaceholder.replaceWith(iframe);
  });
}