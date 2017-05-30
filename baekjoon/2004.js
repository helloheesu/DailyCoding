/* [PASS] 조합 0의 개수
 * 스포당함 : 2가 적은 경우도 있음
 * countPow : 뒤집어서 생각하기
   - mySolution: 주어진 숫자보다 작거나 같은 최대 5의 거듭제곱 구하기
   - better : 5나누며 구하기
 * min/max 이런 사소한거 틀리지 말자
 */

function countPow(number, base) {
    var count = 0;
    while(number >= base) {
        count += Math.floor(number / base);
        number /= base;
    }
    return count;
}

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var n = input[0];
var m = input[1];

var consider5 = countPow(n, 5) - countPow(m, 5) - countPow(n-m, 5);
var consider2 = countPow(n, 2) - countPow(m, 2) - countPow(n-m, 2);

console.log(Math.min(consider5, consider2));

