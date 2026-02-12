/*
    Objetivo: asegurar que SOLO exista una instancia de la clase.
    Si se intenta crear otra, en vez de construir una nueva, se devuelve la ya creada.
    Casos de uso comunes:
    - Configuración global
    - Logger
    - Conexión única a un recurso (por ejemplo DB/client HTTP), según el diseño
*/

class Singleton {
    // Propiedad estática (pertenece a la clase, no a los objetos)
    // Aquí guardamos la referencia a la única instancia.
    static instancia; // al inicio: undefined
    
    // Propiedad de instancia (pertenece a cada objeto),
    // pero en este patrón solo existirá un objeto real.
    nombre = '';
    
    constructor(nombre = '') {
        // Debug: muestra si ya existe una instancia creada
        console.log(Singleton.instancia);

        // Si ya hay una instancia, NO creamos otra.
        // En JavaScript, un constructor puede retornar un objeto explícitamente:
        // si retorna un objeto, ese será el resultado de `new`.
        if (Singleton.instancia) {
            return Singleton.instancia;
        }

        // Si no existía, esta será la primera y única instancia.
        Singleton.instancia = this;

        // Inicialización de estado
        this.nombre = nombre;
    }
}

// Primera creación: se crea la instancia real y se guarda
const instancia1 = new Singleton('Tenis');
const instancia2 = new Singleton('Fútbol');

console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`);

// Si intentas crear otra, te devolverá la primera:
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);

console.log(instancia1 === instancia2); // true
