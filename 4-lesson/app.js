'use strict'
function concatStrings(first) {
    const f = first
    return function (f) {
        if (!isString(f)) {
            return console.log("not a string");
        }
        return console.log(f);
    };
}

function isString(value) {
    return typeof value === 'string';
}

concatStrings()('sd');




// concatStrings('first')('second')('third')().