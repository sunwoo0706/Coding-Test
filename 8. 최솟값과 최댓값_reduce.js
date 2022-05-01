let a = [10, 20, 30, 40, 50];

const reducerOne = (accumulator, currentValue) => accumulator + currentValue;
const reducerTwo = (accumulator, currentValue) => accumulator - currentValue;
const reducerThree = (accumulator, currentValue) =>
  accumulator > currentValue ? accumulator : currentValue;
const reducerFour = (accumulator, currentValue) =>
  accumulator < currentValue ? accumulator : currentValue;

console.log(a.reduce(reducerOne));
console.log(a.reduce(reducerTwo));
console.log(a.reduce(reducerThree));
console.log(a.reduce(reducerFour));
