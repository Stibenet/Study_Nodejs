//Web server
var http = require('http');

var server = new http.Server(); 
//http.Server -> net.Server -> EventEmitter

server.listen(1337, '127.0.0.1');

var counter = 0;

//получает данные из функции обработчика (req, res)
var emit = server.emit;
server.emit = function(event /* args n=1,2.. */){
    console.log(event);
    emit.apply(server, arguments); //передача вызова исходному Emit
};

server.on('request', function(req, res){
    res.end("Hello world " + ++counter);
});
/* сервер использует 1 соединение (connection) по максимуму, сохраняет и гонит по нему новые запросы = Keep-Alive */