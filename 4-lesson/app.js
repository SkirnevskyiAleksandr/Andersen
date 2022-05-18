'use strict'

// //first task
function concatStrings(first, separator) {
    if (!isString(first)) {
        return;
    }

    function nestedFunction(second) {
        if (!isString(second)) {
            return first;
        }

        if (!isString(separator)) {
            separator = '';
        }

        first += separator + second;

        return nestedFunction;
    }

    return nestedFunction;
}

function isString(value) {
    return typeof value === 'string';
}


// second task

class Calculator {
    constructor(...theArgs) {
        this.firstNumber = theArgs[0];
        this.secondNumber = theArgs[1];
        this.theArgs = theArgs;
    }
    isValue = () => {
        return (this.theArgs.length === 2 && Number.isFinite(this.firstNumber)
            && Number.isFinite(this.secondNumber));
    }
    setX = (num) => {
        if (!Number.isFinite(num)) {
            throw new Error(`you should enter valid number!`);
        }
        return this.firstNumber = num;
    }
    setY = (num) => {
        if (!Number.isFinite(num)) {
            throw new Error(`you should enter valid number!`);
        }
        return this.secondNumber = num;
    }
    logSum = () => {
        console.log(this.firstNumber + this.secondNumber);
    }
    logMul = () => {
        console.log(this.firstNumber * this.secondNumber);
    }
    logSub = () => {
        console.log(this.firstNumber - this.secondNumber);
    }
    logDiv = () => {
        if (!this.isValue() || this.secondNumber === 0) {
            throw new Error(`please enter two valid numbers (second argument shouldn't be a zero)`);
        }
        console.log(this.firstNumber / this.secondNumber);
    }
}

