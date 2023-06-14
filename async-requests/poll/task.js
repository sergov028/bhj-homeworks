const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    const response = JSON.parse(xhr.responseText);
    pollTitle.innerText = response.data.title;
    response.data.answers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.classList.add("poll__answer");
      btn.innerText = `${answer}`;
      btn.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
      pollAnswers.appendChild(btn);
    });
  }
};
