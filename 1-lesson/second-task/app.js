'use strict'

function returnValue() {
    const FIRST_INPUT = (prompt('Please input the first number', ''));

    if (isValid(FIRST_INPUT)) {
        const SECOND_INPUT = (prompt('Please input the second number', ''));

        if (isValid(SECOND_INPUT)) {
            const FIRST_VALUE = Number(FIRST_INPUT);
            const SECOND_VALUE = Number(SECOND_INPUT);

            console.log(`${FIRST_VALUE + SECOND_VALUE}, ${FIRST_VALUE / SECOND_VALUE}`)
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
        if (parseFloat(value)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
};
