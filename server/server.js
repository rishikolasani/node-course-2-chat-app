const express = require('express');
const socketIO=require('socket.io');
const path = require('path');
const http = require('http');

const publicPath = path.join(__dirname,'/../public');
const port = process.env.PORT ||3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('new user connected');
  socket.on('disconnect',()=>{
    console.log('disconnected  from the server');
  });
});



server.listen(port,()=>{
  console.log(`srver is up on  ${port}`);
});
