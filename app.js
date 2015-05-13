var http = require('http');

var server;

server = http.createServer();
server.listen(8080);
server.on('request', function(req, res){


    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write('<b>Hello');
    setTimeout(function() {
        res.write(' мир!</b>')
        res.end();
    }, 2000);

});

server.on('listening', function() {
    console.log('Listening 8080');
});

