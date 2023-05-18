//Задача 1

const clickCount = document.getElementById("clicker__counter");

const clickerCookie = document.getElementById("cookie");

/*clickerCookie.onclick = function () {
  const valueCount = +clickCount.textContent;
  clickCount.textContent = valueCount + 1;

  if (valueCount % 2 === 0) {
    clickerCookie.width = 300;
  } else {
    clickerCookie.width = 200;
  }
};*/

//Задача 2

const speedClick = document.getElementById("speed__click");

let lastTimeClick = null;

clickerCookie.onclick = function () {
  const currentTime = new Date();
  const valueCount = +clickCount.textContent;
  clickCount.textContent = valueCount + 1;

  if (valueCount % 2 === 0) {
    clickerCookie.width = 300;
  } else {
    clickerCookie.width = 200;
  }

  if (lastTimeClick) {
    const diffTime = (currentTime - lastTimeClick) / 1000;
    const speed = 1 / diffTime;

    speedClick.textContent = speed.toFixed(2);
  }

  lastTimeClick = currentTime;
};
