const divReveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (elem of divReveals) {
    if (
      elem.getBoundingClientRect().top < window.innerHeight ||
      elem.getBoundingClientRect().bottom > 0
    ) {
      elem.classList.add("reveal_active");
    }
    if (
      elem.getBoundingClientRect().top > window.innerHeight ||
      elem.getBoundingClientRect().bottom < 0
    ) {
      elem.classList.remove("reveal_active");
    }
  }
});
