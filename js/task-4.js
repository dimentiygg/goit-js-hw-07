const form = document.querySelector('.login-form');
const button = document.querySelector('button');

function submitHandler(event) {
  event.preventDefault();
  if (event.target.email.value == 0 || event.target.password.value == 0)
    alert('All form fields must be filled in');
  else {
    const data = {
      email: event.target.email.value.trim(),
      password: event.target.password.value.trim(),
    };
    console.log(data);
    form.reset();
  }
}

form.addEventListener('submit', submitHandler);
