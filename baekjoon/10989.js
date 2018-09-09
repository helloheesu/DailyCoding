(function() {
    var rawInputs = require('fs').readFileSync('/dev/stdin').toString().split(/\s+/);
    var inputNum = parseInt(rawInputs[0]);
    var unsorted = rawInputs.slice(1, 1+inputNum).map(function(stringVal) {
        return parseInt(stringVal);
    });
    var sorted = selectionSort(unsorted);
    // console.log(unsorted, sorted);
    console.log(sorted.join('\n'));
})();

function selectionSort(unsorted) {
    var arr = unsorted.slice(0);

    for (var sortingIdx = 0, len = arr.length; sortingIdx < len; sortingIdx++) {
        var minIdx = sortingIdx;
        var min = arr[minIdx];

        for (var minFindingIdx = sortingIdx+1; minFindingIdx < len; minFindingIdx++) {
            var val = arr[minFindingIdx];
            if (min > val) {
                minIdx = minFindingIdx;
                min = val;
            }
        }
        swap(arr, sortingIdx, minIdx);
    }

    return arr;
}

function swap(arr, a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}
