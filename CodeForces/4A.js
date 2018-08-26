var stdin = process.stdin;
stdin.setEncoding( 'utf8' );
stdin.on( 'data', function( key ){
    const weight = parseInt(key);
    const available = (weight !== 2) && (weight % 2 === 0);
    process.stdout.write(available ? "YES" : "NO" );
});
