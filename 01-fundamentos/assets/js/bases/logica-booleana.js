
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse());

console.warn('AND'); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && !false); // false

console.log('========= && =========');
// No evalua lo demás si la primera condición es falsa
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse());  // false
console.log('========= && =========');

regresaFalse() && regresaTrue();

console.log('4 condiciones: ', true && true && true && false); // false

console.warn('OR');
// Opuesto del And, para que el OR regrese true al menos una condición tiene que ser verdadera, lo demás no importa, siempre regresa true
// Si ambos son falsos, regresará falso
console.log(true || false);
console.log(false || false);

// No evalua lo demás si la primera condición es true
console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones: ', true || true || true || false); // true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // todos deben ser verdaderos para que salga el último valor
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({a1, a2, a3, a4, a5});

// No más de 3 condiciones
if(regresaTrue() || regresaFalse() && (true || false || true)){
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}