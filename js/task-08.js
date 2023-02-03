const formLoginFormEl = document.querySelector('form.login-form');

formLoginFormEl.addEventListener('submit', onFormLoginSubmit);

function onFormLoginSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  if (email.value === '' || password.value.trim() === '') {
    alert('Please fill in all the fields!');
    return console.log('Please fill in all the fields!');
  }
  const result = {
    email: email.value,
    password: password.value,
  };
  console.log('Form data object: ', result);
  event.currentTarget.reset();
}
