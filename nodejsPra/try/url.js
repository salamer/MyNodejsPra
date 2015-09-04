var http=require("http");
var url=require("url");

function start(route){
	function onRequest(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log("request for "+pathname+" received.");

		route(pathname);
		
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("hello nodejs");
		response.end();
	}
	http.createServer(onRequest).listen(8000);
	console.log("server has started");
}

exports.start=start;