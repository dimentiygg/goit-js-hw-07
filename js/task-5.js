function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button');
const body = document.querySelector('body');
const text = document.querySelector('.color');

function clickHandler() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  text.textContent = randomColor;
}

button.addEventListener('click', clickHandler);
