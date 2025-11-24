
function saludar(nombre){
    // console.log(arguments)
    // console.log('Hola ' + nombre);
    // Si la función no tiene un return explícito, se retorna 'undefined'
    return [1,2];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}

// Función anónima, no tiene nombre, se define como constante saludar2 y responde
const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

// Función flecha, Lambda functions, a partir de ECMASCRIPT 6 (JS del 2015)
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola Flecha ' + nombre);
}

const retornoDeSaludar = saludar('Nicolás', 25, true, 'Chile'); // 1
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

// saludar2('Joaquín');
// saludarFlecha();
// saludarFlecha2('Clarita');

function sumar( a,b ){
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }

const sumar2 = (a,b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(sumar(1,2));
console.log(sumar2(2,2));

console.log(getAleatorio());
console.log(getAleatorio2())