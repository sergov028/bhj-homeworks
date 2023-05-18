//Задача 1

const currentTimer = document.getElementById("timer");

const timerId = setInterval(() => {
  const value = +currentTimer.textContent;
  if (value > 0) {
    currentTimer.textContent = value - 1;
  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
  }
}, 1000);
