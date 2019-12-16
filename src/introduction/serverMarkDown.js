var http = require('http');
var monmodule = require('./monmodule');
var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));

// Code équivalent au précédent
var server = http.createServer();
server.on('request', function(req, res) { 
    res.writeHead(200);
    res.end(monmodule.direBonjour());
});



server.listen(8080); // Démarre le serveur
