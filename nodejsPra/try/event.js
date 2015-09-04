var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('some_evnet',function(){
	console.log('some_evnet occured');
});
setTimeout(function() {
	event.emit('some_evnet');
},1000);
console.log('check');