//var log = require('./logger')(module);
var db = require('./db');
db.connect();
var User = require('./user') //подключение отдельного файла

function run() {
var vasya = new User("Вася");
var petya = new User("Петя");
vasya.hello(petya);

console.log(db.getPhrase("Run successful"));
}

if (module.parent){
    exports.run = run;
    console.log(db.getPhrase("run with parent"));
}else{
    run();
    console.log(db.getPhrase("run without parent"));
}

require("child_process").exec("pause"); //предотвращает закрытие окна