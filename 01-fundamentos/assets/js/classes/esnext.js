
class Cancha {
    ancho = 0;
    largo = 0;
    // Propiedad privada con #
    #area = 0;
    
    constructor(ancho, largo){
        this.ancho = ancho;
        this.largo = largo;
        this.#area = ancho * largo;
    }

    calcularArea() {
        console.log(this.#area * 2);
    }
}

const cancha = new Cancha(10, 20);
// cancha.#area = 1000;
cancha.calcularArea();
console.log(cancha);
