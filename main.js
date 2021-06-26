const output = document.querySelector('output');
const button = document.querySelector('button');

function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

button.addEventListener('click', () => output.value = generateRandomNumber(0, 100));
