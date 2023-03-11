const onInput = document.querySelector("#validation-input");
const inputLength = document.querySelector('[data-length="6"]');
const stringLength = Number(inputLength.dataset.length);

console.log(stringLength);
onInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === stringLength) {
    onInput.classList.add("valid");
  } else {
    onInput.classList.add("invalid");
  }
  console.log(event.currentTarget.value.length);
}
