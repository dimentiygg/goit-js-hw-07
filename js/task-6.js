function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const div = document.querySelector('#boxes');

function clickHandler() {
  return input.value;
}

createButton.addEventListener('click', function () {
  createBoxes(clickHandler(), getRandomHexColor());
  input.value = '';
});

function Destroy() {
  div.innerHTML = '';
}

destroyButton.addEventListener('click', Destroy);

let boxes = [];
let width = 20;
let height = 20;
function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const randomColor = getRandomHexColor();
      boxes.push(document.createElement('div'));
      boxes[i].style.width = `${(width += 10)}px`;
      boxes[i].style.height = `${(height += 10)}px`;
      boxes[i].style.backgroundColor = randomColor;
    }
    div.append(...boxes);
  }
}
