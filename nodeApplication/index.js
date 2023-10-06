var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World From Usman Asim!");

});

var port = 6000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
