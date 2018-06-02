(function() {
    var name = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0];
    solve(name);
})();

function solve(name) {
    var countMap = countAlphabet(name);
    var oddCountAlaphabets = getOddCountAlaphabets(countMap);
    if (oddCountAlaphabets.length > 1) {
        console.log("I'm Sorry Hansoo");
    } else {
        var palindrome = getFirstPalindrome(countMap);
        console.log(palindrome);
    }
}

function countAlphabet(nameStr) {
    var countMap = {};

    for (var index = 0, len = nameStr.length; index < len; index++) {
        var alphabet = nameStr[index];
        var previouseCount = countMap[alphabet] || 0;
        countMap[alphabet] = previouseCount + 1;
    }

    return countMap;
}

function getOddCountAlaphabets(countMap) {
    var oddCountAlaphabets = [];

    var alphabets = Object.keys(countMap);
    for (var index = 0, len = alphabets.length; index < len; index++) {
        var alphabet = alphabets[index];
        var alphabetCount = countMap[alphabet];
        if (alphabetCount % 2 !== 0) {
            oddCountAlaphabets.push(alphabet);
        }
    }

    return oddCountAlaphabets;
}

function getFirstPalindrome(countMap) {
    var palindromeArr = [];
    var oddCountAlaphabet = null;

    var alphabets = Object.keys(countMap).sort();
    for (var index = 0, len = alphabets.length; index < len; index++) {
        var alphabet = alphabets[index];
        var alphabetCount = countMap[alphabet];
        for (var i = 0, c = Math.floor(alphabetCount/2); i< c; i++) {
            palindromeArr.push(alphabet);
        }

        if (alphabetCount % 2 !== 0) {
            oddCountAlaphabet = alphabet;
        }
    }

    var palindromeArrLen = palindromeArr.length;
    var reversed = palindromeArr.map(function (cv, idx, arr) {
        return arr[palindromeArrLen-1-idx];
    });

    if (oddCountAlaphabet) {
        return palindromeArr.concat(oddCountAlaphabet, reversed).join('');
    } else {
        return palindromeArr.concat(reversed).join('');
    }
}
