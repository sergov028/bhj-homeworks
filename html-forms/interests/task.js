const interestCheck = document.querySelectorAll(".interest__check");

// function funcChange(event) {
//   const checkbox = event.target;
//   console.log(checkbox);

//   const childCheckboxes = checkbox
//     .closest(".interest")
//     .querySelectorAll(".interest__check");

//   childCheckboxes.forEach((childCheckbox) => {
//     if (childCheckbox.checked !== checkbox.checked) {
//       childCheckbox.checked = checkbox.checked;
//     }
//   });
// }
// interestCheck.forEach((checkbox) => {
//     checkbox.addEventListener("change", funcChange);
//   });

//Расширенный вариант

function funcChange(event) {
  const checkbox = event.target;

  changeChildCheckboxes(checkbox);
  changeParentCheckboxes(checkbox);
}

function changeChildCheckboxes(check) {
  const childCheckboxes = check
    .closest(".interest")
    .querySelectorAll(".interest__check");

  childCheckboxes.forEach((childCheckbox) => {
    if (childCheckbox.checked !== check.checked) {
      childCheckbox.checked = check.checked;
      changeChildCheckboxes(check);
    }
  });
}

function changeParentCheckboxes(check) {
  const parentEl = check.closest(".interest").parentNode.closest(".interest");

  if (!parentEl) {
    return;
  }

  const parentCheckbox = parentEl.querySelector(".interest__check");
}

interestCheck.forEach((checkbox) => {
  checkbox.addEventListener("change", funcChange);
});
