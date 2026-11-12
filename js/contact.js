// =========================================
// contact.js - used on contact.html
// 1. Counts the letters in the message box
// 2. Checks the form before it is sent
// =========================================

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const charCount = document.getElementById("char-count");
const successMessage = document.getElementById("success-message");


// ---------- 1. Character counter ----------
// The "input" event runs every time the user types
messageInput.addEventListener("input", function () {
  charCount.textContent = messageInput.value.length;
});


// ---------- Helper functions ----------
// Shows a red message under a field
function showError(input, message) {
  const error = input.parentElement.querySelector(".error");
  error.textContent = message;
  input.classList.add("invalid");
}

// Removes the red message from a field
function clearError(input) {
  const error = input.parentElement.querySelector(".error");
  error.textContent = "";
  input.classList.remove("invalid");
}


// ---------- 2. Form check ----------
form.addEventListener("submit", function (event) {
  // Stop the page from reloading
  event.preventDefault();

  let isValid = true;

  // Name must not be empty
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Please enter your name.");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Email must contain "@" and "."
  const email = emailInput.value.trim();
  if (email === "") {
    showError(emailInput, "Please enter your email.");
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    showError(emailInput, "Please enter a valid email address.");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // A subject must be chosen
  if (subjectInput.value === "") {
    showError(subjectInput, "Please choose a subject.");
    isValid = false;
  } else {
    clearError(subjectInput);
  }

  // Message must be at least 10 characters
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, "Your message should be at least 10 characters.");
    isValid = false;
  } else {
    clearError(messageInput);
  }

  // If everything is correct, show the thank-you message
  if (isValid) {
    successMessage.textContent = "Thank you, " + nameInput.value.trim() + "! Your message has been sent.";
    successMessage.classList.add("show");
    form.reset();
    charCount.textContent = 0;
  } else {
    successMessage.classList.remove("show");
  }
});
