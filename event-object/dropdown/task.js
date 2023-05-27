const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");

dropdownValue.onclick = () => {
  dropdownList.classList.toggle("dropdown__list_active");
};

dropdownItem.forEach((elem) => {
  elem.onclick = () => {
    dropdownValue.textContent =
      elem.querySelector(".dropdown__link").textContent;
    dropdownList.classList.remove("dropdown__list_active");
    if (elem.querySelector(".dropdown__link")) {
      return false;
    }
  };
});
