let userNote = 0;
let band = true;

do
{
	userNote = parseFloat(prompt('Nota: \n(-1 Para salir.)'));

	if(userNote>=0 && userNote<=2) alert('Muy deficiente.');
	else if(userNote>=3 && userNote<=4) alert('Insuficiente.');
	else if(userNote>=5 && userNote<=6) alert('Suficiente.');
	else if(userNote>=7 && userNote<8) alert('Bien.');
	else if(userNote>=8 && userNote<=9) alert('Notable.');
	else if(userNote>=10 && userNote <11) alert('Sobresaliente.');
	// ------- CONDICION PARA ROMPER EL BUCLE
	else if(userNote == -1) band = false;
	// -------
	else alert('Número erroneo. Ingresar nota válida.');

}while(band)