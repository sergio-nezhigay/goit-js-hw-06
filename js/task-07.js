const fontSizeSontrolEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeSontrolEl.addEventListener('input', onfontSizeInput);

function onfontSizeInput(event) {
  console.log(event.target.value);
  textEl.style.fontSize = event.target.value + 'px';
}
