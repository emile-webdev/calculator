// --- GLOBAL VARIABLES --- //
const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const display3 = document.querySelector('.display-3');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearAll = document.querySelector('.clear-all');
const clearEntry = document.querySelector('.clear-entry');

let valueDisplay1 = '';
let valueDisplay2 = '';
let lastOperator = '';
let result = null;
let dot = false;

// --- NUMBER BUTTON FUNCTION --- //
number.forEach((number) => {
    number.addEventListener('click', (e) => {
        // --- Check for more than one dot --- //
        if(e.target.innerText === '.' && !dot) {
            dot = true;
        } else if(e.target.innerText === '.' && dot) {
            return;
        }
        // --- Show numbers in display 2 --- //
        valueDisplay2 += e.target.innerText;
        display2.innerText = valueDisplay2;
    })
});

// --- OPERATOR BUTTON FUNCTION --- //
operator.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        // --- Check if display 2 is present or not --- //
        if(!valueDisplay2) result;
            dot = false;
            const operationType = e.target.innerText;
        // --- Calculate if have display 1, display 2 and last operator --- //
        if(valueDisplay1 && valueDisplay2 && lastOperator) {
            calculate();
        } else {
            result = parseFloat(valueDisplay2);
        }
        clearDisplay(operationType);
        lastOperator = operationType;
    })
});

// --- CLEAR DISPLAY FUNCTION --- //
function clearDisplay(type = '') {
    // --- Store number from display 2 in display 1 --- //
    valueDisplay1 += valueDisplay2 + ' ' + type + ' ';
    display1.innerText = valueDisplay1;
    // --- Clear display 2 --- //
    display2.innerText = '';
    valueDisplay2 = '';
    // --- Store temporary result in display 3 --- //
    display3.innerText = result;
}

// --- CALCULATE FUNCTION --- //
function calculate() {
    if(lastOperator === '*') {
        result = parseFloat(result) * parseFloat(valueDisplay2);
    } else if(lastOperator === '%') {
        result = parseFloat(result) % parseFloat(valueDisplay2);
    } else if(lastOperator === '+') {
        result = parseFloat(result) + parseFloat(valueDisplay2);
    } else if(lastOperator === '-') {
        result = parseFloat(result) - parseFloat(valueDisplay2);
    } else if(lastOperator === '/') {
        result = parseFloat(result) / parseFloat(valueDisplay2);
        if(result == 'Infinity') {
            return alert('Error! You cannot divide by zero!');
        }
    } 
}

// --- 'EQUAL' BUTTON FUNCTION --- //
equal.addEventListener('click', (e) => {
    if(!valueDisplay1 || !valueDisplay2) return;
    dot = false;
    calculate();
    clearDisplay();
    display2.innerText = result;
    // --- Show final result in display 2 and clear other displays --- //
    display3.innerText = '';
    valueDisplay2 = result;
    valueDisplay1 = '';
});

// --- 'CLEAR ALL' BUTTON FUNCTION --- //
clearAll.addEventListener('click', (e) => {
    display1.innerText = '';
    display2.innerText = '0';
    display3.innerText = '';
    valueDisplay1 = '';
    valueDisplay2 = '';
    result = '';
});

// --- 'CLEAR ENTRY' BUTTON FUNCTION --- //
clearEntry.addEventListener('click', (e) => {
    display2.innerText = '';
    valueDisplay2 = '';
});
