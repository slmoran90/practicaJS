let userNames = [];
let pos = 0, age = 0, bigNum = 0;

for(let i=0; i<3; i++)
{
	userNames.push(prompt('Nombre:'));
	age = parseInt(prompt('Edad:'));

	if(age > bigNum)
	{
		bigNum = age;
		pos = i;
	}
}

document.write(`El mayor es: ${userNames[pos]}`);
