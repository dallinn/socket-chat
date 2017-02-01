var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/style.css', express.static(__dirname + '/style.css'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var clients = [];

io.on('connection', function(socket){
    socket.on('username', function(usr){
        clients.push(usr);
        socket['username'] = usr;
        socket.emit('username', socket['username']);
    });
    socket.on('chat message', function(msg){
        io.emit('chat message',{ message: msg, username: socket['username'] });
    });
    socket.on('getClients', function(){
        console.log(clients);
    });
    socket.on('disconnect', function() {
        clients.splice(clients.indexOf(socket['username']), 1);
    });
});

http.listen(3000);
