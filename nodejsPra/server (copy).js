var http=require("http");
var url=require("url");

function start(route,handle){
	function onRequest(request,response){
		var postData="";

		var pathname=url.parse(request.url).pathname;
		console.log("request for"+pathname+"received.");

		request.setEncoding("utf8");

		request.addListener("data",function(postDataChunk){
			postData+=postDataChunk;
			console.log("received POST data chunk  "+postDataChunk+".");
		});

		request.addListener("end",function(){
			console.log(postData);
			route(handle,pathname,response,postData);
		});

		
	}


http.createServer(onRequest).listen(8888);

console.log("server has started!");

}
exports.start=start;