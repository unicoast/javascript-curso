

class Jugador {
    
    static _conteoJugadores = 0;
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
    
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', especialidad = 'Sin especialidad', titulos = 0) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.especialidad = especialidad;
        this.titulos = titulos;
        
        Jugador._conteoJugadores++;
    }
    
    set setTitulosGanados(cantidad) {
        this.titulos = cantidad;
    }
    
    get getTitulosGanados() {
        return `Tengo ${this.titulos} titulos`
    }
    
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y mi código es ${this.codigo}`);
    }
    
    mostrarEspecialidad() {
        console.log(`Mi especialidad es ${this.especialidad}`);
    }
}

class Tenista extends Jugador {
    pais = 'Sin país';
    
    constructor(nombre, codigo, especialidad, titulos, pais) {
        super(nombre, codigo, especialidad, titulos);
        this.pais = pais;
    }
    
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y mi país es ${this.pais}`);
        // Llamar al método saludar de la clase padre
        super.saludar();
    }
}

const tenista1 = new Tenista('Djokovic', 'Nole', 'Fortaleza mental', 101, 'Serbia');
console.log(tenista1);
tenista1.saludar();
tenista1.mostrarEspecialidad();
