'use strict'

// first task

function makeObjectDeepCopy(obj) {
    if (!isObject(obj)) {
        return console.log('not an object');
    }

    function deepCopy(obj) {
        const objCopy = {};
        const objKeys = Object.keys(obj);

        objKeys.map((key) => {
            if (!isObject(obj[key]) || isNull(obj[key])) {
                objCopy[key] = obj[key];
            }
            else if (isArray(obj[key])) {
                obj[key].map((item) => {
                    deepCopy(item);
                });
                objCopy[key] = [...obj[key]];
            }
            else if (isObject(obj[key]) && !isArray(obj[key])) {
                objCopy[key] = deepCopy(obj[key]);
            }
        })

        return objCopy;
    }

    return deepCopy(obj);
};

function isObject(data) {
    return typeof (data) === 'object';
};

function isFunction(data) {
    return typeof (data) === 'function';
};

function isArray(data) {
    return Array.isArray(data);
};

function isNull(data) {
    return data === null;
};

// second task

function selectFromInterval(arr, firstInterval, lastInterval) {
    if (isValidArguments(arr, firstInterval, lastInterval)) {
        return interval(arr, firstInterval, lastInterval);
    }

    throw new Error('not valid arguments');
};


function isValidArguments(arr, firstInterval, lastInterval) {
    return (
        isArray(arr) && itemIsNumber(arr)
        && isNumber(firstInterval) && isNumber(lastInterval)
    );
};

function interval(arr, firstInterval, lastInterval) {
    return (
        arr.filter((item) => {
            if (toCompere(firstInterval, lastInterval)) {
                return item <= lastInterval && item >= firstInterval;
            }
            return item >= lastInterval && item <= firstInterval;
        })
    );
};

function isArray(data) {
    return Array.isArray(data);
};

function toCompere(first, last) {
    return first < last;
};

function isNumber(data) {
    return typeof (data) === 'number';
};

function itemIsNumber(arr) {
    if (arr.length > 0) {

        return arr.every((item) => {

            return isNumber(item);
        });
    };
};

// third task

const myIterable = { from: 1, to: 10 };

myIterable[Symbol.iterator] = function () {
    if (!isValid(myIterable.from, myIterable.to)) {
        throw new Error('Error!');
    }

    return {
        current: myIterable.from,
        last: myIterable.to,
        next() {
            while (!toCompere(this.current, this.last)) {
                return {
                    done: false,
                    value: this.current++
                };
            }

            return { done: true };
        }
    };
};

function isValid(firstValue, lastValue) {
    return !toCompere(firstValue, lastValue) && isNumber(firstValue, lastValue);
};

function toCompere(firstValue, lastValue) {
    return firstValue > lastValue;
};

function isNumber(firstValue, lastValue) {
    return typeof (firstValue) === 'number' && typeof (lastValue) === 'number';
};

for (let key of myIterable) {
    console.log(key);
}