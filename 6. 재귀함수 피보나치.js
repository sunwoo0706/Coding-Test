let a = 1;
let b = 1;

for (let i = 0; i <= 5; i++) {
  [a, b] = [b, a + b];
}

console.log(a);

function 피보나치(숫자) {
  if (숫자 == 1 || 숫자 == 2) {
    return 1;
  }
  return 피보나치(숫자 - 1) + 피보나치(숫자 - 2);
}

console.log(피보나치(5));
