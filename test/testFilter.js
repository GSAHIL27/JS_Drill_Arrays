const filter = require('../code/filter');

const items = [1, 2, 3, 4, 5, 6];

const evens = filter(items, (num) => num % 2 === 0);

console.log(evens); 
