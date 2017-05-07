//аргументы передаются по цепочке
//обработчики срабатывают в том же порядке, в котором назначены
/* var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(request){ //Обработчик
   request.approved = true; 
});

server.on('request', function(request){
   console.log(request); 
});

server.emit('request', {from: "Клиент"});
server.emit('request', {from: "Второй клиент"})*/

var EventEmitter = require('events').EventEmitter;

var db = new EventEmitter();
db.setMaxListeners(0); //убираем лимит(состоит из 10 обработок)

function Request(){
    var self = this;
    
    this.bigData = new Array(1e6).join('*');
    
    this.send = function(data){
        console.log(data);
    };
    
    function onData(info){
        self.send(info);
    };
    
    this.end = function(){
        db.removeListener('data',onData)
    };
    
    db.on('data', onData);
}

setInterval(function(){
    var request = new Request();
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);