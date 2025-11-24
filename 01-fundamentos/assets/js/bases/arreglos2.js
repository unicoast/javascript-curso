// Funciones y propiedades de los arreglos

let torneos = ['AU Open', 'Roland Garros', 'Wimbledon', 'US Open'];
console.log(`Largo:`, torneos.length);

let primero = torneos[0];
let ultimo = torneos[torneos.length - 1];

console.log({primero, ultimo});

console.log('=========================================================')
// forEach -> Ejecutar una instrucción por cada uno de los elementos del arreglo
torneos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

// Añadir elemento al final
let nuevaLongitud = torneos.push('M1000'); // push y unshift retornan la longitud
console.log({ nuevaLongitud, torneos });

// Añadir elemento al pricipio
nuevaLongitud = torneos.unshift('ATP');
console.log({ nuevaLongitud, torneos });

// Borrar el último y retornarlo
let torneoEliminado = torneos.pop();
console.log({ torneoEliminado, torneos });

// Borrar alguno en específico
// splice(posicion, elemtentos a eliminar)
let posicion = 0;
console.log(torneos); // {torneos} -> se pasa todo por referencia
let torneosEliminados = torneos.splice(posicion, 2); // Retorna un nuevo arreglo de los arreglos eliminados
console.log({ torneosEliminados, torneos });

// Conocer la posición de algún item
let wimbledonIndex = torneos. indexOf('wimbledon'); // CaSeSeNsItIvE. Si regresa -1 significa que no lo encontró
console.log({ wimbledonIndex } );