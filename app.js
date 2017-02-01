var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/style.css', express.static(__dirname + '/style.css'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('username', function(usr){
        socket['username'] = usr;
        socket.emit('username', socket['username']);
        //console.log(socket['username']);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message',{ message: msg, username: socket['username'] });
    });
});

http.listen(3000);
