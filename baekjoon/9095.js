(function() {
  var rawInputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  var results = getResults();

  var caseNum = parseInt(rawInputs[0]);
  for (var caseIdx = 1; caseIdx <= caseNum; caseIdx++) {
      console.log(results[rawInputs[caseIdx]]);
  }
})();

function getResults() {
  var results = [];
  results[1] = 1;
  results[2] = 2;
  results[3] = 4;

  for (var num = 4; num <= 11; num++) {
    results[num] = results[num - 3] + results[num - 2] + results[num - 1];
  }

  return results;
}
