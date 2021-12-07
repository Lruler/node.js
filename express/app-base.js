const express = require('express')

const app = express()

// app.use((req, res) => {
//     res.json({
//         name: "nodenode"
//     })
// })

app.get('/name/:age', (req, res) => {
    let { age } = req.params
    res.json({
        name: 'nodeJs',
        age
    })
})
app.post('/post', (req, res) => {
    res.send('nodeJs post')
})

// 后端路由
app.get('/user/name', (req, res) => {
    let { name } = req.query
    res.json({
        name
    })
})

// app.all 可以忽略请求方式 app.use 使用中间件
app.listen(3000, console.error(
    console.log('Server启动成功')
))