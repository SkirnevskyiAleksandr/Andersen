
'use strict'
function returnValue() {
    const FIRST_INPUT = prompt('Please input the first number', ""),
        SECOND_INPUT = prompt('Please input the second number', "")

    if (isValid(FIRST_INPUT) && isValid(SECOND_INPUT)) {
        const FIRST_VALUE = Number(FIRST_INPUT);
        const SECOND_VALUE = Number(SECOND_INPUT);

        return console.log(FIRST_VALUE.toString(SECOND_VALUE));
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