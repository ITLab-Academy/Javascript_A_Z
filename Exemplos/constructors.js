function Pessoa(nome, idade){
	this.nome = nome;
	this.idade = idade;
	
	this.seApresente = function() {
		console.log('Oi! Meu nome é ' + nome + '.');
	}
}

var luiggi = new Pessoa('Luiggi', 27);
console.log(luiggi);

luiggi.seApresente();

Pessoa.prototype.eMaiorDeIdade = function() {
	return this.idade > 18;
}

console.log(luiggi.eMaiorDeIdade());