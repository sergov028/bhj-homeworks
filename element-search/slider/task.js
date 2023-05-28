const prewBtn = document.querySelector(".slider__arrow_prev");
const nextBtn = document.querySelector(".slider__arrow_next");
const slider = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

prewBtn.onclick = () => {
  let sliderActive = slider.findIndex((element) =>
    element.classList.contains("slider__item_active")
  );

  if (sliderActive <= 0) {
    sliderActive = slider.length - 1;
  } else {
    sliderActive--;
  }
  changeSlide(sliderActive);
};

nextBtn.onclick = () => {
  let sliderActive = slider.findIndex((element) =>
    element.classList.contains("slider__item_active")
  );

  if (sliderActive >= slider.length - 1) {
    sliderActive = 0;
  } else {
    sliderActive++;
  }
  changeSlide(sliderActive);
};

dots.forEach(
  (item, i) =>
    (item.onclick = () => {
      changeSlide(i);
    })
);

function changeSlide(i) {
  slider.forEach((item) => item.classList.remove("slider__item_active"));
  dots.forEach((elem) => elem.classList.remove("slider__dot_active"));
  slider[i].classList.add("slider__item_active");
  dots[i].classList.add("slider__dot_active");
}
