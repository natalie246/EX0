var util = require('util');
var events = require('events');
util.inherits(Game,events.EventEmitter);

function Game(points){
	this.points = points;
	events.EventEmitter.call(this);
}

//---Account Object prototypes----
Game.prototype.winPoint = function(points){
	this.points += points;
	this.emit('scoreChanged'); //emit (=fire) event
};

Game.prototype.losePoint = function(points){
	this.points -= points;
	this.emit('scoreChanged'); //emit (=fire) event
};


//--- the callbacks functions -------
function displayPoints(){
	console.log("You have: " + this.balance + "points");
}
function checkPoints(){
	if(this.points < 0){
		console.log("Game Over!!! " + this.balance);
	}
}

//--- create game instance and attach callbacks to events --------
exports.getGame = function(points){
	var game = new Game(points);
	game.on("scoreChanged", displayPoints);
	game.on("scoreChanged", checkPoints);
	return game;
}
