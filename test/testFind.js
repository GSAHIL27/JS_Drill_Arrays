const find = require('../code/find');

const items = [1, 3, 5, 7, 9];

const found = find(items, (num) => num > 5);

console.log(found); 
