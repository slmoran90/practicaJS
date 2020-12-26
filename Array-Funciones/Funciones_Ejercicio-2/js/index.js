let userStr = prompt('Texto:');

let upperLow = (string) =>
{
	let isLow = 0;
	let isUpper = 0;

	for(let i=0; i<string.length; i++)
	{
		if(string[i].toLowerCase() == string.substr(i,1)) isLow++
		else if(string[i].toUpperCase() == string.substr(i,1)) isUpper++;
	}

	if(isLow != 0 && isUpper == 0) console.log('minuscula');
	else if(isUpper != 0 && isLow == 0) console.log('mayuscula');
	else console.log('mezcla');
}

upperLow(userStr);