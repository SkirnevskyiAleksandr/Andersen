'use strict'

function returnValue() {
    const firstInput = (prompt('Please input the first number', ''));

    if (!isValid(firstInput)) {
        return console.log('Некорректный ввод!');
    }

    const secondInput = (prompt('Please input the second number', ''));

    if (!isValid(secondInput)) {
        return console.log('Некорректный ввод!');
    }

    const firstValue = Number(firstInput);
    const secondValue = Number(secondInput);

    return console.log(`${firstValue + secondValue}, ${firstValue / secondValue}`)
};

returnValue();

function isValid(value) {
    return !isNull(value) && !isSpace(value) && isNumber(value)
}

function isNull(value) {
    return value === null
};

function isSpace(value) {
    return value.includes(' ')
};

function isNumber(value) {
    return value === '0' || parseFloat(value)
}
