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
        Validator.isWithin(value.length, 1, 50, ERROR_TEXT.IS_NOT_RANge1to50);

        return this.#brand = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        Validator.isString(value);
        Validator.isWithin(value.length, 1, 50, ERROR_TEXT.IS_NOT_RANge1to50);

        return this.#model = value;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 1900, new Date().getFullYear(), ERROR_TEXT.NOT_CORRECT_YEAR);

        return this.#yearOfManufacturing = value;
    }

    get maxSpeed() {
        return `${this.#maxSpeed} km/h`;
    }

    set maxSpeed(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 100, 300, ERROR_TEXT.IS_NOT_RANge100to300);

        return this.#maxSpeed = value;
    }

    get maxFuelVolume() {
        return `${this.#maxFuelVolume} liters`;
    }

    set maxFuelVolume(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 5, 20, ERROR_TEXT.IS_NOT_RANge5to20);

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
            throw new Error(ERROR_TEXT.IS_RAN);
        }

        return this.#isStarted = true;
    }

    shutDownEngine() {
        Validator.isBoolean(this.#isStarted);

        if (!this.#isStarted) {
            throw new Error(ERROR_TEXT.IS_NOT_RAN);
        }

        return this.#isStarted = false;
    }

    fillUpGasTank(value) {
        Validator.isNumber(value, ERROR_TEXT.IS_NOT_CORRECT_VALUE);
        Validator.isLess(value);
        Validator.isMore(this.#currentFuelVolume + value, this.#maxFuelVolume);

        return this.#currentFuelVolume += value;
    }

    drive(speed, hours) {
        const distance = speed * hours;
        const necessaryFuel = this.#fuelConsumption / 100 * distance;

        Validator.isNumber(speed, ERROR_TEXT.IS_NOT_CORRECT_SPEED);
        Validator.isLess(speed, 0, ERROR_TEXT.IS_NOT_CORRECT_SPEED);
        Validator.isNumber(hours, ERROR_TEXT.IS_NOT_CORRECT_HOURS);
        Validator.isLess(hours, 0, ERROR_TEXT.IS_NOT_CORRECT_HOURS);
        Validator.isMore(speed, this.#maxSpeed, ERROR_TEXT.IS_TOO_FAST);
        Validator.isMore(necessaryFuel, this.#currentFuelVolume, ERROR_TEXT.NOT_ENOUGH_FUEL);

        if (!this.#isStarted) {
            throw new Error(ERROR_TEXT.MUST_BE_STARTED);
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

    static isString(value, ERROR_TEXT = `not a string`) {
        if (typeof value !== 'string') {
            throw new Error(textError);
        }
    }

    static isNumber(value, textError = `not a number`) {
        if (!(Number.isFinite(value))) {
            throw new Error(textError);
        }
    }

    static isWithin(value, lowRange, upRange, textError = `is not in a range`) {
        if (value < lowRange || value > upRange) {
            throw new Error(textError);
        }
    }

    static isLess(value, current = 0, textError = ERROR_TEXT.IS_NOT_CORRECT_VALUE) {
        if (value <= current) {
            throw new Error(textError);
        }
    }

    static isMore(current, max, textError = ERROR_TEXT.TANK_IS_OVERWHELMED) {
        if (current > max) {
            throw new Error(textError);
        }
    }

    static isBoolean(value, textError = 'is not a boolean') {
        if (typeof value !== 'boolean') {
            throw new Error(textError);
        }
    }
}

const ERROR_TEXT = {
    IS_RAN: `the car has already started`,
    IS_NOT_RAN: `the car hasn't ran yet`,
    IS_NOT_CORRECT_VALUE: `Incorrect amount of fuel to refuel`,
    TANK_IS_OVERWHELMED: `tank is overwhelmed`,
    IS_NOT_CORRECT_SPEED: `incorrect speed`,
    IS_NOT_CORRECT_HOURS: `wrong number of hours`,
    IS_TOO_FAST: `the car can't go so fast`,
    MUST_BE_STARTED: `the car must be started to go`,
    NOT_ENOUGH_FUEL: `not enough fuel`,
    IS_NOT_RANge100to300: `max speed must be between 100 to 300 km/h`,
    IS_NOT_RANge1to50: `it must be between 1 to 50 characters`,
    IS_NOT_RANge5to20: `it must be between 5 to 20 characters`,
    NOT_CORRECT_YEAR: `it must be between 1900 to current year`
}