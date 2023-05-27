const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");

tab.forEach(
  (elem, index) =>
    (elem.onclick = () => {
      changeClass(index);
    })
);

function changeClass(i) {
  tab.forEach((elem) => elem.classList.remove("tab_active"));
  tabContent.forEach((item) => item.classList.remove("tab__content_active"));
  tab[i].classList.add("tab_active");
  tabContent[i].classList.add("tab__content_active");
}
