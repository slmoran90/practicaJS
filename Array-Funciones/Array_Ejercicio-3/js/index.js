let diceOne = 0, diceTwo = 0
let k = 0;
let diceSum = [];
let numRepeat = [];

for(let i=0; i<15; i++)
{
	diceOne = Math.round(Math.random(i) * 6);
	diceTwo = Math.round(Math.random(i) * 6);

	diceSum.push(diceOne + diceTwo);
}

document.write(diceSum.join(', ') + '<br>');
