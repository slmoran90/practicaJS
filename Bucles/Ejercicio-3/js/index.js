let userString = '';  
let auxString = '';
let band = false;
let index=0;
const msg = 'Ingresar otro texto?';

do
{
	userString = prompt('Texto:');
	auxString += (userString + ' - '); // SE CONCATENAN LOS TEXTOS ACUMULADOS

	/* SE VALIDA LA BANDERA,
	   MIENTRAS SEA FALSA EL SISTEMA SIGUE
	   PIDIENDO UN TEXTO AL USUARIO */
	if(!confirm(msg)) band = true;

}while(!band);

/* CAPTURO LAS ULTIMAS 3 POSICIONES PARA ELIMINAR EL GUION SOBRANTE
   EN LA ULTIMA PALABRA */
index = auxString.length-3;
document.write(auxString.substr(0,index));