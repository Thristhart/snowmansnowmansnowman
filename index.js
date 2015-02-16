var config = require('./lib/config');

var http = require('http');
var express = require('express');
var app = express(http);

app.use('/snowmansnowmansnowman', require('serve-static')('./public'));

var socket = require('socket.io');

var server = http.createServer(app);
server.listen(config.get('port'));
