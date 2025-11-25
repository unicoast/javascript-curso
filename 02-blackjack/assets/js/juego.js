/** 
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spade
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosCompu = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasCompu = document.querySelector('#computador-cartas');

const puntosHTML = document.querySelectorAll('small');


const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo)
        }
    }
    
    // reorganiza aleatoriamente el deck
    deck = _.shuffle( deck );
    console.log( deck );

    return deck;
}

crearDeck();

const pedirCarta = () => {

    if( deck.length === 0 ) {
        throw 'No hay cartas disponibles';  
    }

    const carta = deck.pop(); // remueve el último elemento del arreglo y lo regresa

    return carta;
}

const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1); // omitir la última letra

    return ( isNaN( valor ) ) ? 
            ( valor ) === 'A' ? 11: 10
            : valor * 1;
}


// Turno del computador
const turnoComputador = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();

        puntosCompu += valorCarta(carta);
        puntosHTML[0].innerText = puntosCompu;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasCompu.append(imgCarta);

        if( puntosMinimos > 21 ){
            break;
        }
        
    } while ( (puntosCompu < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if( puntosCompu === puntosMinimos ) {
            alert('Empate, nadie gana' );
        } else if ( puntosMinimos > 21 ) {
            alert('Computador gana')
        } else if( puntosCompu > 21 ) {
            alert('Jugador gana');
        } else {
            alert('Computador gana')
        }
    }, 100 );
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador += valorCarta(carta);
    puntosHTML[1].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if( puntosJugador > 21 ){
        console.warn('Lo siento, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador( puntosJugador );
    } else if( puntosJugador === 21 ){
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador( puntosJugador );
    }
})

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputador( puntosJugador );
})

btnNuevo.addEventListener('click', () => {

    console.clear();

    deck = [];
    deck = crearDeck();

    puntosJugador     = 0;
    puntosCompu = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasCompu.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;
});


crearDeck();

// TODO: Borrar