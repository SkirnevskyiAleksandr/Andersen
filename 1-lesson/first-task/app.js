
'use strict'
function returnValue() {
    const firstInput = prompt('Please input the first number', "");
    const secondInput = prompt('Please input the second number', "");

    if (!isValid(firstInput) || !isValid(secondInput)) {
        return console.log('Некорректный ввод!');
    }

    const firstValue = Number(firstInput);
    const secondValue = Number(secondInput);

    return console.log(firstValue.toString(secondValue));
};

returnValue();


function isValid(value) {
    return !isNull(value) && !isSpace(value) && isNumber(value)
};

function isNull(value) {
    return value === null;
};

function isSpace(value) {
    return value.includes(' ')
};

function isNumber(value) {
    return (value === '0') || (parseFloat(value))
};
