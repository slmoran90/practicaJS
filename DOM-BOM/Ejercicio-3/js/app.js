const getDate = ()=>
{
	const deg = 6,
		divHs = document.getElementById('hs'),
		divMin = document.getElementById('min'),
		divSec = document.getElementById('sec');

	setInterval(()=>
	{
		let date = new Date(),
			hs = date.getHours() * 30,
			min = date.getMinutes() * deg,
			sec = date.getSeconds() * deg;

		divHs.style.transform = `rotateZ(${hs+(min/12)}deg)`;
		divMin.style.transform = `rotateZ(${min}deg)`;
		divSec.style.transform = `rotateZ(${sec}deg)`;
	})
}

getDate();