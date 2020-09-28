const ftoc = function (tempIn) {
  tempOut = (tempIn - 32) * 5 / 9;
  return Math.round(10 * tempOut) / 10;
}

const ctof = function (tempIn) {
  tempOut = tempIn * 9 / 5 + 32;
  return Math.round(10 * tempOut) / 10;
}

module.exports = {
  ftoc,
  ctof
}
