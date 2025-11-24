
// function crearPersona( nombre, apellido ){
//     return {nombre, apellido}
// }

// () al final, indicar que devuelva un nuevo objeto
const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Novak', 'Djokovic');
console.log(persona);

function imprimeArgumentos (){
    console.log(arguments)
}

// ... hace referencia a parámetro Rest
// que todos los argumentos que sean enviados, crea un arreglo con cada uno de ellos
function imprimeArgumentos2(deporte, ...args){
    // console.log({deporte, args});
    return args;
}

const [profesional, accesible, grandSlam] = imprimeArgumentos2('Tenis', true, false, 'Wimbledon');
console.log({profesional, accesible, grandSlam});

const {apellido: nuevoApellido} = crearPersona('Novak', 'Djokovic');
console.log({nuevoApellido});

const novak = {
    codeName: 'Nole',
    name: 'Novak Djokovic',
    active: true,
    age: 38
};

// const imprimePropiedades = (jugador) => {
//     console.log('codeName', jugador.codeName);
//     console.log('name', jugador.name);
//     console.log('active', jugador.active);
//     console.log('age', jugador.age);
// }

const imprimePropiedades = ({name, age = 0, active, codeName}) => {
    console.log({name});
    console.log({age});
    console.log({active});
    console.log({codeName});
}

imprimePropiedades(novak);
