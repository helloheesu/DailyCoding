function naiveSearch(haystack, needle) {
	if (!needle.length) {
		return [];
	}

	var result = [];
	for (var start = 0; start <= haystack.length - needle.length; start++) {
		var matched = true;

		for (var until = 0; until < needle.length; until++) {
			if (haystack[start+until] !== needle[until]) {
				matched = false;
				break;
			}
		}

		if (matched) {
			result.push(start);
		}
	}
	return result;
}

function getPartialMatchNaive(needle, len) {
	//
}