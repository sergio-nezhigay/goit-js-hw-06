const validationInputEl = document.querySelector('#validation-input');

const onInputBlur = event => {
  if (+event.currentTarget.value.length === +event.currentTarget.dataset.length) {
    validationInputEl.classList.add('valid');
    validationInputEl.classList.remove('invalid');
  } else {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  }
};

validationInputEl.addEventListener('blur', onInputBlur);
