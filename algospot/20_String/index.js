function searchNaive(haystack, needle) {
	if (!needle.length) {
		return [];
	}

	var count = 0;
	var result = [];
	for (var start = 0, haystackLen = haystack.length - needle.length; start <= haystackLen; start++) {
		for (var matchedNum = 0, needleLen = needle.length; matchedNum < needleLen; matchedNum++) {
			console.log(++count);
			if (haystack[start+matchedNum] !== needle[matchedNum]) {
				matchedNum = -1;
				break;
			}
		}

		if (matchedNum != -1) {
			result.push(start);
		}
	}
	return result;
}

function partialSearchNaive(needle) {
	var partialMap = new Array(needle.length);
	partialMap.fill(0);

	for (var start = 1, len = needle.length; start < len; start++) {
		for (var matchedNum = 0; matchedNum < len; matchedNum++) {
			if (needle[start+matchedNum] !== needle[matchedNum]) {
				break;
			} else {
				partialMap[start+matchedNum] = Math.max(partialMap[start+matchedNum], matchedNum+1);
			}
		}
	}

	return partialMap;
}

function searchKMP(haystack, needle, partialMap) {
	if (!needle.length) {
		return [];
	}

	var result = [];
	for (var start = 0, haystackLen = haystack.length - needle.length; start <= haystackLen; start++) {
		for (var matchedNum = 0, needleLen = needle.length; matchedNum < needleLen; matchedNum++) {
			if (haystack[start+matchedNum] !== needle[matchedNum]) {
				// start += matchedNum;
				matchedNum = -1;
				break;
			}
		}

		if (matchedNum != -1) {
			result.push(start);
		}
	}
	return result;
}
