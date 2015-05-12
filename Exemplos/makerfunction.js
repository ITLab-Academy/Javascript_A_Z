function criaMultiplicador (fator) {
	return function(valor){
		return fator * valor;
	};
}

var multiplicaPorDois = criaMultiplicador(2);
var multiplicaPorTres = criaMultiplicador(3);

console.log(multiplicaPorDois(5));
console.log(multiplicaPorTres(5));