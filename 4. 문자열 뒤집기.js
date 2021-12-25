let result = '';
let x = 'leehojun';
while (true) {
    if (x.length === 1) {
        result += x;
        break;
    }
    let y = x.split("");
    result += String(y.pop());
    x = y.join('');
}

console.log(result);

function 문자열역순(문자열) {
    if (문자열.length == 1) {
        return 문자열;
    }
    return 문자열[문자열.length - 1] + 문자열역순(문자열.slice(0, 문자열.length - 1));
}

console.log(문자열역순('leehojun'));