const validationInputEl = document.querySelector('#validation-input');

const switchClasses = (element, classToAdd, classToRemove) => {
  element.classList.add(classToAdd);
  element.classList.remove(classToRemove);
};

const onInputBlur = event => {
  if (+event.currentTarget.value.length === +event.currentTarget.dataset.length)
    switchClasses(validationInputEl, 'valid', 'invalid');
  else {
    switchClasses(validationInputEl, 'invalid', 'valid');
  }
};

validationInputEl.addEventListener('blur', onInputBlur);
