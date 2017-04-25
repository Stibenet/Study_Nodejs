var util = require('util');

//parent
function Animal(name){
    this.name = name;
}

Animal.prototype.walk = function(){
    console.log("Ходит " + this.name);
};

//child
function Rabbit(name){
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function(){
    console.log("Прыгает " + this.name);
};

//using
var rabbit = new Rabbit("мой кролик");
rabbit.walk();
rabbit.jump();