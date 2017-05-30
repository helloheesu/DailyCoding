function getWinner(former, latter) {
	var formerName = "Vladik";
	var latterName = "Valera";

	var base = Math.floor(Math.sqrt(former));
	var turn = Math.pow(base, 2);

	var isLatterAvailabe = (latter - base) >= turn;
	var losersName = (isLatterAvailabe)? formerName: latterName;
	return losersName;
}

var input = readline().split(" ").map(function(x) { return parseInt(x); });
print(getWinner(input[0], input[1]));
