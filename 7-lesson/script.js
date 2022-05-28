'use strict'

const buttonsWrapper = document.querySelector('.buttons');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const bookMark = document.querySelector('[data-bookmark]');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }

        if (number === '.') {
            this.currentOperand = this.currentOperand + number
            return;
        }

        this.currentOperand = this.currentOperand + number;
        this.currentOperand = parseFloat(Number(this.currentOperand).toFixed(8)).toString();
    }



    chooseOperation(operation) {
        if (this.currentOperand === '') {
            return;
        }

        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (Number.isNaN(prev) || Number.isNaN(current)) {
            return;
        }

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

        this.currentOperand = computation.toFixed(8);
        this.operation = '';
        this.previousOperand = '';
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

bookMark.addEventListener('click', (event) => {
    if (localStorage.key(0) !== 'bookMark') {
        event.preventDefault()
        localStorage.setItem('bookMark', document.location)
        bookMark.innerHTML = `добавлено в localstorege, для перехода, нажмите еще раз`

        return;
    }

    bookMark.innerHTML = `добавлено в localstorege, для перехода, нажмите еще раз`;
    window.open(localStorage.getItem('bookMark'));
})

if (localStorage.key(0) === 'bookMark') {
    bookMark.innerHTML = `добавлено в localstorege, для перехода, нажмите еще раз`;
}


//bookmarks

// function bookmark(title, url) {
//     if (window.sidebar) {
//         // Firefox
//         window.sidebar.addPanel(title, url, '');
//     }
//     else if (window.opera && window.print) {
//         // Opera
//         var elem = document.createElement('a');
//         elem.setAttribute('href', url);
//         elem.setAttribute('title', title);
//         elem.setAttribute('rel', 'sidebar');
//         elem.click(); //this.title=document.title;
//     }
//     else if (document.all) {
//         // ie
//         window.external.AddFavorite(url, title);
//     }
// }

