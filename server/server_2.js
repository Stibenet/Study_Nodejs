//Echo server
//http://127.0.0.1/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res){
    //console.log( req.headers);
    
    //значение true разбирает строку на объекты
    var urlParsed = url.parse(req.url, true);
    debugger;
    
    ///echo? -> message=(Hello) - любое значение
    if (urlParsed.pathname == '/echo' && urlParsed.query.message){
        
        //Заголовки - вместе с url отправка доп информации с деталями запроса и инфо по браузеру
        res.setHeader('Cache-control', 'no-cache') // || removeHeader
        res.statusCode = 200; //OK Страница загружена
        res.end(urlParsed.query.message); //отправка ответа
        
    } else {
        
        res.statusCode = 404; //Not Found
        res.end("Page not found");
        
        //403 доступ запрещен
        //
    }
});
server.listen(1337, '127.0.0.1');
console.log("Сервер запущен");