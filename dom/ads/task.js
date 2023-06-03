const rotatorCase = document.querySelectorAll(".rotator__case");
let textNum = 0;
let speed = 0;

function changeRotator(arr) {
  clearInterval(interval);
  arr.forEach((item) => {
    item.classList.remove("rotator__case_active");
  });
  textNum++;

  if (textNum === arr.length) {
    textNum = 0;
  }

  arr[textNum].classList.add("rotator__case_active");
  arr[textNum].style.color = arr[textNum].dataset.color;
  speed = arr[textNum].dataset.speed;
  interval = setInterval(changeRotator, speed, rotatorCase);
}

let interval = setInterval(changeRotator, speed, rotatorCase);
