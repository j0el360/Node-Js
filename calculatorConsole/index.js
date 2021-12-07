function suma(x,y) {
    return x + y;
}
function resta(x, y) {
    return x - y;
}
function multiplica(x,y) {
    return x * y;
}
function divide(x, y) {
    if (y == 0) {
        console.log('No se puede dividir por 0');
    } else
        return x / y;
}

console.log(divide(1, 0));