let userString = prompt('Frase:');
let auxString = '';

	// se recorre la cadena de texto
for (let i=0; i<userString.length; i++)
{
	/* se evalua cada posicion de la cadena,
	en caso de ser una vocal, se captura y se la asigna a 
	una string auxiliar */
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