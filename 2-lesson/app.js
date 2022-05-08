'use strict'
const OBJ = {
    name: 'Alex',
    surname: 'Skirnevskyi',
    age: 33,
    address: {
        city: 'New-York',
        house: 10,
        apartment: 3,
        phone: function () {
            console.log('1')
        }
    },
    arr: [1, 2, 3, 4],
    isNull: null

};

function makeObjectDeepCopy(obj) {
    const objCopy = {};
    const objKeys = Object.keys(obj);
    objKeys.map((key) => {

        if (!isObject(obj[key]) && !isFunction(obj[key])) {
            objCopy[key] = obj[key];

        } else if (isFunction(obj[key])) {
            objCopy[key] = obj[key];

        } else if (isArray(obj[key])) {
            objCopy[key] = [...obj[key]];
        }

        else if (isNull(obj[key])) {
            objCopy[key] = obj[key];
        }

        else if (isObject(obj[key]) && !isArray(obj[key])) {
            objCopy[key] = makeObjectDeepCopy(obj[key])
        }
    })
    return objCopy
}

function isObject(data) {
    return typeof (data) === 'object'
};

function isFunction(data) {
    return typeof (data) === 'function'
};

function isArray(data) {
    return Array.isArray(data)
}

function isNull(data) {
    return data === null
};

console.log(makeObjectDeepCopy(OBJ))

