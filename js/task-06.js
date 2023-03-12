const onInput = document.querySelector("#validation-input");
const inputLength = document.querySelector('[data-length="6"]');
let stringLength = Number(inputLength.dataset.length);

console.log(stringLength);
onInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === stringLength) {
    onInput.classList.add("valid");
    onInput.classList.remove("invalid");
  } else {
    onInput.classList.add("invalid");
    onInput.classList.remove("valid");
  }

  console.log(stringLength);
}
