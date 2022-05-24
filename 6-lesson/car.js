'use strict'
class Car {
    #brand = 'no brand yet';
    #model = 'no model yet';
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        Validator.isString(value);
        Validator.isWithin(value.length, 1, 50);

        return this.#brand = value;
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        Validator.isString(value);
        Validator.isWithin(value.length, 1, 50);

        return this.#model = value;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 1900, new Date().getFullYear());

        return this.#yearOfManufacturing = value;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 100, 300);

        return this.#maxSpeed = `${value} km/h`;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(value) {
        Validator.isNumber(value);
        Validator.isWithin(value, 5, 20);

        return this.#maxFuelVolume = `${value} liters`;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(value) {
        Validator.isNumber(value);

        return this.#fuelConsumption = `${value} l/100km`;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    // set currentFuelVolume(value) {
    //     Validator.isNumber(value);

    //     return this.#currentFuelVolume = `${value} liters`
    // }

    get isStarted() {
        return this.#isStarted;
    }

    // set isStarted(value) {
    //     Validator.isBoolean(value);

    //     return this.#isStarted = value;
    // }

    get mileage() {
        return this.#mileage;
    }

    // set mileage(value) {
    //     Validator.isNumber(value);

    //     return this.#mileage = `${value} km/h`;
    // }


    start() {
        Validator.isBoolean(this.#isStarted);
        if (this.#isStarted) {
            throw new Error(`the car has started already`)
        }

        return this.#isStarted = true;
    }

    shutDownEngine() {
        Validator.isBoolean(this.#isStarted);
        if (!this.#isStarted) {
            throw new Error(`the car hasn't started yet`)
        }

        return this.#isStarted = false;
    }


}

class Validator {
    constructor(value, bigger, smaller) {
        this.value = value;
        this.bigger = bigger;
        this.smaller = smaller;
    }

    static isString(value) {
        if (typeof value !== 'string') {
            throw new Error(`not a string`);
        }
    }

    static isNumber(value) {
        if (!(Number.isFinite(value))) {
            throw new Error(`not a number`);
        }
    }

    static isWithin(value, lowRange, upRange) {
        if (value < lowRange || value > upRange) {
            throw new Error(`data not in a range`);
        }
    }

    static isBoolean(value) {
        if (typeof value !== 'boolean') {
            throw new Error(`not a boolean`);
        }
    }
}

const car = new Car;
console.log(car.isStarted);
car.start()
console.log(car.isStarted);
car.start()
console.log(car.isStarted);
