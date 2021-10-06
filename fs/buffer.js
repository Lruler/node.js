/* 
    1. 数组不能进行二进制数据的操作
    2. Js数组不像Java，py那样高效
    3. buffer在内存空间开辟出固定大小的内存
*/
let str = 'zhangkuang'

let buf = Buffer.from(str) // 将字符串转成Buffer
// console.log(buf); 
// console.log(buf.toString()); // 输出Buffer

// 开辟一个buf缓存区
let buf1 = Buffer.alloc(10)
buf1[0] = 10
console.log(buf1);

// readdir 和 rmdir 感觉打包就是基于这些东西实现的？