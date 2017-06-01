var cards = ['해골', '고블린통', '통나무', '화살', '프린스', '자이언트', '풍선', '미니언'];
var count = 0;

function printComb(header, candidates, offerNum) {
	var toDo = (offerNum === 1)?
		function(candidate) {
			console.log(++count);
			console.log(header.concat(candidate).join(', '));
		}:
		function(candidate, i, candidates) {
			printComb(header.concat(candidate), candidates.slice(i+1), offerNum - 1);
		};

	candidates.forEach(toDo);
}

printComb([], cards, 4);
