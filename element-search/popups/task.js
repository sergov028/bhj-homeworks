const modalMain = document.getElementById("modal_main");

const modalSuccess = document.getElementById("modal_success");

const closeModal = document.querySelectorAll(".modal__close_times");

const button = document.querySelector(".btn");

modalMain.classList.add("modal_active");

button.addEventListener("click", () => {
  clearClass();
  modalSuccess.classList.add("modal_active");
});

let arr = closeModal.forEach((item) => {
  item.onclick = () => {
    clearClass();
  };
});

function clearClass() {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.remove("modal_active");
}
