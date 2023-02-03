const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', onNameInputChange);

function onNameInputChange(event) {
  nameOutputEl.textContent = event.currentTarget.value.trim() || 'Anonymous';
}
