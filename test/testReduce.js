const reduce = require('./reduce');

const items = [1, 2, 3, 4];

const sum = reduce(items, (acc, val) => acc + val, 0);

console.log(sum); 
