let citys = [];
let i = 0;
let len = 0;
let flag = true;
const msg = '¿Agregar otra ciudad?';

do
{
	citys.push(prompt('País / Ciudad:'));

	if(citys[i] == '0' || !confirm(msg))
	{
		if(citys[i] == '0') citys.splice(i,1);
		flag = false;
	}

	i++;
}while(flag)

// ARREGLO ORIGINAL
document.write(`<b>Array original</b>: ${citys.join(', ')}`);

// MOSTRAR LA LONGITUD DEL ARREGLO
len = citys.length;
document.write(`<br><br>Longitud: ${len}`);

// MOSTRAR ITEMS DE LA 1era, 3era Y UTLIMA POSICION  
document.write(`<br><br>Item 1era posición: ${citys[0]}`);
document.write(`<br>Item 3era posición: ${citys[2]}`);
document.write(`<br>Item última posición: ${citys[len-1]}`);

// AÑADIR PARIS A LA ULTIMA POSICION
citys.push('París');

// MOSTRAR EN PANTALLA EL ELEMENTO EN LA SEGUNDA POSICION
document.write(`<br><br>Item en 2da posición: ${citys[1]}`);

// SUSTITUIR 2do ELEMENTO POR BARCELONA
citys.splice(1,1,'Barcelona');

// ARREGLO CON MODIFICACIONES
document.write(`<br><br>${citys.join(', ')}`);