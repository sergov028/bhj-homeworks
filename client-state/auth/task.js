const signin = document.getElementById("signin");
const signinForm = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const inputs = document.querySelectorAll(".control");

let id;

signinForm.addEventListener("submit", (event) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
      let responseText = JSON.parse(xhr.responseText);

      if (responseText.success === true) {
        inputs.value = "";
        localStorage.setItem("id", JSON.stringify(responseText.user_id));
        id = localStorage.getItem("id");
        userId.textContent = id;
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
      } else {
        alert("Неверный логин/пароль");
      }
    }
  });
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

  const formData = new FormData(signinForm);
  xhr.send(formData);
  event.preventDefault();
});

window.addEventListener("load", () => {
  id = localStorage.getItem("id");
  if (id) {
    userId.textContent = id;
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
  }
});
