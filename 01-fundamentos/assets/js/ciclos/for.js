
const tenistas = ['Djokovic', 'Nadal', 'Federer', 'Murray'];

console.warn('For tradicional');
for(let i = 0; i < tenistas.length; i++){
    console.log(tenistas[i]);
}

console.warn('For in');
for(let i in tenistas){
    console.log(tenistas[i]);
}

console.warn('For of'); // Se usa para obtener posiciones o referencias a valores de objetos o arreglos de una manera sencilla
for(let tenista of tenistas){
    console.log(tenista);
}