const chatWidget = document.querySelector(".chat-widget");
const inputWidget = chatWidget.querySelector(".chat-widget__input");
const chatArea = chatWidget.querySelector(".chat-widget__messages");
const container = chatWidget.querySelector(".chat-widget__messages-container");
let timeOut = null;
const botMessages = [
  "Добрый день, мы ещё не проснулись. Позвоните через 10 лет",
  "Кто тут?",
  "Где ваша совесть?",
  "У нас выходной!",
];

function getCurrentTime() {
  const time = new Date(Date.now());
  return `${time.getHours()}:${time.getMinutes()}`;
}

function addUserMessage(message) {
  const time = getCurrentTime();
  return `
    <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">${message}</div>
    </div>
  `;
}

function addBotMessage(message) {
  const time = getCurrentTime();
  return `
    <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">${message}</div>
    </div>   
    `;
}

function randomBotMess(botMessages) {
  return botMessages[Math.floor(Math.random() * botMessages.length)];
}

chatWidget.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
});

inputWidget.addEventListener("keydown", (event) => {
  if (event.code !== "Enter") {
    return;
  }
  if (inputWidget.value.length === 0) {
    return;
  }

  chatArea.innerHTML += addUserMessage(inputWidget.value);
  chatArea.innerHTML += addBotMessage(randomBotMess(botMessages));

  inputWidget.value = "";
  container.scrollTop = container.scrollHeight;
});

inputWidget.addEventListener("focus", () => {
  timeOut = setTimeout(() => {
    chatArea.innerHTML += addBotMessage("Есть вопрос?");
  }, 3000);
});

inputWidget.addEventListener("blur", () => {
  clearTimeout(timeOut);
});
