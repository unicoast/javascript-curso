import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * turno del computador
 * @param {Number} puntosMinimos puntos minimos que el computador necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputador elemento HTML para mostrar las cartas 
 * @param {Array<String>} deck 
 */
export const turnoComputador = ( puntosMinimos, puntosHTML, divCartasComputador, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputador = 0;
 
    do {
        const carta = pedirCarta( deck );

        puntosComputador = puntosComputador + valorCarta( carta );
        puntosHTML.innerText = puntosComputador;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputador.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputador < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputador === puntosMinimos ) {
            alert('Empate, nadie gana' );
        } else if ( puntosMinimos > 21 ) {
            alert('Computador gana')
        } else if( puntosComputador > 21 ) {
            alert('Jugador gana');
        } else {
            alert('Computador gana')
        }
    }, 100 );
}