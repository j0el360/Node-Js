const fs = require('fs');

//Crear un archivo
/*fs.writeFile('./texto.txt', 'Linea 1', function (err) {
    if (err) {
        console.log(err);
    } else
    console.log('Archivo creado');
})*/

//leer un archivo
fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})