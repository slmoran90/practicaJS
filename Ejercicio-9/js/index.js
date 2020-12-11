let userString = prompt('Frase:');
let auxString = '';

for (let i=0; i<userString.length; i++)
{
	switch(userString[i].toLowerCase())
	{
		case 'a':
			auxString += userString.substr(i,1);
			break;
		case 'e':
			auxString += userString.substr(i,1);
			break;
		case 'i':
			auxString += userString.substr(i,1);
			break;
		case 'o':
			auxString += userString.substr(i,1);
			break;
		case 'u':
			auxString += userString.substr(i,1);
			break;
		case ' ':
			auxString += userString.substr(i,1);
			break;
	}
}

document.write(auxString);