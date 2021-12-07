const express = require('express')
const memberRouter = require('./member.router')

const app = express()
/* 
什么是中间件？
1. 是一个函数
2. err, req, res, next --> function

中间件用来干什么？
1. 处理异常
2. 处理业务功能，然后转交控制权
3. 当作路由的处理函数
*/

// 检测query参数是否有name的中间件
const middlewareDemo = (req, res, next) => {
    let { name } = req.query
    if (!name || !name.length) {
        res.json({
            message: "缺少name参数"
        })
    }
    else next()
}

// 使用中间件
app.all("*", middlewareDemo)
// 注册路由
app.use('/member', memberRouter)

app.listen(3000, () => {
    console.log('Server success')
})