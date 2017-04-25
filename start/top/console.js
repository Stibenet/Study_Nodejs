//NO console.debug
console.log("log"); // = info (out)
console.error("error"); // = warn (err)
console.trace(); // (err)
//Различаются выводом, log - станд поток вывода
//warn - поток ошибок
//Для вывода в файл node console.js 1>ok 2>err