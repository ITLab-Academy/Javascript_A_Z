var sincrona = function(){
	console.log('boa');
}

var assincrona = function(callback){
	setTimeout(callback, 5000);
}

console.log('passo1');


//sincrona();

assincrona(function(){ console.log('boa222') })


console.log('passo2');

