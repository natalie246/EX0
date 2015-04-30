var game = require('./index');
var http = require('http');

var game1 = game.getGame(0);



game1.winPoint(200);


//the get function recives a route and callback function
http.createServer(function(req,res){
	res.setHeader('content-type','text/html');
	res.writeHead(200);
}).listen(3000);
console.log("listening on port 3000");
