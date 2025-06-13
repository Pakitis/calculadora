let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function operate(operator) {
  if (currentInput !== '') {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
  }
}

function calculate() {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
}

