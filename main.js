const output = document.querySelector('output');
const button = document.querySelector('button');
const inputMinimum = document.getElementById('minInput');
const inputMaximum = document.getElementById('maxInput');
const error = document.getElementById('errorText');

function submit() {
  const minValue = Number.parseFloat(inputMinimum.value);
  const maxValue = Number.parseFloat(inputMaximum.value);
  if (validateNumbers(minValue, maxValue)) {
    return generateRandomNumber(minValue, maxValue);
  }
}

function generateRandomNumber(min, max) {
  return output.value = Math.floor(Math.random() * (max - min + 1) + min);
}

function generateError(text) {
  output.value = '---';
  error.textContent = text;
}

function validateNumbers(min, max) {
  error.textContent = '';
  if (!(Number.isInteger(min) && Number.isInteger(max))) {
    generateError("Numbers must be integers.");
    return false;
  }
  if (min >= max) {
    generateError("Minimum number must be less than maximum number.");
    return false;
  }
  return true;
}

button.addEventListener('click', () => submit());
