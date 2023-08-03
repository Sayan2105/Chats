const express = require('express');
// import express from 'express';
// import { Server } from 'socket.io';
const { Server } = require('socket.io');
const http = require('http');
// import http from 'http';
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	socket.on('send name', (username) => {
		io.emit('send name', username);
	});

	socket.on('send message', (chat) => {
		io.emit('send message', chat);
	});
});

server.listen(port, () => {
	console.log(`Server is listening at the port: ${port}`);
});
