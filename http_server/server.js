var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(req, res){
        var postData = "";
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        req.setEncoding("utf8");
        
        req.addListener("data", function(postDataChunk){
            //с каждым шагом заполняет переменную при новой порции
            //POST-данных
           postData += postDataChunk;
            console.log("Received POST data chunk '" + 
                       postDataChunk + "'.");
        });
        //указывает что вызов происходит после сбора POST-данных
        req.addListener("end", function(){
            //postData передаем для обработчиков запроса
            route(handle, pathname, res, postData); //callback-function
        });

}
    http.createServer(onRequest).listen(8888);
    console.log("started");
}

exports.start = start;