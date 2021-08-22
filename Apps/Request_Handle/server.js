var http = require('http');
var url = require('url');


function startserver(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request received for " + pathname);
        route(handle,pathname);
        response.writeHead(200,{"content-Type" : "text/plain"});
        response.write("Hello from our server module");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server started on localhost port:8888");
}
exports.startserver = startserver;

