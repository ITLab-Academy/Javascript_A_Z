var calcula = function(fx, a, b) {
	console.log(a);
	console.log(b);

	var aa = a * a;

	var resultado = fx(aa, fx(a,b));

	return resultado;
}

var soma = function(x, y) {
	
	return x + y;

}

var subtrai = function(j, k) {
	
	return j - k;

}

var ressoma = calcula(soma, 123, 321);
var ressub = calcula(subtrai, 100, 200);

console.log('----------------------------');

console.log(ressoma);
console.log(ressub);