let row = parseInt(prompt('Fila:'));
let column = parseInt(prompt('Columna:'));
let array = [];
let j = 0; // CONTADOR PARA lAS COLUMNAS DEL ARRAY

// CARGO EL ARREGLO DESDE 0 a N CELDAS POSIBLES
for(let i=0; i<row*column; i++)
{
	array.push(i+1);
}

// RECORRIDO DEL ARREGLO EN INVERSA
for(let i=array.length-1; i>=0; i--)
{
	// CUANDO EL CONTADOR IGUALE A LA VARIABLE DE COLUMNA, SALTA DE LINEA SIMULANDO UNA MATRIZ
	if(j==column)
	{
		document.write('<br>');
		j = 0;
	}
	j++;
	document.write(`${array[i]} `);
}