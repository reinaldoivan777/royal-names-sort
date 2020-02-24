const { compare } = require("./utils/compare");
const { romanToNumber } = require("./utils/romanToNumber");

const getSortedList = arr => {
  const sorted = arr
    .map(name => ({
      name: name.split(" ")[0],
      number: romanToNumber(name.split(" ")[1]),
      romanNumber: name.split(" ")[1]
    }))
    .sort((a, b) => compare(a, b))
    .map(data => `${data.name} ${data.romanNumber}`);
  return sorted;
};

module.exports = { getSortedList };
