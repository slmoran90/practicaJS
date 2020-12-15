let userNum = 0;
let accNums = 0;
const msg = 'Ingresar otro número?';

do
{
	userNum = parseFloat(prompt('Número:'));

	if(isNaN(userNum)) alert('El dato no es un número.');
	else accNums += userNum;

}while(confirm(msg));

alert('La suma total es: ' + accNums);