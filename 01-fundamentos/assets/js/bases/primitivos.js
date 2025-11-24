let nombre = 'Novak Djokovic';
console.log(nombre);

nombre = 'Roger Federer';
console.log(nombre)

nombre = "Rafael Nadal";
nombre = `Rafael Nadal`;
console.log(typeof nombre);

nombre = 24;
console.log(typeof nombre );

let esTenista = false;
console.log(typeof esTenista);

let edad = 38;
console.log(typeof edad);

edad = 38.001;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder); // ???

let soyNull = null;
console.log(typeof soyNull);

// symbol = identificar propiedades de manera única
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log(symbol1 === symbol2);