// Function to calculate percentage off
function calculatePercentageOff(realPrice, discountedPrice) {
  // Calculate the discount amount
  var discountAmount = realPrice - discountedPrice;

  // Calculate the percentage off
  var percentageOff = (discountAmount / realPrice) * 100;

  // Round the result to two decimal places
  percentageOff = Math.round(percentageOff * 100) / 100;

  return Math.floor(percentageOff);
}

// Example usage

module.exports = { calculatePercentageOff };
