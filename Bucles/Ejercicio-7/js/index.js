let userNum = parseInt(prompt('Número:'));

// VUELVE A PEDIR UN NUMERO MIENTRAS ESTE SEA MAYOR A 50
while(userNum>50)
{
	alert('Escribir un valor menor a 50 inclusive.');
	userNum = parseInt(prompt('Número:'));
}

// MUESTRA LA PIRAMIDE EN SECUENCIA INVERSA, DE MAYOR A MENOR
for(let i=userNum; i>0; i--)
{
	// ESTE BUCLE IMPRIME LA CANTIDAD DE COLUMNAS QUE CORRESPONDE
	for(let j=0; j<i; j++)
	{
		document.write(`${i}`);
	}

	document.write('<br>');
}