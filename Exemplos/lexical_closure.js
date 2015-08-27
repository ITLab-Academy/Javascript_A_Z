function criaContador() {
	var _contagem = 0;

	var contador = function(){
		_contagem++;
		return _contagem;
	};

	return contador;
}

var c = criaContador();

console.log(c());
console.log(c());
console.log(c());