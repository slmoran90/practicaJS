let meses = ["Enero", "Febrero", "Marzo",
			"Abril", "Mayo", "Junio",
			"Julio", "Agosto", "Septiembre",
			"Octubre", "Noviembre", "Diciembre"];

for(i in meses)
{
	document.write(`${parseInt(i)+1}: ${meses[i]} <br>`);
}