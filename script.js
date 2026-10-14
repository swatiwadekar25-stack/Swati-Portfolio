
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

// Update the copyright year automatically
document.getElementById("year").textContent =
  new Date().getFullYear();

// Rotate the role text
const typingText = document.getElementById("typing-text");

const roles = [
  "Full Stack Developer",
  "Web Developer",
  // "Problem Solver",
];

let roleIndex = 0;

setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  typingText.textContent = roles[roleIndex];
}, 2500);

// Prevent placeholder certificate links from jumping to the top
document.querySelectorAll(".certificate-link").forEach((link) => {
  if (link.getAttribute("href") === "#") {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please add your actual certificate link first.");
    });
  }
});
