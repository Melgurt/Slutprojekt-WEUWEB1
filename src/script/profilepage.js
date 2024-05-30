//Login page

const loginButton = document.getElementById("loginButton");
const profileTemplate = document.getElementById("profileTemplate");
let clone = profileTemplate.cloneNode(true);

const loginForm = document.getElementById("login-form");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    document.getElementById("email").value &&
    document.getElementById("password").value !== ""
  ) {
    document.getElementById("profilePage").appendChild(clone);

    loginForm.remove();
  }
});

//Det här är en ful lösning jag vet
//Jag har en lösning i tidigare committs som skickar en alert till använadren utan js
//Jag jag hade inte tid att leta upp den

const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    if (!email.includes("@")) {
      errorEmail.textContent = 'Email address is missing the "@" symbol.';
    } else if (!email.includes(".")) {
      errorEmail.textContent = 'Email address is missing the "." symbol.';
    } else {
      errorEmail.textContent = "Email address is not in the correct format.";
    }
    return;
  }

  if (
    !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)
  ) {
    if (password.length < 8) {
      errorPassword.textContent =
        "Password must be at least 8 characters long.";
    } else if (!password.match(/(?=.*[a-z])/)) {
      errorPassword.textContent =
        "Password must contain at least one lowercase letter.";
    } else if (!password.match(/(?=.*[A-Z])/)) {
      errorPassword.textContent =
        "Password must contain at least one uppercase letter.";
    } else if (!password.match(/(?=.*\d)/)) {
      errorPassword.textContent = "Password must contain at least one number.";
    } else {
      errorPassword.textContent = "Password is not in the correct format.";
    }
    return;
  }
});
