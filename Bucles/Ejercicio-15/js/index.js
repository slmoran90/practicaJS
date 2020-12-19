let userText = prompt('Texto:');
let count = 0;

for (let i=0; i<userText.length; i++)
{
	switch(userText[i])
	{
		case 'a':
			count++;
			break;
		case 'e':
			count++;
			break;
		case 'i':
			count++;
			break;
		case 'o':
			count++;
			break;
		case 'u':
			count++;
			break;
	}
}

document.write(`Texto original: ${userText}`);
document.write(`<br>Total de vocales: ${count}`);