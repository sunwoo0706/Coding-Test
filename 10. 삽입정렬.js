let 입력값 = [5, 12, 4, 5, 6, 8, 9, 10, 7, 11, 12];
let result = [];
const 입력값의길이 = 입력값.length;

function 삽입값이들어갈인덱스(result, 삽입값) {
  for (const i in result) {
    if (삽입값 < result[i]) {
      return i;
    }
  }
  return result.length;
}

for (var i = 0; i < 입력값의길이; i++) {
  삽입값 = 입력값.shift();
  인덱스 = 삽입값이들어갈인덱스(result, 삽입값);
  result.splice(인덱스, 0, 삽입값);
  console.log(`인덱스 : ${인덱스}`);
  console.log(`정렬된 배열 : ${result}\n`);
}
