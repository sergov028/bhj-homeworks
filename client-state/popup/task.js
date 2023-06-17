const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelectorAll(".modal__close");

if (!getCookie("subscribeModal")) {
  modal.classList.add("modal_active");
}

function closePopup() {
  this.closest(".modal_active").classList.remove("modal_active");
  document.cookie = "subscribeModal=true";
}

function getCookie(name) {
  const cookies = "; " + document.cookie;
  let cookie = cookies.split("; " + name + "=");
  if (cookie.length === 2) {
    return cookie.pop().split(";").shift();
  }
}

modalClose.forEach((elem) => {
  elem.addEventListener("click", closePopup);
});
