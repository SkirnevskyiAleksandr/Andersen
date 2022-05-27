'use strict'

const buttonsWrapper = document.querySelector('.buttons');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const signChangeOperator = document.querySelector('[data-change-number]');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }

        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') {
            return;
        }

        if (TouchEvent.previousOperand !== "") {
            this.compute()
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case 'x':
                computation = prev * current
                break;
            case '÷':
                if (current === 0) {
                    computation = `на ноль делить нельзя`
                    break;
                }

                computation = prev / current
                break;

            default:
                return;
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    signChange() {
        if (this.operation !== "-" && this.operation !== "+" || this.previousOperand === '0') {
            return;
        }

        if (this.operation === '-') {
            this.operation = '+'
            return;
        }

        this.operation = '-';
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;

        if (this.operation !== null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        }
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


buttonsWrapper.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-number')) {
        calculator.appendNumber(event.target.innerText)
        calculator.updateDisplay()

        return;
    }

    if (event.target.hasAttribute('data-operation')) {
        calculator.chooseOperation(event.target.innerText)
        calculator.updateDisplay()

        return;
    }

    if (event.target.hasAttribute('data-change-number')) {
        calculator.signChange()
        calculator.updateDisplay()

        return;
    }

    if (event.target.hasAttribute('data-equals')) {
        calculator.compute()
        calculator.updateDisplay()

        return;
    }

    if (event.target.hasAttribute('data-equals')) {
        calculator.compute()
        calculator.updateDisplay()

        return;
    }

    if (event.target.hasAttribute('data-all-clear')) {
        calculator.clear()
        calculator.updateDisplay()

        return;
    }

    if (event.target.hasAttribute('data-delete')) {
        calculator.delete()
        calculator.updateDisplay()

        return;
    }
})
