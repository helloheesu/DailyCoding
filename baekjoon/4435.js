var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var len = input[0]
for (var i = 1; i <= len; i++) {
	var a = input[i*2-1].split(' ');
	var b = input[i*2].split(' ');
	var scoreA = a[0]*1 + a[1]*2 + a[2]*3 + a[3]*3 + a[4]*4 + a[5]*10;
	var scoreB = b[0]*1 + b[1]*2 + b[2]*2 + b[3]*2 + b[4]*3 + b[5]*5 + b[6]*10;

	var resultString = (scoreA > scoreB)? "Good triumphs over Evil": (scoreB > scoreA)? "Evil eradicates all trace of Good": "No victor on this battle field";
	console.log('Battle '+i+': '+resultString);
}
