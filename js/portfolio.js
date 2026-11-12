// =========================================
// portfolio.js - used on portfolio.html
// Filters the theme gallery by category
// =========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");
const resultText = document.getElementById("result-text");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    // Which category did the user click? (for example "food")
    const category = this.getAttribute("data-filter");

    // Remove "active" from all buttons, then add it to the clicked one
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");

    // Show the matching items and hide the others
    let count = 0;

    for (let k = 0; k < items.length; k++) {
      const itemCategory = items[k].getAttribute("data-category");

      if (category === "all" || category === itemCategory) {
        items[k].style.display = "block";
        count = count + 1;
      } else {
        items[k].style.display = "none";
      }
    }

    // Update the text above the gallery
    resultText.textContent = "Showing " + count + " themes";
  });
}
