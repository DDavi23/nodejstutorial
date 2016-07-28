var events = require("events"); 

var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function(mssg){//myEmitter is the object
	//someEvent is the event
	console.log(mssg);//mssg is the callback function
});

myEmitter.emit("someEvent", "the event was emitted");//the string being 
//passed through the function
//returns the event was emitted