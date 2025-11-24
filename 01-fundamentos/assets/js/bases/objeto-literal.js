// {} -> Objeto, pares de valores, key, value
let playerTennis = {
    codeName: 'Nole',
    name: 'Novak Djokovic',
    active: true,
    age: 38,
    info: {
        country: 'Serbia',
        titles: 100,
        grandSlams: 24,
    },
    marks: ['Lacoste', 'HEAD', 'Asics ', 'Seiko'],
    tournaments: {
        auOpen: 10,
        rolandGarros: 3,
        wimbledon: 7,
        usOpen: 4
    },
    'last-tournament': 'Six Kings Slam' // Para usar cáracteres especiales (-), envolverlo en '' para hacerlo string
};

console.log(playerTennis); // De manera alfabética
console.log('Nombre: ', playerTennis.name);
console.log('Nombre: ', playerTennis['name']); // para traer la propiedad
console.log('Edad: ', playerTennis.age);

// Obtener cantidad de títulos en Australia
console.log('Torneos en Australia: ',  playerTennis.tournaments.auOpen);

// Obtener el número de patrocinadores
console.log('Cantidad de Patrocinadores: ', playerTennis.marks.length);
console.log('Último patrocinador: ', playerTennis.marks[playerTennis.marks.length - 1]);

const x = 'active';
console.log('Active', playerTennis[x]);

console.log('Último torneo: ', playerTennis['last-tournament']);

// Más detalles
// Aunque sea const igual se puede modificar las propiedades
delete playerTennis.age;
console.log(playerTennis);

// Crear propiedad en el momento de ejecución
playerTennis.goat = true;


// Trabar el objeto como pares de valores, como un arreglo de 2 valores, lo ordena de manera que fueron definidos
const entriesPares = Object.entries(playerTennis);
console.log(entriesPares);

// Congela, Bloquea, las propiedades directas existentes o futuras modificaciones pero no congela la de los objetos que están dentro
Object.freeze(playerTennis);

playerTennis.aura = 100000000;
playerTennis.goat = false;
playerTennis.info.country = 'Chile';
console.log(playerTennis);

// Propiedades
const properties = Object.getOwnPropertyNames(playerTennis);
const values = Object.values(playerTennis);
console.log({properties, values});