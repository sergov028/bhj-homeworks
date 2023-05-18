let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
  let hole = document.querySelector(`#hole${i}`);
  function startGame() {
    if (hole.className.includes("hole_has-mole")) {
      dead.textContent++;
      if (dead.textContent == 10) {
        alert("Вы победили");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    } else {
      lost.textContent++;
    }
    if (lost.textContent == 5) {
      alert("Вы проиграли");
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
  hole.onclick = startGame;
}
