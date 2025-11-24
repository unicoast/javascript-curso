
const autos = ['Mazda', 'Ford', 'Honda', 'Toyota', 'Chevrolet'];

let i = 0;
// tiene que ser verdadera
// while (i < autos.length) {
//     console.log('posición ' + i + ' => ' + autos[i]);
//     i++;
// }

// undefined
// null
// false

console.warn('While');
while (autos[i]) {
    if (i === 1) {
        // break;
        i++;
        continue;
    }
    
    console.log(autos[i]);
    i++;   
}

console.warn('Do While')
let j = 10;
// Se ejecuta al menos una vez
do {
    console.log(autos[j]);
    j++
} while (autos[j]); // siempre y cuando j tenga un valor