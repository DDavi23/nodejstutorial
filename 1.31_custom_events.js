var events = require("events"); 
var util = require("util");

var Person = function(name){
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var danyel = new Person("danyel");
var joey = new Person("joey");
var tara = new Person("tara");
var people = [danyel, joey, tara];//this is an array

people.forEach(function(person) {
	person.on("speak", function(mssg) {
		console.log(person.name + " said: " + mssg);
	});//attaching a custom event to each person
	//as we go through an array
});

danyel.emit("speak", "what up");//returns danyel said: what up


