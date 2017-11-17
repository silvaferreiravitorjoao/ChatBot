console.log('O bot está sendo iniciado');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

T.get('search/tweets', 
{ q: '#pizza', count: 3 }, 

function(err, data, response) {
  console.log(pizza é na Four Kings!!)
})

function tweeted(err, data, response){
	if (err) {
		console.log("Tem alguma coisa errada!!")
	} else{
	console.log("Pronto,tudo certo!");
}
