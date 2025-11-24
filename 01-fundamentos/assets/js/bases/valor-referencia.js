
// Los tipos primitivos en JavaScript se asignan por valor,
// por eso asignar 'a' a 'b' crea una copia independiente
let a = 10;
let b = a;
a = 30;

console.log({a,b});

// Los objetos se asignan y pasan por referencia,
// por eso 'juan' y 'ana' compartirían el mismo objeto si no usamos spread
// El operador spread {...juan} crea una copia superficial,
// rompiendo la referencia para que 'ana' sea independiente de 'juan'
let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

/*
    Para diferencia rest de spread
    Parámetro rest '...persona'(en una función): captura todos los argumentos adicionales
    pasados a la función y los agrupa en un arreglo llamado 'persona'.
    Permite manejar un número indefinido de argumentos como una colección.
    Debe colocarse siempre al final de la lista de parámetros.
*/

// La función recibe un objeto y modifica directamente su referencia,
// por eso 'roger' y 'novak' apuntan al mismo objeto modificado
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Novak';
    return persona;
}

let roger = {nombre: 'Roger'};
let novak = cambiaNombre(roger);

console.log({roger, novak});

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

// console.time -> medir rendimiento
console.time('slice');
//  método de arreglo slice, sin ningún argumento, corta el arreglo y retorna un nuevo arreglo rompiendo la relación
const otrasFrutas = frutas.slice(); // crear un nuevo arreglo, rompe la referencia
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]; // crear un nuevo arreglo, rompe la referencia
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});
