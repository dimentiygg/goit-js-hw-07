const input = document.querySelector('input');
const title = document.querySelector('#name-output');

function handler(event) {
  if (event.target.value == 0) title.textContent = 'Anonymous';
  else title.textContent = event.target.value.trim();
}

input.addEventListener('input', handler);
