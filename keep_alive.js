var http = require('http');
http.createServer(function (req, res) {
  res.write("TELEGRAM=@HUNTER_IS_OP");
  res.end();
}).listen(8080);
