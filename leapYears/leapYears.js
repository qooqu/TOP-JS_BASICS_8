const leapYears = function (year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        }
        return false;
    }
    return year % 4 == 0;
}

module.exports = leapYears
