
const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares'

console.log(elMayor(10,15));

console.log(tieneMembresia(true));
console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
    'Novak',
    'Rafa',
    'Roger',
    amigo ? 'Tenista' : 'No es Tenista',
    (() => 'Wimbledon')(), // función anónima autoinvocada ()
    elMayor(20,15)
];

console.log(amigosArr);

const nota = 100 ; // A+ A B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' : 
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log({nota, grado});