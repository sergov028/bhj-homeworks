const hasTooltips = document.querySelectorAll(".has-tooltip");

hasTooltips.forEach((item) => {
  const tooltip = document.createElement("div");
  tooltip.textContent = item.title;

  item.addEventListener("click", (event) => {
    event.preventDefault();

    tooltip.classList.add("tooltip");
    item.insertAdjacentElement("beforebegin", tooltip);

    tooltip.style.left = `${item.getBoundingClientRect().left}px`;
    tooltip.style.top = `${item.getBoundingClientRect().bottom}px`;

    const activeTooltips = Array.from(
      document.querySelectorAll(".tooltip_active")
    );
    const activeElem = activeTooltips.find((elem) =>
      elem.classList.contains("tooltip_active")
    );
    if (activeElem === undefined) {
      tooltip.classList.add("tooltip_active");
    } else {
      if (activeElem !== tooltip) {
        tooltip.classList.add("tooltip_active");
      }
      activeElem.classList.toggle("tooltip_active");
    }
  });
});
