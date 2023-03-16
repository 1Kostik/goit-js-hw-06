const button = document.querySelector(".change-color");
button.addEventListener("click", onButtonClick);
const bgColor = document.querySelector(".color");
const body = document.body;

function onButtonClick() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  body.style.backgroundColor = getRandomHexColor();
  console.log(body.style.backgroundColor)

  bgColor.textContent = `${body.style.backgroundColor}`;
  
}
