const http = require('http');
const colors = require('colors');

//req= request, res= response
// writehead = codigo HTTP
const handleServer=function (req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h1>Me la pelan mucho</h1>');
    res.end();
}
const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log('Servidor en puerto 3000'.red.bgBlue);
});


//npm start 
//npm run -modulo-