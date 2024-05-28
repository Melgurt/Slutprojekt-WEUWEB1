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

//Login page

const loginButton = document.getElementById("loginButton");
const profileTemplate = document.getElementById("profileTemplate");
let clone = profileTemplate.content.cloneNode(true);

const loginForm = document.getElementById("login-form");

loginButton.addEventListener("click", () => {
  if (
    document.getElementById("email").value &&
    document.getElementById("password").value !== ""
  ) {
    document.getElementById("profilePage").appendChild(clone);

    loginForm.remove();
  }
});
