const inputEl = document.querySelector("#font-size-control");

const changeFontsize = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  let size = event.target.value;
  changeFontsize.style.fontSize = size + "px";
  console.log(size);
}
