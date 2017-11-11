console.log("O Bot esta ativo");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


var tweet = {
  status: '#Fou_Kings a melhor pizza da terra'
}

T.post('statuses/uptade', tweet, tweeted);

function tweeted(err, data, response){
  if (err){
    console.log("Algo de errado nao esta certo!");
  } else{
  console.log("Funfou");
	}
}