let a = [10, 20, 30, 40, 50];

a.sort();

console.log(a[a.length - 1]);

Math.max.apply(null, a);
Math.min.apply(null, a);

let m = a[0];

for (var variable of a) {
  if (variable < m) {
    m = variable;
  }
}

console.log(m);
