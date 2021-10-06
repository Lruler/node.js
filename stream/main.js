// 写入流
let fs = require('fs');
let data = 'www.sxt.com';
// 创建一个写入流 写入到文件output.txt
let writerSteram = fs.createWriteStream('output.txt')

// 改变编码
writerSteram.write(data, 'UTF8');

// 标记文件末尾
writerSteram.end();

// 处理流事件 --> data,end and error
writerSteram.on('finish',(err) => {
    console.log(err.stack);
})

console.log('执行完毕');