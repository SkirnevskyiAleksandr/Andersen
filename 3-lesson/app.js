'use strict'

//first task
Array.prototype.myFilter = function (callback, argThis) {
    let context = this;
    let arr = [];

    if (!Array.isArray(this)) {
        throw new Error('is not Array');
    }

    if (arguments.length > 1) {
        context = argThis;
    }

    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i]);
        };
    }

    return arr;
}

//second task

function createDebounceFunction(callback, time) {
    let timer;

    return () => {
        clearTimeout(timer)
        timer = setTimeout(callback, time);
    };
}
