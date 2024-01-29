const input = document.querySelector('input');
const title = document.querySelector('#name-output');

function handler(event) {
  const inputValue = event.target.value.trim();
  if (inputValue === '') {
    title.textContent = 'Anonymous';
  } else {
    title.textContent = inputValue;
  }
}

input.addEventListener('input', handler);
