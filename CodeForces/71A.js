const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split(/\s+/);
    const n = parseInt(inputLines[0]);
    solveNprint(inputLines.slice(1, 1+n), n);
});

function solveNprint(strings, numOfStrings) {
    for (let strIdx = 0; strIdx < numOfStrings; strIdx++) {
        const currentString = strings[strIdx];
        const characters = currentString.split('');
        const numOfCharacters = characters.length;
        if (numOfCharacters > 10) {
            console.log(`${characters[0]}${numOfCharacters-2}${characters[numOfCharacters-1]}`);
        } else {
            console.log(currentString);
        }
    }
}
