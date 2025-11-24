
let a = 10;


if (a >= 10) { // undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor 10');
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

// == para comparar valores
// === para comparar con tipo, si es idéntico, no solo los valores
if(dia === 0){
    console.log('Domingo');
} else if (dia === 1){
    console.log('Lunes');
    // if(dia === 1){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es Lunes ni Domingo');
    // }
} else if(dia === 2){
    console.log('Martes');
} else {
    console.log('No es Lunes, Martes o Domingo');
}

// Sin usar If Else, o Switch, únicamente objetos o arreglos
dia = 3;

const diasLetras = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miércoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sábado - 6'
};

const arrDiasLetras = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
];

// día de la semana
console.log(diasLetras[dia]());
// console.log(arrDiasLetras[dia]() || 'Día no válido');