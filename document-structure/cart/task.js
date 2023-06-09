const cartProducts = document.querySelector(".cart__products");
const productAddBtn = document.querySelectorAll(".product__add");
const quantityBtn = document.querySelectorAll(".product__quantity-control");

quantityBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    const value = elem.closest(".product__quantity-controls");
    const count = value.querySelector(".product__quantity-value");

    if (elem.classList.contains("product__quantity-control_inc")) {
      count.textContent++;
    } else if (
      elem.classList.contains("product__quantity-control_dec") &&
      count.textContent > 1
    ) {
      count.textContent--;
    }
  });
});

productAddBtn.forEach((item) => {
  item.addEventListener("click", () => {
    const prod = item.closest(".product");
    const count = prod.querySelector(".product__quantity-value");
    const srcImg = prod.querySelector(".product__image").src;
    const id = prod.getAttribute("data-id");

    const productId = Array.from(cartProducts.children).find(
      (el) => el.getAttribute("data-id") === id
    );

    if (!productId) {
      cartProducts.insertAdjacentHTML(
        "beforeEnd",
        `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src=${srcImg}><div class="cart__product-count">${count.textContent}</div></div>`
      );
    } else {
      const cartProductCount = productId.querySelector(".cart__product-count");
      cartProductCount.textContent =
        +cartProductCount.textContent + +count.textContent;
    }
  });
});
