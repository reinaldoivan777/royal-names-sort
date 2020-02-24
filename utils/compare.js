const compare = (a, b) => {
  if (a.name.toLowerCase() === b.name.toLowerCase()) {
    if (a.number > b.name) return 1;
    else if (a.number < b.number) return -1;
    return 0;
  } else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
};

module.exports = { compare };
