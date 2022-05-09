//  Создать обычный объект и сделать его итерируемым.При этом итерация должна происходить следующим образом:
// Должны поочерёдно проходиться все значения от свойства объекта from, до свойства to. (в случае если to < from - должна возникать ошибка).
// Если to или from не указаны ИЛИ to или from не являются числами, должна возникать ошибка.Объект должен называться myIterable.
// > Примеры:
// const myIterable = { from: 1, to: 4 };
// for (let item of myIterable) {
//     console.log(item); // 1, 2, 3, 4
// }

// const myIterable = { from: 'aaa', to: 4 };
// for (let item of myIterable) { // Ошибка!
//     console.log(item);
// }



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