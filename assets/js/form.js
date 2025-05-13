let startTime = null;
const form = document.getElementById("contactForm");
const timer = document.getElementById("timer");
const confirmation = document.getElementById("confirmation");

form.addEventListener("focusin", () => {
  if (!startTime) {
    startTime = Date.now();
    updateTimer();
  }
});

function updateTimer() {
  if (startTime) {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    timer.textContent = `Time Spent: ${seconds}s`;
    setTimeout(updateTimer, 1000);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  confirmation.classList.remove("hidden");
  form.reset();
  startTime = null;
  timer.textContent = "Time Spent: 0s";
});