const findBestEmployee = function (employees) {
  const arrValues = Object.keys(employees);
  let bestEmplNum = employees[arrValues[0]];
  let bestEmpl = arrValues[0];
  //console.log(bestEmpl);
  for (const value of arrValues) {
    //console.log(employees[value]);
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
