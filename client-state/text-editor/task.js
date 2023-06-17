const editor = document.getElementById("editor");

editor.value = localStorage.getItem("textValue");
editor.addEventListener("keyup", (event) => {
  localStorage.textValue = editor.value;
});

const btnClear = document.querySelector(".btn_clear");
btnClear.addEventListener("click", () => {
  localStorage.removeItem("textValue");
  editor.value = "";
});
