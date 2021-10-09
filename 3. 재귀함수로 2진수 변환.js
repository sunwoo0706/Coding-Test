// 재귀함수 사례 - 2진수 변환

let result = "";
let x = 11;

while (true) {
  if (x % 2 == 0) {
    result += "0"; // result = '0' + result;
  } else {
    result += "1";
  }
  x = Math.floor(x / 2);

  //   Math.ceil(); 소수점 올림
  //   Math.floor(); 소수점 버림
  //   Math.round(); 소수점 반올림

  if (x == 1 || x == 0) {
    result += String(x);
    break;
  }
}

function 이진법(숫자) {
  if (숫자 == 1 || 숫자 == 0) {
    return String(숫자);
  }
  return 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2);
}

console.log(이진법(12)); // Number(result.split("").reverse().join(""))
