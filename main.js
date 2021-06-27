const output = document.querySelector('output');
const button = document.querySelector('button');
const inputMinimum = document.getElementById('minInput');
const inputMaximum = document.getElementById('maxInput');
const error = document.getElementById('error');

function submit() {
  const minValue = Number.parseInt(inputMinimum.value);
  const maxValue = Number.parseInt(inputMaximum.value);
  const isValid = minValue < maxValue;

  return isValid ? generateRandomNumber(minValue, maxValue) : generateError();
}

function generateRandomNumber(min, max) {
  error.classList.add('hidden');
  output.value = Math.round(Math.random() * (max - min) + min);
}

function generateError() {
  output.value = '---';
  error.classList.remove('hidden');
}

button.addEventListener('click', () => submit());
