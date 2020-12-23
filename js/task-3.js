const findBestEmployee = function (employees) {
  let bestEmpl;
  let bestEmplNum = 0;
  for (const value in employees) {
    if (bestEmplNum < employees[value]) {
      bestEmplNum = employees[value];
      bestEmpl = value;
    }
  }
  return bestEmpl;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
