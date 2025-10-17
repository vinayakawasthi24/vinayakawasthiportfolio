document.addEventListener("DOMContentLoaded", function () {
  // Search input animation on focus
  const searchInput = document.querySelector("main input");

  searchInput.addEventListener("focus", function () {
    this.style.width = "60%";
  });

  searchInput.addEventListener("blur", function () {
    this.style.width = "50%";
  });

  // Logo hover effect
  const logo = document.querySelector(".Logo img");
  logo.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s ease-in-out";
  });

  logo.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });

  // Navbar background change on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.background = "rgba(255, 69, 58, 1)";
      header.style.transition = "background 0.3s";
    } else {
      header.style.background = "rgba(255, 69, 58, 0.95)";
    }
  });
});

