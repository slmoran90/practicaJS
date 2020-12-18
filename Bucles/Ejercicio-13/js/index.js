let userStr = prompt('Texto:');

document.write(`<b>Texto original</b>: ${userStr} <br>`);
document.write(`<b>Texto en mayúsculas</b>: `);

for(let i=0; i<userStr.length; i++)
{
	document.write(`${userStr[i].toUpperCase()}`);
}