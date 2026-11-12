// =========================================
// services.js - used on services.html
// 1. Monthly / Yearly price switch
// 2. FAQ questions that open and close
// =========================================


// ---------- 1. Price switch ----------
const billingBtn = document.getElementById("billing-btn");
const prices = document.querySelectorAll(".price");
const periods = document.querySelectorAll(".period");

let isYearly = false;

billingBtn.addEventListener("click", function () {
  // Switch between true and false
  isYearly = !isYearly;

  // Move the switch knob (the CSS for "on" does the animation)
  billingBtn.classList.toggle("on");

  // Change every price on the page
  for (let i = 0; i < prices.length; i++) {
    if (isYearly) {
      prices[i].textContent = prices[i].getAttribute("data-yearly");
      periods[i].textContent = "/ year";
    } else {
      prices[i].textContent = prices[i].getAttribute("data-monthly");
      periods[i].textContent = "/ month";
    }
  }
});


// ---------- 2. FAQ accordion ----------
const questions = document.querySelectorAll(".faq-question");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    // "this" is the button that was clicked.
    // Its parent is the whole .faq-item box.
    this.parentElement.classList.toggle("open");
  });
}
