let userText = prompt('Texto:');
let len = 0;

len = userText.length;

for(let i=0; i<len; i++)
{
	if(i == len-1) document.write(userText[i]);
	else document.write(`${userText[i]}-`);
}