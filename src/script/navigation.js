//Navbar
const navbar = document.getElementById("header");
const navbarHeight = navbar.offsetHeight;
const scrollThreshold = navbarHeight * 2;
let lastScrollPosition = 0;

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 0 && scrollPosition < lastScrollPosition) {
    navbar.classList.remove("hidden");
  } else if (
    scrollPosition > lastScrollPosition &&
    scrollPosition > scrollThreshold
  ) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollPosition = scrollPosition;
});

// Sidebar
const menuToggle = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && event.target !== menuToggle) {
    sidebar.classList.remove("show");
  }
});
