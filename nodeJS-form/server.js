var http = require('http');



var counter = 0;
var server = new http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	res.end("Привет, мир!" + ++counter);
});

server.listen(3000, '127.0.0.1');

