// Smooth reveal on scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// Toggle project details
function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  details.style.display =
    details.style.display === "block" ? "none" : "block";
}
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // change icon
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});