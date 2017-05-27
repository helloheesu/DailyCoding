describe("string match > ", function() {
	var testSearchFunction = searchNaive;

	describe("가능한 시작 위치 다 반환하기", function() {
		it("Blue Whale에서 Blue 찾으면 [0]", function() {
			// given
			var haystack = "Blue Whale";
			var needle = "Blue";
			// when
			var result = testSearchFunction(haystack, needle);
			// then
			expect(result).to.be.eql([0]);
		});
		it("Blue Whale에서 Whale 찾으면 5", function() {
			// given
			var haystack = "Blue Whale";
			var needle = "Whale";
			// when
			var result = testSearchFunction(haystack, needle);
			// then
			expect(result).to.be.eql([5]);
		});
		it("Blue Whale에서 l 찾으면 [1, 8]", function() {
			// given
			var haystack = "Blue Whale";
			var needle = "l";
			// when
			var result = testSearchFunction(haystack, needle);
			// then
			expect(result).to.be.eql([1, 8]);
		});
		it("Blue Whale Blue에서 Blue 찾으면 [0, 11]", function() {
			// given
			var haystack = "Blue Whale Blue";
			var needle = "Blue";
			// when
			var result = testSearchFunction(haystack, needle);
			// then
			expect(result).to.be.eql([0, 11]);
		});
	});

	describe("없는 문자열 찾으면 빈 배열([]) 반환", function() {
		it("빈 문자열을 찾으면 안 됨", function() {
			// given
			var haystack = "abcd";
			var needle = "";
			// when
			var result = testSearchFunction(haystack, needle);
			// then
			expect(result).to.be.eql([]);
		});
		it("빈 문자열에서 찾아도 없는 것", function() {
			// given
			var haystack = "";
			var needle = "abcd";
			// when
			var result = testSearchFunction(haystack, needle);
			// then
			expect(result).to.be.eql([]);
		});
		it("특정 문자열에서 없는 특정 문자열 찾기", function() {
			// given
			var haystack = "Blue Whale";
			var needle = "Blute";
			// when
			var result = testSearchFunction(haystack, needle);
			// then
			expect(result).to.be.eql([]);
		});
	});
});

describe("partial match > ", function() {
	var testSearchFunction = partialSearchNaive;

	it("aabaabac", function() {
		// given
		var needle = "aabaabac";
		// when
		var result = testSearchFunction(needle);
		// then
		expect(result).to.be.eql([0, 1, 0, 1, 2, 3, 4, 0]);
	});
});