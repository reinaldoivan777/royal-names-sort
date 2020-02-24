const romanToNumber = romanNumber => {
  if (romanNumber == null) return -1;
  var number = convertCharToInt(romanNumber.charAt(0));
  var previousNumber, currentNumber;

  for (var i = 1; i < romanNumber.length; i++) {
    currentNumber = convertCharToInt(romanNumber.charAt(i));
    previousNumber = convertCharToInt(romanNumber.charAt(i - 1));
    if (currentNumber <= previousNumber) {
      number += currentNumber;
    } else {
      number = number - previousNumber * 2 + currentNumber;
    }
  }

  return number;
};

function convertCharToInt(c) {
  switch (c) {
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
