describe("KMP > ", function() {
	var testSearchFunction = naiveSearch;
	it("빈 문자열에서 찾으면 -1", function() {
		// when
		var result = testSearchFunction("", "abcd");
		// then
		expect(result).to.be.eql(-1);
	});
	it("빈 문자열을 찾으면 length-1");
	it("없는 문자열 찾으면 length-1");
});