var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//Назначение различных URL соответствующим обработчикам запроса
//Ключ/значение
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);