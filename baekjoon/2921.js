/* 도미노
 * 점 1개짜리가 몇번 나오나 : n+2
   - 0부터 N까지의 상대편에 존재 (n+1) + 자기자신도 상대편으로서 한 번 존재 (1)
 * -> 1부터 N까지 더한 값 * 각 점마다 나오는 횟수
   - 더한 값 ( n*(n+1)/2 ) * 횟수 ( n+2 )
 */

var fs = require('fs');
var n = fs.readFileSync('/dev/stdin').toString();
console.log(n*(n+1)/2*(n+2));