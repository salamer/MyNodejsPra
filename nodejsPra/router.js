function route (handle,pathname,response,postData) {
	console.log("about to route a request for"+pathname);
	console.log(typeof handle[pathname]+"~~~~~~~"+pathname);
	
	if(typeof handle[pathname]==="function"){
		console.log("check");
		handle[pathname](response,postData);
	}else{
		console.log("no request handler found for"+pathname);
		response.writeHead(404,{"Content-Type":"text/palin"});
		response.write("404 not found");
		response.end();
		
	}
	
}

exports.route=route;