// Convert Roman Number to Integer Number
const romanToNumber = romanNumber => {
  if (romanNumber == null) return -1;
  var number = convertCharToInt(romanNumber.charAt(0));
  var previousNumber, currentNumber;

  for (var index = 1; index < romanNumber.length; index++) {
    currentNumber = convertCharToInt(romanNumber.charAt(index));
    previousNumber = convertCharToInt(romanNumber.charAt(index - 1));
    if (currentNumber <= previousNumber) {
      number += currentNumber;
    } else {
      number = number - previousNumber * 2 + currentNumber;
    }
  }

  return number;
};

// Convert Character to Integer
function convertCharToInt(char) {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

module.exports = { romanToNumber };
