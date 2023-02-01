const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');
let counterValue = 0;

decrementButtonEl.addEventListener('click', onDecrementButton);
incrementButtonEl.addEventListener('click', onIncrementButton);

function onDecrementButton() {
  valueEl.textContent = --counterValue;
}

function onIncrementButton() {
  valueEl.textContent = ++counterValue;
}
