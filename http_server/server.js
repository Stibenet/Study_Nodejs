var http = require('http');

function start(){
http.createServer(function(req, res){
    console.log("ddsa");
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello world");
    res.end();
}).listen(8888);
console.log("started");
}

exports.start = start;