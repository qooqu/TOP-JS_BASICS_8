const reverseString = function (stringForward) {
    let arrayForward = stringForward.split('');
    let arrayBackward = arrayForward.reverse();
    let stringBackward = '';
    for (let i = 0; i < arrayBackward.length; i++) {
        stringBackward = stringBackward.concat(arrayBackward[i]);
    }
    return stringBackward;
}

module.exports = reverseString
