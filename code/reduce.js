function reduce(elements, cb, startingValue) {
    let accumulator;
    let startIndex;

    if (startingValue === undefined) {
        accumulator = elements[0];
        startIndex = 1;
    } else {
        accumulator = startingValue;
        startIndex = 0;
    }

    for (let i = startIndex; i < elements.length; i++) {
        accumulator = cb(accumulator, elements[i]);
    }

    return accumulator;
}
module.exports = reduce;
