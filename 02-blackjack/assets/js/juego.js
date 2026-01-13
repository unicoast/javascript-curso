const miModulo = (() => {
    'use strict';

    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');


    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();

        puntosJugadores = [];
        for( let i = 0; i< numJugadores; i++ ) {
            puntosJugadores.push(0);
        }
        
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedir.disabled   = false;
        btnDetener.disabled = false;

    }

    const crearDeck = () => {

        deck = [];
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tipos ) {
                deck.push( i + tipo);
            }
        }

        for( let tipo of tipos ) {
            for( let esp of especiales ) {
                deck.push( esp + tipo);
            }
        }

        // shuffle reorganiza aleatoriamente el deck
        return _.shuffle( deck );;
    }

    const pedirCarta = () => {
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }

        // remueve el último elemento del arreglo y lo regresa
        return deck.pop();
    }

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1); // omitir la última letra
        
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    // Turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append( imgCarta );

    }

    const determinarGanador = () => {

        const [ puntosMinimos, puntosCompu ] = puntosJugadores;

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

    // Turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosCompu = 0;

        do {
            const carta = pedirCarta();
            puntosCompu = acumularPuntos(carta, puntosJugadores.length - 1 );
            crearCarta(carta, puntosJugadores.length - 1 );

        } while(  (puntosCompu < puntosMinimos)  && (puntosMinimos <= 21 ) );

        determinarGanador();
    }


    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0 );
        
        crearCarta( carta, 0 );


        if ( puntosJugador > 21 ) {
            console.warn('Lo siento, perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }

    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugadores[0] );
    });

    return {
        nuevoJuego: inicializarJuego
    };

})();








