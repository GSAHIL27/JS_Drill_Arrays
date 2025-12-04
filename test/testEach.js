const each = require('./each');

const items = [1, 2, 3, 4];

each(items, (value, index) => {
    console.log(`Value: ${value}, Index: ${index}`);
});
