const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
let operator = '';
let operand1 = '';
let operand2 = '';

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let value = this.getAttribute('value');

    if (value === 'clear') {
      display.value = '';
      operator = '';
      operand1 = '';
      operand2 = '';
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
      operand1 = display.value;
      display.value = '';
    } else if (value === '=') {
      operand2 = display.value;
      display.value = eval(operand1 + operator + operand2);
      operator = '';
      operand1 = '';
      operand2 = '';
    } else {
      display.value += value;
    }
  });
}
