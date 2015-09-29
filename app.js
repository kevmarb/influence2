var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var votes = {
	'justin bieber': 0,
	'one direction' : 0
};

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('choice', function(what){
    console.log('chosen: ' + what);
  if (what === 'justin bieber'){
  	votes['justin bieber']++;
  } else { 
  	votes['one direction']++;
  }
console.log(votes);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
