let userNum = parseInt(prompt('Número:'));

// VUELVE A PEDIR UN NUMERO MIENTRAS ESTE SEA MAYOR A 50
while(userNum>50)
{
	alert('Ingresar un número menor a 50 inclusive.');
	userNum = parseInt(prompt('Número:'));
}

// MUESTRA LA PIRAMIDE EN SECUENCIA DE MENOR A MAYOR
for(let i=0; i<userNum; i++)
{
	// ESTE BUCLE IMPRIME LA CANTIDAD DE COLUMNAS QUE CORRESPONDE
	for(let j=0; j<=i; j++)
	{
		document.write(`${i+1}`);
	}

	document.write('<br>');
}