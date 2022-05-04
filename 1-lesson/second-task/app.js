'use strict'

function returnValue() {
    let firstInput = (prompt('Please input the first number', ''));

    if (isValid(firstInput)) {
        let secondInput = (prompt('Please input the second number', ''));

        if (isValid(secondInput)) {
            let firstValue = Number(firstInput);
            let secondValue = Number(secondInput);

            console.log(`${firstValue + secondValue}, ${firstValue / secondValue}`)
        } else {
            return console.log('Некорректный ввод!');
        }
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
