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
// const arr = [1, 2, 3, 4, 5, 6, 7]
// function selectFromInterval(arr, firstInterval, lastInterval) {
//     if (isValidArguments(arr, firstInterval, lastInterval)) {
//         return interval(arr, firstInterval, lastInterval);
//     }
//     throw new Error('not valid arguments');
// };
// console.log(selectFromInterval(arr, 2, 7))

// function isValidArguments(arr, firstInterval, lastInterval) {
//     return (
//         isArray(arr) && itemIsNumber(arr)
//         && isNumber(firstInterval) && isNumber(lastInterval)
//     )
// };

// function interval(arr, firstInterval, lastInterval) {
//     return (
//         arr.filter((item) => {
//             if (isLassThan(firstInterval, lastInterval)) {
//                 return item <= lastInterval && item >= firstInterval
//             }
//             return item >= lastInterval && item <= firstInterval
//         })
//     );
// };

// function isArray(data) {
//     return Array.isArray(data);
// };

// function isLassThan(first, last) {
//     return first < last;
// };

// function isNumber(data) {
//     return typeof (data) === 'number';
// };

// function itemIsNumber(arr) {
//     if (arr.length > 0) {
//         return arr.every((item) => {
//             return isNumber(item)
//         });
//     };
// };

// third task

const myIterable = { from: 1, to: 7 };

myIterable[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (isValid(myIterable.from, myIterable.to)) {
                while (!biggerThan(this.current, this.last)) {
                    return {
                        done: false,
                        value: this.current++
                    };
                }
                return { done: true };
            } else {
                throw new Error('Ошибка!');
            }
        }
    };
}

function isValid(firstValue, lastValue) {
    return !biggerThan(firstValue, lastValue) && isNumber(firstValue, lastValue);
};

function biggerThan(firstValue, lastValue) {
    return firstValue > lastValue;
};
function isNumber(firstValue, lastValue) {
    return typeof (firstValue) === 'number' && typeof (lastValue) === 'number';
};

for (let key of myIterable) {
    console.log(key);
};