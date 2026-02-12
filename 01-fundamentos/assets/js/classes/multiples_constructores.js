/*
    "Múltiples constructores" en JavaScript
    --------------------------------------
    JavaScript no permite varios constructores con distinta firma (overloading) como Java/C#.
    En su lugar, se usa un método estático (factory) que crea instancias desde
    distintos formatos de entrada.

    En este ejemplo:
    - new Tenista(nombre, apellido, pais) crea desde parámetros sueltos
    - Tenista.porObjeto({ nombre, apellido, pais }) crea desde un objeto
*/

class Tenista {
    
    /*
        Constructor alternativo (factory estática):
        Recibe un objeto con las propiedades esperadas y delega al constructor principal.
        Ventaja: permite crear instancias cuando ya tienes la data agrupada.
    */
    static porObjeto({nombre, apellido, pais}) {
        return new Tenista(nombre, apellido, pais);
    }
    
    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    
    getInfo() {
        console.log(`Info: ${this.nombre} - ${this.apellido} - ${this.pais}`);
    }
}

const nombre1 = 'Novak', 
      apellido1 = 'Djokovic', 
      pais1 = 'Serbia';

const nombre2 = {
    nombre: 'Rafael',
    apellido: 'Nadal',
    pais: 'España'
}

// Creación usando parámetros
const tenista1 = new Tenista(nombre1, apellido1, pais1);

// Creación usando el "constructor alternativo"
const tenista2 = Tenista.porObjeto(nombre2);

tenista1.getInfo();
tenista2.getInfo();
