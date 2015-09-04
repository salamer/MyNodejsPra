var server=require("./url");
var router=require("./route");

server.start(router.route);