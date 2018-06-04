var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var events = require('events');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    var rs = fs.createReadStream('./summer.html');

    rs.on('open', function () {
        //console.log('summer.html file is open');
    }); 

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

    let eventEmitter = new events.EventEmitter();

    // var handle = 

    eventEmitter.on('bla', function() {
        console.log('bla bla bla');
    });
    eventEmitter.emit('bla');

}).listen(8080); 