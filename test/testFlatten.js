const flatten = require('./flatten');

const nestedArray = [1, [2], [[3]], [[[4]]]];

const flat = flatten(nestedArray);

console.log(flat); 
