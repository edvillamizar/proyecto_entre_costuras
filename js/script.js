console.log("JS conectado correctamente");
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(255,255,255,0.95)";
    header.style.borderBottom = "1px solid #e5e7eb";
  } else {
    header.style.background = "transparent";
    header.style.borderBottom = "none";
  }
});
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const whatsappBtn = document.querySelector(".whatsapp-float");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    whatsappBtn.classList.add("show");
  } else {
    whatsappBtn.classList.remove("show");
  }
});