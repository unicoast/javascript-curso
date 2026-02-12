
const novak = {
    nombre: 'Novak',
    apellido: 'Djokovic',
    edad: 38,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const rafa = {
    nombre: 'Rafael',
    apellido: 'Nadal',
    edad: 39    
}

const roger = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 44    
}

// novak.imprimir();

// Legacy code
// Esto se debe crear con la palabra reservada 'new'
function Tenista(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const jugador1 = new Tenista('Djokovic', 38);
const jugador2 = new Tenista('Nadal', 39);

jugador1.imprimir();
jugador2.imprimir();
