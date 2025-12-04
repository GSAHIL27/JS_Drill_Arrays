function flatten(elements) {
    const result = [];

    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                helper(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }

    helper(elements);
    return result;
}
module.exports = flatten;
