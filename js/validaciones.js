document.addEventListener("DOMContentLoaded", () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación Registro
  const formRegistro = document.getElementById("form-registro");
  if (formRegistro) {
    formRegistro.addEventListener("submit", (e) => {
      let valido = true;

      const nombre = document.getElementById("nombre");
      const email = document.getElementById("email");
      const password = document.getElementById("password");

      const errNombre = document.getElementById("error-nombre");
      const errEmail = document.getElementById("error-email");
      const errPassword = document.getElementById("error-password");

      errNombre.textContent = "";
      errEmail.textContent = "";
      errPassword.textContent = "";

      if (nombre.value.trim() === "") {
        errNombre.textContent = "el nombre es obligatorio.";
        valido = false;
      }

      if (!regexEmail.test(email.value.trim())) {
        errEmail.textContent = "ingresa un correo electrónico válido.";
        valido = false;
      }

      if (password.value.length < 6) {
        errPassword.textContent = "la contraseña debe tener al menos 6 caracteres.";
        valido = false;
      }

      if (!valido) {
        e.preventDefault();
      } else {
        alert("¡Registro exitoso en skin.!");
      }
    });
  }

  // Validación Login
  const formLogin = document.getElementById("form-login");
  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      let valido = true;

      const email = document.getElementById("login-email");
      const password = document.getElementById("login-password");

      const errEmail = document.getElementById("error-login-email");
      const errPassword = document.getElementById("error-login-password");

      errEmail.textContent = "";
      errPassword.textContent = "";

      if (!regexEmail.test(email.value.trim())) {
        errEmail.textContent = "ingresa un correo válido.";
        valido = false;
      }

      if (password.value.trim() === "") {
        errPassword.textContent = "ingresa tu contraseña.";
        valido = false;
      }

      if (!valido) {
        e.preventDefault();
      } else {
        alert("¡Bienvenido de vuelta!");
      }
    });
  }
});