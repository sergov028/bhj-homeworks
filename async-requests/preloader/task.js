const loader = document.getElementById("loader");
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    loader.classList.remove("loader_active");

    const json = JSON.parse(xhr.response);
    const valutes = json.response["Valute"];

    for (elem in valutes) {
      createItem(valutes[elem].CharCode, valutes[elem].Value);
    }
  }
};

function createItem(code, value) {
  const item = document.createElement("div");
  item.classList.add("item");

  const itemCode = document.createElement("div");
  itemCode.classList.add("item__code");

  const itemValue = document.createElement("div");
  itemValue.classList.add("item__value");

  itemCode.textContent = code;
  itemValue.textContent = value;

  item.appendChild(itemCode);
  item.appendChild(itemValue);
  items.appendChild(item);
}
