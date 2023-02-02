const buttonChangeColorEl = document.querySelector('button.change-color');
const spanColorEl = document.querySelector('span.color');
const bodyEl = document.querySelector('body');

buttonChangeColorEl.addEventListener('click', onButtonChangeColorClick);

function onButtonChangeColorClick() {
  const randomHexColor = getRandomHexColor();
  spanColorEl.textContent = randomHexColor;
  bodyEl.style.backgroundColor = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
