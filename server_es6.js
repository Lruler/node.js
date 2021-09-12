const http = require('http')

http.createServer((req, res) => { 
    let status = 200;
    res.writeHead(status, {'Content-type': 'text/plain'});
    res.end('Hello Node.js');
}).listen(3000, '127.0.0.1');

console.log('Server running at 127.0.0.1');

