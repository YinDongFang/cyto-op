const getArraySum = require('./getArraySum')
const factorial = require('./factorial')
const shuffleArray = require('./shuffleArray')

module.exports = (num, precision) => {
    return parseFloat(num.toFixed(precision));
  }