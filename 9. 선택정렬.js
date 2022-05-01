let a = [10, 3, 7, 65, 43, 12, 4];
let result = [];

// let aLength = a.length;
//
// for (var i = 0; i < aLength; i++) {
//   result.push(Math.min.apply(null, a));
//   a.splice(a.indexOf(Math.min.apply(null, a)), 1);
// }

while (a.length > 0) {
  result.push(Math.min.apply(null, a));
  a.splice(a.indexOf(Math.min.apply(null, a)), 1);
}

console.log(a, result);
