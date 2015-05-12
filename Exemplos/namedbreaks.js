superior:
for (var i=0; i < 5 ; i++)
{
	console.log('i: ' + i);
	for (var j =0; j < 3; j++)
	{
		console.log('j: ' + j);
		if (i > 1)
			break superior;
	}
}

console.log('acabou');