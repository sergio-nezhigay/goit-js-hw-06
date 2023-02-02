const formLoginFormEl = document.querySelector('form.login-form');

formLoginFormEl.addEventListener('submit', onFormLoginSubmit);

function onFormLoginSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  if (email.value === '' || password.value === '') {
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

// function onFormLoginSubmit(event) {
//     event.preventDefault();

//     var formData = new FormData(event.target);
//     for (let pair of formData.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//       if (!pair[1]) {
//         // Checking if the filed value is empty
//         alert('Please fill in all the fields!');
//         return console.log('Please fill in all the fields!');
//       }
//     }
//     event.currentTarget.reset();
//   }
