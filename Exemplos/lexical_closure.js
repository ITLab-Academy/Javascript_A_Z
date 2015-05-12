function criaMultiplicador (fator) {
	console.log('estou criando a sua função');
	var _nome = 'Função Multiplicadora por ' + fator;

	var funcaoCriada = function(valor){
		if (valor == 5)
			_nome = 'vanderlei sempre';

		console.log(_nome);
		return fator * valor;
	};

	console.log(_nome);

	return funcaoCriada;
}

var multiplicaPorDois = criaMultiplicador(2);
console.log('já criei');


console.log('vou executar');

console.log(multiplicaPorDois(10));


var r = multiplicaPorDois(5);

console.log('retornou: ' + r);

