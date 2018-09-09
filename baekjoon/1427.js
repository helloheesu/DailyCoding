(function() {
    var numberStrings = require('fs').readFileSync('/dev/stdin').toString().match(/\d/g);
    var sorted = bubbleSort(numberStrings).reverse();
    console.log(sorted.join(''));
})();

function bubbleSort(arr) {
    var unsorted = arr.slice(0);
    return unsorted.sort(function(x, y) {
        return x - y;
    });
}
