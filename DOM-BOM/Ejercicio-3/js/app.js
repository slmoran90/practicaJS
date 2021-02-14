const getDate = ()=>
{
	const date = new Date();
	const h1Date = document.getElementById('date');

	let hs = date.getHours(),
		min = date.getMinutes(),
		sec = date.getSeconds();

	if(hs < 10) hs = '0' + hs;
	if(min < 10) min = '0' + min;
	if(sec < 10) sec = '0' + sec;

	if(hs>=0 && hs<12) h1Date.innerHTML = `${hs}:${min}:${sec} AM`;
	else h1Date.innerHTML = `${hs}:${min}:${sec} PM`;
}

setInterval(getDate, 1000); 