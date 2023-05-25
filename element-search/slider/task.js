const prewBtn = document.querySelector(".slider__arrow_prev");
const nextBtn = document.querySelector(".slider__arrow_next");
const slider = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");

let sliderActive = 0;

prewBtn.onclick = () => {
  if (sliderActive - 1 < 0) {
    sliderActive = slider.length - 1;
  } else {
    sliderActive -= 1;
  }
  changeSlide(sliderActive);
};

nextBtn.onclick = () => {
  if (sliderActive + 1 === slider.length) {
    sliderActive = 0;
  } else {
    sliderActive += 1;
  }
  changeSlide(sliderActive);
};

dots[sliderActive].classList.add("slider__dot_active");
[...dots].forEach(
  (item, i) =>
    (item.onclick = () => {
      changeSlide(i);
    })
);

function changeSlide(i) {
  [...slider].forEach((item) => item.classList.remove("slider__item_active"));
  [...dots].forEach((elem) => elem.classList.remove("slider__dot_active"));
  slider[i].classList.add("slider__item_active");
  dots[i].classList.add("slider__dot_active");
}
