var http = require('http');
var url = require('url');

function start( route ){
    function onRequest(request, response){
        var pathname = url.parse( request.url ).pathname;
        console.log('Received '+pathname);

        route(pathname);

        response.writeHead(200, {'content-type':'text/plain'});
        response.write('Im diving in code world');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}
exports.start = start;