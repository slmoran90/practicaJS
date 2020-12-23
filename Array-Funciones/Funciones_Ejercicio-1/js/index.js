// LA FUNCION RETORNA TRUE SI EL NUM ES PAR
let isEven = (num) =>
{
	if(num%2 == 0) return true;
}

let userNum = parseInt(prompt('Número:'));

if(isEven(userNum)) alert('Es Par');
else alert('Es Impar');