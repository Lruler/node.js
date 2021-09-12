// const hello = require('./hello')
const http = require('http')

// hello()

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello Node.js');
}).listen(3000, '127.0.0.1');

console.log('Server running at 127.0.0.1');