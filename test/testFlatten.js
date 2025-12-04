const flatten = require('../code/flatten');

const nestedArray = [1, [2], [[3]], [[[4]]]];

const flat = flatten(nestedArray);

console.log(flat); 
