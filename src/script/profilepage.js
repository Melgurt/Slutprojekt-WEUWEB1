//Login page
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const profilePage = document.getElementById("profilePage");
  const loginButton = document.getElementById("loginButton");
  const profileTemplate = document.getElementById("profileTemplate");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
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
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
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
        errorPassword.textContent =
          "Password must contain at least one number.";
      } else if (!password.match(/(?=.*[@$!%*?&])/)) {
        errorPassword.textContent =
          "Password must contain at least one special character.";
      } else {
        errorPassword.textContent = "Password is not in the correct format.";
      }
      return;
    }

    if (email.trim() !== "" && password.trim() !== "") {
      loginForm.remove();

      // Clone the template and insert it into the profilePage
      const clonedProfileTemplate = profileTemplate.content.cloneNode(true);
      profilePage.appendChild(clonedProfileTemplate);
    }
  });
});
