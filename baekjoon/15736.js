(function() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8').toString();
    var result = countSquareNum(parseInt(input));
    console.log(result);
})();

function countSquareNum(num) {
    var count = 1;

    while (count * count <= num) {
        count++;
    }

    return count-1;
}
