let row = parseInt(prompt('Fila:'));
let column = parseInt(prompt('Columna:'));
let array = [];

for(let i=0; i<row; i++)
{
	array[i] = new Array(column);  
	for(let j=0; j<column; j++)
	{
		array[i][j] = array.push(j)-1;
	}
}

for(let i=row-1; i>=0; i--)
{
	for(let j=column-1; j>=0; j--)
	{
		document.write(array[i][j] + ' ');
	}
	document.write('<br>');
}
