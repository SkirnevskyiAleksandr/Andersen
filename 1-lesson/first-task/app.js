
'use strict'
function returnValue() {
    const FIRST_INPUT = prompt('Please input the first number', ""),
        SECOND_INPUT = prompt('Please input the second number', "")

    if (isValid(FIRST_INPUT) && isValid(SECOND_INPUT)) {
        let firstValue = Number(FIRST_INPUT);
        let secondValue = Number(SECOND_INPUT);

        return console.log(firstValue.toString(secondValue));
    } else {
        return console.log('Некорректный ввод!');
    }
};

returnValue();


function isValid(value) {
    if (!isNull(value)) {
        if (!isSpace(value)) {
            if (isNumber(value)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
};

function isNull(value) {
    if (value === null) {
        return true;
    } else {
        return false;
    }
};

function isSpace(value) {
    if (value.includes(' ')) {
        return true;
    } else {
        return false;
    }
};

function isNumber(value) {
    if (value != '0') {
        if (parseInt(value)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
};