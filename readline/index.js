let readline = require('readline')

// 创建readline实例

let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("我是不是张旷的爹?",(answer) => {
    console.log("我是不是张旷的爹:" + answer);
    // close用于结束程序
    rl.close()
})

// close事件监听
rl.on("close",() => {
    // 结束进程
    process.exit(0)
})