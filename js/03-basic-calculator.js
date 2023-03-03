// IMPORT THE MODULE
import {add, substract, multiply, divide} from './modules/calculator.js';

// COLLECT FIRST NUMBER FROM USER
let firstNum = parseInt(prompt('Please, enter your first number.'));

// COLLECT SECOND NUMBER FROM USER
let secondNum = parseInt(prompt('Please, enter your second number.'));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt('What operation do you want to do? (+, -, *, /)')

// CHECK TO SEE WHAT OPERATION THEY'RE USING

switch (operation) {
    case '+':
        result = add(firstNum, secondNum)
        break
    case '-':
        result = substract(firstNum, secondNum)
        break
    case '*':
        result = multiply(firstNum. secondNum)
        break
    case '/':
        result = divide(firstNum, secondNum)    
        break
    default:
        alert('You didn\'t choose the correct operation. Please, choose again.')
        break;
}
// CALL THE APPROPRIATE FUNCTION
add(firstNum, secondNum);
substract(firstNum, secondNum);
multiply(firstNum, secondNum);
divide(firstNum, secondNum);