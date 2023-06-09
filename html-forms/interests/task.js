const interestCheck = document.querySelectorAll(".interest__check");

function funcChange(event) {
  const checkbox = event.target;
  console.log(checkbox);

  const childCheckboxes = checkbox
    .closest(".interest")
    .querySelectorAll(".interest__check");

  childCheckboxes.forEach((childCheckbox) => {
    if (childCheckbox.checked !== checkbox.checked) {
      childCheckbox.checked = checkbox.checked;
    }
  });
}
interestCheck.forEach((checkbox) => {
  checkbox.addEventListener("change", funcChange);
});
