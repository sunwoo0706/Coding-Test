let result = 0;
let x = "123123";
while (true) {
  if (x.length === 1) {
    result += parseInt(x, 10);
    break;
  }
  let y = x.split("");
  result += parseInt(y.pop(), 10);
  x = y.join("");
}

console.log(result);

function 문자열역순(문자열) {
  if (문자열.length == 1) {
    return 문자열;
  }
  return (
    parseInt(문자열[문자열.length - 1], 10) +
    parseInt(문자열역순(문자열.slice(0, 문자열.length - 1)), 10)
  );
}

console.log(문자열역순("11231"));
