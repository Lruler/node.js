const express = require('express')
const memberRouter = require('./member.router')

const app = express()

const models = require("../models")
/* 
什么是中间件？
1. 是一个函数
2. err, req, res, next --> function

中间件用来干什么？
1. 处理异常
2. 处理业务功能，然后转交控制权
3. 当作路由的处理函数
*/

/* 检测query参数是否有name的中间件
const middlewareDemo = (req, res, next) => {
    let { name } = req.query
    if (!name || !name.length) {
        res.json({
            message: "缺少name参数"
        })
    }
    else next()
}

使用中间件
app.all("*", middlewareDemo)
*/

app.get('/create', async (req, res) => {
    let { name } = req.query
    // Promise user --> sequlize 对象
    let user = await models.User.create({
        name
    })
    res.json({
        message: "创建成功！",
        user
    })
})

app.get('/list', async (req, res) => {
    let list = await models.User.findAll()
    res.json({
        list
    })
})

app.get('/detail/:id', async (req, res) => {
    let { id } = req.params
    let user = await models.User.findOne({
        where: {
            id
        }
    })
    res.json({
        user
    })
})
// 注册路由
app.use('/member', memberRouter)

app.listen(3000, () => {
    console.log('Server success')
})