const progress = document.getElementById("progress");
const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", (event) => {
  const formData = new FormData(document.getElementById("form"));
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
    console.log(event);
  };
  xhr.send(formData);
  event.preventDefault();
});
