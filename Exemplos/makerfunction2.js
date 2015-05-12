var criaobjeto = function(nome, dataNascimento){
	var _calculaIdade = function(){
		//calcula
		return 26;
	};

	return {
		nome: nome,
		dataNascimento: dataNascimento
	}
}


var obj = criaobjeto('luiggi', '21/06/1988');

console.log(obj);