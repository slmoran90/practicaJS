let citys = [];
let flag = true;
let len = 0;
let i = 0;
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

}while(flag);

// ARREGLO ORIGINAL
document.write(`<b>${citys}</b>`)

// MOSTRAR LONGITUD DEL ARREGLO
len = citys.length;
document.write(`<br><b>Logintud</b>: ${len}`);

// MOSTRAR POSICIONES 1,2 Y ULTIMA
document.write(`<br><b>Posiciónes elementos 1, 3 y último</b>: ${citys[0]}, ${citys[2]} y ${citys[len-1]}`);

// AGREGAR PARIS COMO ULTIMO ELEMENTO
citys.push('París');
document.write(`<br><b>Agregado Paris</b>: ${citys}`);

// MOSTRAR ELEMENTO DE LA SEGUNDA POSICION
document.write(`<br><b>Elemento en 2da posición</b>: ${citys[1]}`);

// SUSTITUIR ELEMENTO DE LA SEGUNDA POSICION POR "BACELONA"
document.write(`<br><b>Sustitudio ${citys[1]} por Barcelona</b>:`);
citys.splice(1,1,'Barcelona');
document.write(`<br>${citys.join(' - ')}`);