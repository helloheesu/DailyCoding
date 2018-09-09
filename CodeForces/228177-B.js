const stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( rawInput ){
    const inputLines = rawInput.split('\n');
    const n = parseInt(inputLines[0]);
    const result = solve(inputLines[1].slice(0,n));
    console.log(result);
});

function solve(string) {
    const matches = string.match(/x{3,}/g);
    if (!matches || !matches.length) {
        return 0;
    }
    return matches.reduce((pv, cv) => {
        return pv + (cv.length-2);
    }, 0);
}
