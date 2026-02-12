
// Forma estándar de crear clases en JS
class Jugador {
    
    // Propiedad estática no necesita instanciarse
    static _conteoJugadores = 0;
    // Getter estático para obtener el conteo de instancias
    static get getConteoJugadores() {
        return Jugador._conteoJugadores + ' Instancias'; 
    }
    
    static mensaje() {
        console.log('Hola, soy un método estático');
    }
    
    nombre = '';
    codigo = '';
    juego = '';
    titulos = 0;
    
    // método especial que se ejecuta cuando se crea una nueva instancia de la clase
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', especialidad = 'Sin especialidad', titulos = 0) {
        // 'this' hace referencia a la instancia que se está creando
        this.nombre = nombre;
        this.codigo = codigo;
        this.especialidad = especialidad;
        this.titulos = titulos;
        
        // Incrementa el contador estático cada vez que se crea una nueva instancia
        Jugador._conteoJugadores++;
    }
    
    set setTitulosGanados(cantidad) {
        this.titulos = cantidad;
    }
    
    get getTitulosGanados() {
        return `Tengo ${this.titulos} titulos`
    }
    
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y mi codigo es ${this.codigo}`);
    }
    
    mostrarEspecialidad() {
        console.log(`Mi especialidad es ${this.especialidad}`);
    }
}

const jugador1 = new Jugador('Djokovic', 'Nole', 'Fortaleza mental');
const jugador2 = new Jugador('Nadal', 'Rafa', 'Explosividad');
const jugador3 = new Jugador('Federer', 'Roger', 'Elegancia');


jugador1.saludar();
jugador1.mostrarEspecialidad();

jugador1.setTitulosGanados = 101;
console.log(jugador1.titulos);

// console.log(jugador1.getTitulosGanados);

// console.log(jugador1);

console.log('Conteo estático: ', Jugador._conteoJugadores);
console.log(Jugador.getConteoJugadores);
Jugador.mensaje();
