const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || Math.min(a, b) < 0) {
        return 'ERROR'
    }
    let smaller = Math.min(a, b);
    let larger = Math.max(a, b);
    let sum = 0;
    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
