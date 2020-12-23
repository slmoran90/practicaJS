let diceOne = 0, diceTwo = 0
let k = 0;
let diceSum = [];
let repeat = [];

for(let i=0; i<50; i++)
{
	diceOne = Math.round(Math.random(i) * 6);
	diceTwo = Math.round(Math.random(i) * 6);

	diceSum.push(diceOne + diceTwo);
}

for(let i=2; i<13; i++)
{
	for(let j=0; j<diceSum.length; j++)
	{
		if(i == diceSum[j]) k++;
	}

	if(k!=0) repeat.push(k);
	k = 0;
}