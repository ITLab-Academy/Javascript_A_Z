function soma(a, b) {
	console.log(this);
	console.log(a + b);

	return a + b;
}

soma(1,2);

var meuObjeto = { nome: 'luiggi' };

soma.call(meuObjeto, 1, 2);
soma.apply(meuObjeto, [1, 2]);