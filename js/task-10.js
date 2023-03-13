const form = document.querySelector("#controls");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[ data-destroy]");
const divBoxes = document.querySelector("#boxes");

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
buttonCreate.addEventListener("click", getAmount);
function getAmount() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}
function createBoxes(amount) {
  const divElemens = [];
  console.log(divElemens);
  for (let i = 1; i <= amount; i += 1) {
    let value = i * 10 + 20;
    const divEL = document.createElement("div");
    divEL.style.width = value + "px";
    divEL.style.height = value + "px";
    divEL.style.backgroundColor = getRandomHexColor();
    divElemens.push(divEL);
  }

  divBoxes.append(...divElemens);
  console.log(divBoxes)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
