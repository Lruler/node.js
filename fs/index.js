var fs = require('fs')

// Buffer是内存当中开辟的一个缓冲区，可以开辟成一个数组(理解为一个连续的区域)
// let buf = Buffer.alloc(20);
// console.log(buf);
// 同步
/* 
var fd = fs.openSync('hello.txt','r')
console.log(fd);
let content = fs.readFileSync('hello.txt',{flag:'r',encoding:'utf-8'})
console.log(content); 
*/
// 异步
fs.readFile("hello.txt",{flag:"r",encoding:"utf-8"},function(err,data){
    if(err) console.log(err);
    else console.log(data);
})  