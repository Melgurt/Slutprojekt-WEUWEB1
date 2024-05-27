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
