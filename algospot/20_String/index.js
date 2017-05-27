function searchNaive(haystack, needle) {
	if (!needle.length) {
		return [];
	}

	var result = [];
	for (var start = 0, haystackLen = haystack.length - needle.length; start <= haystackLen; start++) {
		for (var matchedNum = 0, needleLen = needle.length; matchedNum < needleLen; matchedNum++) {
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
	var pi = new Array(needle.length);

	for (var start = 0, len = needle.length; start < len; start++) {
		var matched = true;

		for (var until = 0; until < len; until++) {
			if (needle[start+until] !== needle[until]) {
				matched = false;
				break;
			} else {
				// pi[i] = Math.max(pi[i], until)
			}
		}

		if (matched) {
			result.push(start);
		}
	}
}