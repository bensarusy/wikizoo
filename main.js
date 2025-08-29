// Smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => navMenu.classList.toggle("active"));

// Image click info
document.querySelectorAll("article img").forEach(img => {
    img.addEventListener("click", () => {
        alert(`Fun fact: ${img.alt}s are amazing! 🐾`);
    });
});
