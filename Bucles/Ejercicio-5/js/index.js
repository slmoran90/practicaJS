let userDNI = 0;
let modDNI = 0;
let lettArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

do
{
	userDNI = parseInt(prompt('DNI:'));

	// EVALUA QUE EL DATO INGRESADO SEA UN NUMERO
	if(!isNaN(userDNI))
	{
		if(userDNI>=0 & userDNI<=99999999)
		{
			modDNI = userDNI % 23;
			alert('Le corresponde la letra ' + lettArray[modDNI]);
		}
		// MUESTRA UN MSJ SI EL NUM NO ESTA DENTRO DEL RANGO
		else alert('Número erróneo.');
	}
	// MUESTRA UN MSJ SI EL DATO NO ES UN NUMERO
	else alert('El dato es invalido.');

}while(confirm('Ver otro DNI?'))