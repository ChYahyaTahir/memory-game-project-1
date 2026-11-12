// =========================================
// main.js - used on every page
// Opens and closes the menu on small screens
// =========================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
  // Add the "show" class if it is missing, remove it if it is there
  navLinks.classList.toggle("show");

  // Change the button icon
  if (navLinks.classList.contains("show")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});
