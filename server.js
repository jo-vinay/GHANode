/* 'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
*/

// set the variables 
var express = require('express');
var app = express();
var path = require('path');

// get the index.html file using res.sendFile()
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// sets the localhost to 8080 - http://localhost:8080
app.listen(1337);
