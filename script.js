const output = document.querySelector('output');
const outputWrapper = document.querySelector('.output-wrapper');
const button = document.querySelector('button');
const inputMinimum = document.getElementById('minInput');
const inputMaximum = document.getElementById('maxInput');
const errorText = document.getElementById('errorText');
const labels = document.querySelectorAll('label');

const iterableElements = [inputMaximum, inputMinimum, errorText, outputWrapper, ...labels];

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
  errorText.textContent = text;
  for (element of iterableElements) {
    element.classList.add('error');
  }
}

function resetError() {
  const hasError = iterableElements.some(element => element.classList.contains('error'));
  if (hasError) {
    for (element of iterableElements) {
        element.classList.remove('error');
    }
  }
  errorText.textContent = '';
}

function validateNumbers(min, max) {
  resetError();
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
