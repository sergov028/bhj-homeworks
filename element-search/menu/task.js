//Вариант с одним активным меню

const menuSub = document.querySelectorAll(".menu_sub");

menuSub.forEach((item) => {
  const menuLink = item.parentElement.querySelector(".menu__link");

  menuLink.onclick = () => {
    menuSub.forEach((element) => {
      if (item.closest(".menu_main") === element.closest(".menu_main")) {
        element.classList.remove(".menu_active");
      }
    });
    item.classList.add("menu_active");
    return false;
  };
});

//Более одного навигационного меню

/*document.querySelector(".menu_main").onclick = (e) => {
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.classList.toggle("menu_active");
    return false;
  }
};*/
