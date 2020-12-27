let userNum = parseInt(prompt('Número:'));

let table = (num) =>
{
	for(let i=1;i<=10;i++) document.write(`${num} * ${i} = ${i*num}<br>`);
}

document.write(`Tabla del ${userNum}:<br><br>`);
table(userNum);