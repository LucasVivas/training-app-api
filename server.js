var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Training app');
});

server.listen(3000); 
console.log("Listening on the port 3000...")
