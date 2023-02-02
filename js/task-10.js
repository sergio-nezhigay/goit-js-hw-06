const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('div#boxes');
const inputNumberEl = document.querySelector('input[type="number"]');

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

function createBoxes() {
  const numberOfBoxes = inputNumberEl.value;
  if (!numberOfBoxes) {
    alert('You need to choose number of boxes first...');
    return;
  }
  let boxesString = '';
  for (let size = 30, i = 0; i < numberOfBoxes; i++, size += 10) {
    boxesString += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>\n`;
  }
  divBoxesEl.insertAdjacentHTML('beforeend', boxesString);
  inputNumberEl.value = 0; /* reset old Box number value */
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
