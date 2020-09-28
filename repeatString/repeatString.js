const repeatString = function (string, num) {
    let result = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            result = result.concat(string);
        }
        return result;
    }
    return 'ERROR';
}

module.exports = repeatString
