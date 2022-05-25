'use strict'
class Car {
    #brand = 'no brand yet';
    #model = 'no model yet';
    #yearOfManufacturing;
    #maxSpeed = 0;
    #maxFuelVolume = 0;
    #fuelConsumption = 0;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        Validator.isString(value);
        Validator.isWithin(value.length, 1, 50, ErrorText.isNotRange1to50);

        return this.#brand = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        Validator.isString(value);
        Validator.isWithin(value.length, 1, 50, ErrorText.isNotRange1to50);

        return this.#model = value;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 1900, new Date().getFullYear(), ErrorText.isNotCorrectYear);

        return this.#yearOfManufacturing = value;
    }

    get maxSpeed() {
        return `${this.#maxSpeed} km/h`;
    }

    set maxSpeed(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 100, 300, ErrorText.isNotRange100to300);

        return this.#maxSpeed = value;
    }

    get maxFuelVolume() {
        return `${this.#maxFuelVolume} liters`;
    }

    set maxFuelVolume(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 5, 20, ErrorText.isNotRange5to20);

        return this.#maxFuelVolume = value;
    }

    get fuelConsumption() {
        return `${this.#fuelConsumption} l/100km`;
    }

    set fuelConsumption(value) {
        Validator.isNumber(value);

        return this.#fuelConsumption = value;
    }

    get currentFuelVolume() {
        return `${this.#currentFuelVolume} liters`;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return `${this.#mileage} km`;
    }

    start() {
        Validator.isBoolean(this.#isStarted);

        if (this.#isStarted) {
            throw new Error(ErrorText.isRan);
        }

        return this.#isStarted = true;
    }

    shutDownEngine() {
        Validator.isBoolean(this.#isStarted);

        if (!this.#isStarted) {
            throw new Error(ErrorText.isNotRan);
        }

        return this.#isStarted = false;
    }

    fillUpGasTank(value) {
        Validator.isNumber(value, ErrorText.isNotCorrectFuelValue);
        Validator.isLas(value);
        Validator.isMore(this.#currentFuelVolume + value, this.#maxFuelVolume);

        return this.#currentFuelVolume += value;
    }

    drive(speed, hours) {
        const distance = speed * hours;
        const necessaryFuel = this.#fuelConsumption / 100 * distance;

        Validator.isNumber(speed, ErrorText.isNotCorrectSpeed);
        Validator.isLas(speed, 0, ErrorText.isNotCorrectSpeed);
        Validator.isNumber(hours, ErrorText.isNotCorrectHours);
        Validator.isLas(hours, 0, ErrorText.isNotCorrectHours);
        Validator.isMore(speed, this.#maxSpeed, ErrorText.isTooFast);
        Validator.isMore(necessaryFuel, this.#currentFuelVolume, ErrorText.isNotEnoughFuel);

        if (!this.#isStarted) {
            throw new Error(ErrorText.isMustBeStarted);
        }

        this.#currentFuelVolume = this.#maxFuelVolume - necessaryFuel;
        this.#maxFuelVolume -= necessaryFuel;
        this.#mileage += distance;
    }

}
class Validator {
    constructor(value, bigger, smaller) {
        this.value = value;
        this.bigger = bigger;
        this.smaller = smaller;
    }

    static isString(value, errorText = `not a string`) {
        if (typeof value !== 'string') {
            throw new Error(errorText);
        }
    }

    static isNumber(value, errorText = `not a number`) {
        if (!(Number.isFinite(value))) {
            throw new Error(errorText);
        }
    }

    static isWithin(value, lowRange, upRange, errorText = `is not in a range`) {
        if (value < lowRange || value > upRange) {
            throw new Error(errorText);
        }
    }

    static isLas(value, current = 0, errorText = ErrorText.isNotCorrectFuelValue) {
        if (value <= current) {
            throw new Error(errorText);
        }
    }

    static isMore(current, max, errorText = ErrorText.tankIsOverwhelmed) {
        if (current > max) {
            throw new Error(errorText);
        }
    }

    static isBoolean(value, errorText = 'is not a boolean') {
        if (typeof value !== 'boolean') {
            throw new Error(errorText);
        }
    }
}
class ErrorText {
    static isRan = `the car has already started`;
    static isNotRan = `the car hasn't ran yet`;
    static isNotCorrectFuelValue = `Incorrect amount of fuel to refuel`;
    static tankIsOverwhelmed = `tank is overwhelmed`;
    static isNotCorrectSpeed = `incorrect speed`;
    static isNotCorrectHours = `wrong number of hours`;
    static isTooFast = `the car can't go so fast`;
    static isMustBeStarted = `the car must be started to go`;
    static isNotEnoughFuel = `not enough fuel`;
    static isNotRange100to300 = `max speed must be between 100 to 300 km/h`;
    static isNotRange1to50 = `it must be between 1 to 50 characters`;
    static isNotRange5to20 = `it must be between 5 to 20 characters`;
    static isNotCorrectYear = `it must be between 1900 to current year`;
}