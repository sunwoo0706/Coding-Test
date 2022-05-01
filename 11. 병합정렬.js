let 입력값 = [21, 3, 1, 7, 12, 6, 8, 10, 9, 5, 4, 2, 11, 15, 13];

// function 병합정렬(입력값) {
//   const 배열의길이 = 입력값.length;

//   if (배열의길이 <= 1) {
//     return 입력값;
//   }
//   let 중간값 = parseInt(배열의길이 / 2);
//   let 그룹하나 = 병합정렬(입력값.slice(0, 중간값));
//   let 그룹둘 = 병합정렬(입력값.slice(중간값));

//   return `그룹하나 : ${그룹하나} 그룹둘 : ${그룹둘}\n`;
// }

// console.log(병합정렬(입력값));

function 병합정렬(입력값) {
  const 배열의길이 = 입력값.length;
  let 결과값 = [];

  if (배열의길이 <= 1) {
    return 입력값;
  }
  let 중간값 = parseInt(배열의길이 / 2);
  let 그룹하나 = 병합정렬(입력값.slice(0, 중간값));
  let 그룹둘 = 병합정렬(입력값.slice(중간값));

  while (그룹하나.length !== 0 && 그룹둘.length !== 0) {
    if (그룹하나[0] < 그룹둘[0]) {
      결과값.push(그룹하나.shift());
    } else {
      결과값.push(그룹둘.shift());
    }
  }

  while (그룹하나.length !== 0) {
    결과값.push(그룹하나.shift());
  }

  while (그룹둘.length !== 0) {
    결과값.push(그룹둘.shift());
  }

  return 결과값;
}

console.log(병합정렬(입력값));
