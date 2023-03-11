const inputEl = document.querySelector("#name-input");

const texEl = document.querySelector("#name-output");

inputEl.addEventListener("keyup", () => {
  if (inputEl.value) {
    texEl.textContent = inputEl.value;
  } else {
    texEl.textContent = "Anonymous";
  }
});
