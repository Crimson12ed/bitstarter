#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var outfile = "indexnew.html";
var buffer = new Buffer(fs.readFileSync(outfile), "utf-8");
var output = buffer.toString();

app.get('/', function(request, response) {
    //response.send('Hello World 2!');
    response.send(output);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
