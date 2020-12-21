let userText = prompt('Texto:');
let pos = 0;
let flag = true;

for(i in userText)
{
	if(flag)
	{
		switch(userText[i])
		{
			case 'a':
				pos = i;
				flag = false;
				break;
			case 'e':
				pos = i;
				flag = false;
				break;
			case 'i':
				pos = i;
				flag = false;
				break;
			case 'o':
				pos = i;
				flag = false;
				break;
			case 'u':
				pos = i;
				flag = false;
				break;
		}
	}
}

document.write(`El texto es: ${userText}`);
document.write(`<br>La posición de la primera vocal es: ${parseInt(pos)+1}`);