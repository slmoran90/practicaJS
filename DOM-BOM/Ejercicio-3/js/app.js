const getDate = ()=>
{
	/*360° equivale a una vuelta completa de reloj
	por lo que 360/60 (minutos) es igual a 6°
	por minuto*/

	const deg = 6,
		divHs = document.getElementById('hs'),
		divMin = document.getElementById('min'),
		divSec = document.getElementById('sec');

	let date = new Date(),
		/*las horas en el reloj estan separadas cada 5 minutos
		por lo que la aguja recorre 30° entre hora y hora*/
		hs = date.getHours() * 30,
		/*multiplicar los minutos y segundos por la constante gradial
		para poder posicionar la aguja en su correspondiente angulo*/
		min = date.getMinutes() * deg,
		sec = date.getSeconds() * deg;

	/*las agujas giran por medio de la propiedad transform
	solo asignandole sus grados correspondientes*/
	divHs.style.transform = `rotateZ(${hs+(min/12)}deg)`;
	divMin.style.transform = `rotateZ(${min}deg)`;
	divSec.style.transform = `rotateZ(${sec}deg)`;
}

setInterval(getDate, 1000);
