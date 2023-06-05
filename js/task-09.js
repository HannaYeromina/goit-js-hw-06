function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

changeColor.addEventListener("click", event => {
  const colorValue = getRandomHexColor();
  document.body.style.backgroundColor = colorValue;
  spanColor.textContent = colorValue;
});
 