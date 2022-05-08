'use strict'

//first task

// function makeObjectDeepCopy(obj) {
//     const objCopy = {};
//     const objKeys = Object.keys(obj);

//     objKeys.map((key) => {
//         if (!isObject(obj[key]) && !isFunction(obj[key])) {
//             objCopy[key] = obj[key];

//         } else if (isFunction(obj[key])) {
//             objCopy[key] = obj[key];

//         } else if (isArray(obj[key])) {
//             obj[key].map((item) => {
//                 makeObjectDeepCopy(item);
//             })
//             objCopy[key] = [...obj[key]];
//         }

//         else if (isNull(obj[key])) {
//             objCopy[key] = obj[key];
//         }

//         else if (isObject(obj[key]) && !isArray(obj[key])) {
//             objCopy[key] = makeObjectDeepCopy(obj[key]);
//         }
//     })
//     return objCopy;
// };

// function isObject(data) {
//     return typeof (data) === 'object';
// };

// function isFunction(data) {
//     return typeof (data) === 'function';
// };

// function isArray(data) {
//     return Array.isArray(data);
// };

// function isNull(data) {
//     return data === null;
// };


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
    )
};

function interval(arr, firstInterval, lastInterval) {
    return (
        arr.filter((item) => {
            if (firstInterval < lastInterval) {
                return item <= lastInterval && item >= firstInterval
            }
            return item >= lastInterval && item <= firstInterval
        })
    );
};

function isArray(data) {
    return Array.isArray(data);
};

function isNumber(data) {
    return typeof (data) === 'number';
};

function itemIsNumber(arr) {
    if (arr.length > 0) {
        return arr.every((item) => {
            return isNumber(item)
        });
    };
};




