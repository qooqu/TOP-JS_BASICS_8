const removeFromArray = function (arrayIn, ...removeThese) {
    let arrayOut = arrayIn;
    for (let i = 0; i < removeThese.length; i++) {
        let removeThis = removeThese[i];
        arrayOut = arrayOut.filter(
            function (item) {
                return item !== removeThis;
            }
        );
    }
    return arrayOut;
}



module.exports = removeFromArray
