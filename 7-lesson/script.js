'use strict'

const buttonsWrapper = document.querySelector('.buttons');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const bookMark = document.querySelector('[data-bookmark]');
const memoryOutput = document.querySelector('[data-memory-output]');
const memoryBufferBtn = document.querySelector('[data-memory-buffer]')

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

        if (number === '-') {

            if (this.currentOperand === '-') {
                return;
            }

            this.currentOperand = number
            return;
        }

        this.currentOperand = this.currentOperand + number
        this.currentOperand = parseFloat(Number(this.currentOperand).toFixed(8)).toString()
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

        this.currentOperand = parseFloat(Number(computation).toFixed(8)).toString()
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

    if (event.target.hasAttribute('data-minus')) {

        if (currentOperandTextElement.innerText !== '' && currentOperandTextElement.innerText !== '-') {
            calculator.chooseOperation(event.target.innerText)
            calculator.updateDisplay()

            return;
        }

        calculator.appendNumber(event.target.innerText)
        calculator.updateDisplay()
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

    if (event.target.hasAttribute('data-m+')) {
        const tempStorage = localStorage.getItem('1');

        if (tempStorage === null) {
            localStorage.setItem('1', currentOperandTextElement.innerText)
            memoryOutput.innerText = localStorage.getItem('1')

            return;
        }

        localStorage.setItem('1', Number(tempStorage) + Number(currentOperandTextElement.innerText))
        memoryOutput.innerText = localStorage.getItem('1')
    }

    if (event.target.hasAttribute('data-m-')) {
        const tempStorage = localStorage.getItem('1');

        if (tempStorage === null) {
            localStorage.setItem('1', `-${currentOperandTextElement.innerText}`)
            memoryOutput.innerText = localStorage.getItem('1')

            return;
        }

        localStorage.setItem('1', Number(tempStorage) - Number(currentOperandTextElement.innerText))
        memoryOutput.innerText = localStorage.getItem('1')
    }

    if (event.target.hasAttribute('data-mc')) {
        localStorage.removeItem('1')
        memoryOutput.innerText = localStorage.getItem('1')
    }

    if (event.target.hasAttribute('data-mr')) {
        currentOperandTextElement.innerText = localStorage.getItem('1')
        calculator.appendNumber(currentOperandTextElement.innerText)
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

// function bookmark(ua) {
//     const title = document.title;
//     const url = document.location;
//     window.external.AddFavorite(url, title)
//     window.sidebar.addPanel(title, url, "")
//     typeof opera === 'object'
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

// function AddToFavorites(siteTitle, siteURL) {
//     if (window.sidebar) {
//         window.sidebar.addPanel(siteTitle, siteURL, "");
//     }
//     else if (document.all) {
//         window.external.AddFavorite(siteURL, siteTitle);
//     }
//     else if (window.opera && window.print) {
//         return true;
//     }
// }

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