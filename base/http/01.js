const http = require('http')

const port = 4000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello 世界\n')
})

server.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}/`)
})