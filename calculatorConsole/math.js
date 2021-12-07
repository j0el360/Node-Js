const Math = {};

function suma(x, y) {
    return x + y;
}
function resta(x, y) {
    return x - y;
}
function multiplica(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y == 0) {
        console.log('No se puede dividir por 0');
    } else
        return x / y;
}


Math.suma = suma;
Math.resta = resta;
Math.multiplica = multiplica;
Math.divide = divide;

//Exporta un objeto que contiene todas las funciones
module.exports = Math;

/* Exporta cada funcion Individualmente
exports.suma = suma;
exports.resta = resta;
exports.multiplica = multiplica;
exports.divide = divide;*/