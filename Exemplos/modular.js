// Arquivo 1
var MeuProjeto = (function (meuProjeto) {
	meuProjeto.setup = function(){};
	meuProjeto.inicia = function(){};
	
	meuProjeto.Cadastro = {
		Listar: function(){}
	};

	meuProjeto.Modulo = (function (modulo) {
		modulo.Listar = function(){};
			
		return modulo;
	}(meuProjeto.Modulo || {}));
	
	return meuProjeto;
}(MeuProjeto || {}));

// Arquivo 2
var MeuProjeto = (function (meuProjeto) {
	meuProjeto.Modulo = (function (modulo) {
		modulo.Novo = function(){};
			
		return modulo;
	}(meuProjeto.Modulo || {}));
	
	return meuProjeto;
}(MeuProjeto || {}));

console.log(MeuProjeto);