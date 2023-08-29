let inputs = document.querySelectorAll('input');
let label = document.querySelector('p');
let button = document.querySelector('button');

function onClick() {
  if (!inputsAreValidNumbers()) {
    label.textContent = 'Error: Uno o ambos inputs no son números.';
    return;
  }
  updateLabel();
}

function inputsAreValidNumbers() {
  return isNumber(getNumber1()) && isNumber(getNumber2());
}

function isNumber(value) {
  return !isNaN(value) && value !== '';
}

function updateLabel() {
  let addend1 = getNumber1();
  let addend2 = getNumber2();
  let sum = parseInt(addend1) + parseInt(addend2);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}

function getNumber1() {
  return inputs[0].value;
}

function getNumber2() {
  return inputs[1].value;
}

button.addEventListener('click', onClick);