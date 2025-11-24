
// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let jugadores = ['Djokovic','Nadal','Federer'];
console.log({ jugadores });

console.log( jugadores[0] );

let arregloCosas = [
    true,
    123,
    'Nicolás',
    1 + 6,
    function(){},
    () => {},
    { a: 1 },
    ['AU Open', 'Roland Garros', 'Wimbledon', 'US Open', [
        'M1000',
        'Six King Slam'
    ]]
];

console.log({arregloCosas})
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
console.log(arregloCosas[7]);
console.log(arregloCosas[7][3]); // US OPEN
console.log(arregloCosas[7][4][1]); // Six King Slam